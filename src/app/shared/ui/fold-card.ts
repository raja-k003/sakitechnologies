import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteImage } from '../../core/data/images';
import { Icon } from './icon';
import { InrPipe } from './inr.pipe';

/**
 * Folding feature card: a coloured "cover" that swings open like a book to reveal the details page.
 * Opens on hover (mouse), keyboard focus, or a tap on "View me" (touch). Escape / tapping elsewhere closes it.
 * Colours come from the active theme (`--color-primary` / `--color-accent`), so every theme preset recolours the cards.
 * Set `--fc-just` on the host (flex-start | center | flex-end) to choose which way the open card grows.
 */
@Component({
  selector: 'app-fold-card',
  imports: [RouterLink, Icon, InrPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-open]': 'open()',
    '(pointerenter)': 'onEnter($event)',
    '(pointerleave)': 'onLeave($event)',
    '(focusin)': 'open.set(true)',
    '(focusout)': 'onFocusOut($event)',
    '(keydown.escape)': 'open.set(false)',
    '(document:click)': 'onDocClick($event)',
  },
  template: `
    <article class="fc" [style.--tone]="tone()" [style.--shade]="shade()">
      <div class="fc__inside" [attr.inert]="open() ? null : ''">
        @if (fromPrice()) { <span class="fc__pill">From {{ fromPrice() | inr }}</span> }
        <h3 class="fc__inside-title">{{ detailTitle() }}</h3>
        <p class="fc__text">{{ summary() }}</p>
        @if (points().length) {
          <ul class="fc__points">
            @for (p of points(); track p) { <li><app-icon name="check" [size]="13" />{{ p }}</li> }
          </ul>
        }
        <a class="fc__btn" [routerLink]="link()">View {{ shortName() }}</a>
      </div>

      <div class="fc__flip">
        <div class="fc__cover">
          <div class="fc__front" [attr.inert]="open() ? '' : null">
            <div class="fc__top">
              <app-icon class="fc__icon" [name]="icon()" [size]="52" />
              <h3 class="fc__title">{{ name() }}</h3>
              <p class="fc__price">@if (fromPrice()) { From {{ fromPrice() | inr }} } @else { Price on request }</p>
            </div>
            <button type="button" class="fc__view" [attr.aria-expanded]="open()" (click)="open.set(true)">
              View me <app-icon name="arrow-right" [size]="16" /><span class="visually-hidden"> — {{ name() }} details</span>
            </button>
          </div>
          <div class="fc__back" aria-hidden="true">
            <img [src]="image().src" alt="" loading="lazy" decoding="async" width="400" height="500" />
          </div>
        </div>
      </div>
    </article>
  `,
  styleUrl: './fold-card.scss',
})
export class FoldCard {
  readonly name = input.required<string>();
  readonly shortName = input('product');
  readonly summary = input.required<string>();
  readonly link = input.required<string>();
  readonly image = input.required<SiteImage>();
  readonly icon = input('drop');
  /** 0–100: how much of the theme accent is blended into the theme primary (0 = pure primary). */
  readonly tone = input(0);
  /** 0–100: percentage of black mixed in, so white text stays AA-readable on any theme. */
  readonly shade = input(12);
  readonly fromPrice = input<number | undefined>(undefined);
  readonly detailTitle = input('Why choose it');
  readonly points = input<string[]>([]);

  protected readonly open = signal(false);

  protected onEnter(e: PointerEvent): void { if (e.pointerType === 'mouse') this.open.set(true); }
  protected onLeave(e: PointerEvent): void { if (e.pointerType === 'mouse') this.open.set(false); }
  protected onFocusOut(e: FocusEvent): void {
    const host = e.currentTarget as HTMLElement;
    if (!host.contains(e.relatedTarget as Node | null)) this.open.set(false);
  }
  protected onDocClick(e: Event): void {
    if (this.open() && !(e.target as Element | null)?.closest?.('app-fold-card.is-open')) this.open.set(false);
  }
}
