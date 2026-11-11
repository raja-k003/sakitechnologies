import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Breadcrumb } from '../../core/seo/seo.models';
import { Breadcrumbs } from './breadcrumbs';

/** Inner-page hero: breadcrumbs, the page's single H1 and an optional lead. */
@Component({
  selector: 'app-page-header',
  imports: [Breadcrumbs],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="page-header">
      <div class="container">
        @if (breadcrumbs().length) {
          <app-breadcrumbs [items]="breadcrumbs()" />
        }
        @if (eyebrow()) {
          <p class="eyebrow">{{ eyebrow() }}</p>
        }
        <h1>{{ title() }}</h1>
        @if (lead()) {
          <p class="lead">{{ lead() }}</p>
        }
        <ng-content />
      </div>
    </header>
  `,
  styles: `
    .page-header {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      padding-block: clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem) clamp(2rem, 1rem + 2.5vw, 3.25rem);
      background:
        radial-gradient(46rem 18rem at 92% -25%, color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 70%),
        radial-gradient(34rem 15rem at -5% 125%, color-mix(in srgb, var(--color-primary) 12%, transparent), transparent 70%),
        linear-gradient(180deg, var(--page-soft, var(--color-primary-soft)), var(--color-surface) 92%);
    }
    /* faint dot grid that fades in toward the right */
    .page-header::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 22%, transparent) 1px, transparent 1.6px) 0 0 / 22px 22px;
      -webkit-mask-image: linear-gradient(100deg, transparent 35%, #000 95%);
      mask-image: linear-gradient(100deg, transparent 35%, #000 95%);
      opacity: 0.55;
    }
    /* accent hairline along the bottom edge */
    .page-header::after {
      content: '';
      position: absolute;
      inset: auto 0 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-accent) 60%, transparent), color-mix(in srgb, var(--color-primary) 50%, transparent), transparent);
    }
    h1 { font-size: var(--font-size-3xl); max-width: 48rem; letter-spacing: -0.03em; }
    .lead { margin: 0; }
  `,
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly lead = input<string>('');
  readonly eyebrow = input<string>('');
  readonly breadcrumbs = input<Breadcrumb[]>([]);
}
