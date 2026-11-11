import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, input, signal } from '@angular/core';
import { Testimonial } from '../../core/data/content';
import { TestimonialCard } from '../../shared/ui/testimonial-card';

/**
 * Coverflow-style review carousel: the active review sits centred at full size, neighbours shrink and fade to the sides,
 * and the ring loops. Autoplays (paused on hover/focus and with reduced motion); dots, arrows, keys and swipe also work.
 */
@Component({
  selector: 'app-review-carousel',
  imports: [TestimonialCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group', 'aria-roledescription': 'carousel', 'aria-label': 'Customer reviews',
    '(mouseenter)': 'paused.set(true)', '(mouseleave)': 'paused.set(false)',
    '(focusin)': 'paused.set(true)', '(focusout)': 'paused.set(false)',
    '(keydown.arrowRight)': 'go(1)', '(keydown.arrowLeft)': 'go(-1)',
  },
  template: `
    <div class="stage" (pointerdown)="down($event)" (pointerup)="up($event)" (pointercancel)="startX = null">
      <ul>
        @for (s of slides(); track s.item.name) {
          <li class="slide" [class.is-active]="s.rel === 0" [style.--rel]="s.rel" [style.--abs]="s.abs"
              [attr.aria-hidden]="s.abs > 0 ? 'true' : null" [attr.inert]="s.abs > 0 ? '' : null">
            <app-testimonial-card [item]="s.item" variant="tile" />
            @if (s.abs > 0 && s.abs <= 2) {
              <button type="button" class="pick" (click)="goTo(s.i)" tabindex="-1" [attr.aria-label]="'Show review by ' + s.item.name"></button>
            }
          </li>
        }
      </ul>
    </div>
    <div class="nav">
      <button type="button" class="arrow" (click)="go(-1)" aria-label="Previous review">←</button>
      <div class="dots" role="tablist" aria-label="Choose a review">
        @for (s of slides(); track s.item.name) {
          <button type="button" class="dot" role="tab" [class.on]="s.rel === 0" [attr.aria-selected]="s.rel === 0" [attr.aria-label]="'Review by ' + s.item.name" (click)="goTo(s.i)"></button>
        }
      </div>
      <button type="button" class="arrow" (click)="go(1)" aria-label="Next review">→</button>
    </div>
  `,
  styleUrl: './review-carousel.scss',
})
export class ReviewCarousel {
  readonly items = input.required<Testimonial[]>();
  readonly autoplayMs = input(5000);

  protected readonly active = signal(0);
  protected readonly paused = signal(false);
  protected startX: number | null = null;

  protected readonly slides = computed(() => {
    const n = this.items().length, a = this.active();
    return this.items().map((item, i) => {
      const rel = ((((i - a + n / 2) % n) + n) % n) - n / 2; // shortest circular offset, −n/2 … n/2
      const r = Math.round(rel);
      return { item, i, rel: r, abs: Math.abs(r) };
    });
  });

  constructor() {
    const reduce = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    afterNextRender(() => {
      const id = setInterval(() => { if (!this.paused() && !reduce() && !document.hidden) this.go(1); }, this.autoplayMs());
      inject(DestroyRef).onDestroy(() => clearInterval(id));
    });
  }

  protected go(dir: 1 | -1): void { const n = this.items().length; this.active.set((this.active() + dir + n) % n); }
  protected goTo(i: number): void { this.active.set(i); }
  protected down(e: PointerEvent): void { this.startX = e.clientX; }
  protected up(e: PointerEvent): void {
    if (this.startX === null) return;
    const dx = e.clientX - this.startX; this.startX = null;
    if (Math.abs(dx) > 50) this.go(dx < 0 ? 1 : -1);
  }
}
