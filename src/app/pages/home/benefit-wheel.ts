import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/ui/icon';

export interface WheelItem { icon: string; title: string; text: string; link: string }

/** Per-card colour variety: how much theme accent is blended in (%), and how much black (%). */
const TONES = [0, 38, 72, 18, 55, 86, 28];
const SHADES = [10, 14, 24, 28, 20, 30, 16];

/**
 * Wheel carousel: cards sweep along a diagonal arc around the active card, rotating about their bottom-left corner
 * and fading with distance. Click a side card, use the arrows (buttons or keyboard) or swipe to turn the wheel.
 */
@Component({
  selector: 'app-benefit-wheel',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group',
    'aria-roledescription': 'carousel',
    'aria-label': 'Our services',
    '(keydown.arrowRight)': 'go(1)',
    '(keydown.arrowLeft)': 'go(-1)',
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
    '[style.--n]': 'total()',
  },
  templateUrl: './benefit-wheel.html',
  styleUrl: './benefit-wheel.scss',
})
export class BenefitWheel {
  readonly items = input.required<WheelItem[]>();
  protected readonly active = signal(0);
  protected readonly total = computed(() => this.items().length);
  protected readonly view = computed(() => {
    const n = this.total(), a = this.active();
    return this.items().map((item, i) => {
      const d = Math.abs(i - a);
      return {
        ...item, i,
        rel: (i - a) / n,
        z: i === a ? n : n - d,
        tone: TONES[i % TONES.length], shade: SHADES[i % SHADES.length],
        isActive: i === a,
        num: String(i + 1).padStart(2, '0'),
      };
    });
  });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  /** Resolved `top` (px) of the sticky stage, i.e. where it pins below the viewport top. */
  private stickTop(): number {
    const stick = this.host.nativeElement.querySelector<HTMLElement>('.stick');
    return stick ? parseFloat(getComputedStyle(stick).top) || 0 : 0;
  }

  /** Scroll-pinned mode: the stage sticks while the page scrolls, and scroll progress turns the wheel. */
  private pinned(): boolean {
    return typeof matchMedia === 'function' && matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)').matches;
  }

  protected onScroll(): void {
    if (!this.pinned()) return;
    const el = this.host.nativeElement;
    const range = this.range();
    if (range <= 0) return;
    const p = Math.max(0, Math.min(1, (this.stickTop() - el.getBoundingClientRect().top) / range));
    this.set(Math.round(p * (this.total() - 1)));
  }

  /** Scroll distance over which the stage stays pinned (host height minus the stage's own height). */
  private range(): number {
    const el = this.host.nativeElement;
    const stick = el.querySelector<HTMLElement>('.stick');
    return el.offsetHeight - (stick?.offsetHeight ?? 0);
  }

  /** In pinned mode, bring the page to the scroll position that shows card `i` (the scroll handler then follows). */
  private scrollToCard(i: number): void {
    const el = this.host.nativeElement;
    const range = this.range();
    const top = el.getBoundingClientRect().top + window.scrollY - this.stickTop() + (i / (this.total() - 1)) * range;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  protected readonly Math = Math;
  protected startX: number | null = null;

  /** User-initiated navigation (buttons, keys, swipe, click). */
  protected go(dir: 1 | -1): void { this.pick(this.active() + dir); }
  protected pick(i: number): void {
    const t = Math.max(0, Math.min(this.total() - 1, i));
    if (this.pinned()) this.scrollToCard(t); else this.active.set(t);
  }
  /** Scroll-driven update. */
  protected set(i: number): void { this.active.set(Math.max(0, Math.min(this.total() - 1, i))); }

  protected down(e: PointerEvent): void { this.startX = e.clientX; }
  protected up(e: PointerEvent): void {
    if (this.startX === null) return;
    const dx = e.clientX - this.startX;
    this.startX = null;
    if (Math.abs(dx) > 50) this.go(dx < 0 ? 1 : -1);
  }
}
