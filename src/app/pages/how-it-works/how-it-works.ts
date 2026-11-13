import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PAGES } from '../../core/config/pages';
import { image } from '../../core/data/images';
import { crumbs } from '../../core/seo/breadcrumbs';
import { SeoService } from '../../core/seo/seo.service';
// import { CtaBand } from '../../shared/ui/cta-band';
import { Icon } from '../../shared/ui/icon';
import { PageHeader } from '../../shared/ui/page-header';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-how-it-works',
  imports: [NgOptimizedImage, RouterLink, PageHeader, SectionHeading, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-header
      [breadcrumbs]="breadcrumbs"
      eyebrow="How it works"
      title="How a water softener works"
      lead="Hard water is common in borewell and groundwater supplies. Here is what causes it, what it does to your home, and how a softener fixes it."
    />

    <section class="section">
      <div class="container split">
        <div>
          <h2>Understanding hard water</h2>
          <p>Water becomes “hard” when it picks up dissolved calcium and magnesium as it passes through rock and soil. Hardness is measured in parts per million (ppm); water above roughly 200 ppm usually causes visible scale and soap problems.</p>
          <p>The minerals are not usually harmful to drink, but when hard water is heated or evaporates they leave scale behind — on taps, tiles, geysers, pipes and the inside of appliances.</p>
        </div>
        <div class="media media--contain">
          <img [ngSrc]="img.src" [alt]="img.alt" fill sizes="(min-width: 900px) 45vw, 100vw" />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <app-section-heading title="The ion-exchange process, step by step" />
        <ol class="steps flow">
          @for (s of process; track s.title; let last = $last) {
            <li>
              <span class="flow__icon"><app-icon [name]="s.icon" [size]="28" /></span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
              @if (!last) { <span class="flow__arrow" aria-hidden="true"><app-icon name="arrow-right" [size]="18" /></span> }
            </li>
          }
        </ol>
        <p class="flow__note"><app-icon name="check" [size]="18" /> The cycle repeats automatically — no manual effort, just periodic salt top-ups.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <app-section-heading title="Problems caused by hard water" />
        <ul class="grid card-list">
          @for (p of problems; track p.title) {
            <li class="card problem">
              <span class="problem__icon"><app-icon [name]="p.icon" [size]="26" /></span>
              <h3 class="card__title">{{ p.title }}</h3>
              <p class="card__text">{{ p.text }}</p>
              <span class="problem__fix"><app-icon name="check" [size]="14" /> Solved with soft water</span>
            </li>
          }
        </ul>
        <p class="more"><a routerLink="/blog/signs-of-hard-water">Read: common signs of hard water</a> · <a routerLink="/products/water-softeners">See our water softeners</a></p>
      </div>
    </section>

    <!-- <app-cta-band /> -->
  `,
  styles: `
    .more { margin-top: 2rem; font-weight: 600; }
    .flow { counter-reset: step; }
    .flow > li { display: flex; flex-direction: column; gap: var(--space-2); padding: var(--space-6) var(--space-5) var(--space-5); overflow: visible; }
    .flow > li::before {
      top: var(--space-4); right: var(--space-4); left: auto; font-size: var(--font-size-2xl, 1.75rem); opacity: 0.35;
    }
    .flow__icon {
      display: grid; place-items: center; width: 3.5rem; height: 3.5rem; margin-bottom: var(--space-2);
      border-radius: 50%; color: #fff;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      box-shadow: 0 10px 22px -10px var(--page-glow);
    }
    .flow > li:last-child .flow__icon { background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); }
    .flow h3 { margin: 0; }
    .flow__arrow {
      display: none; position: absolute; top: 50%; right: calc(var(--space-5) / -2 - 14px); z-index: 1;
      width: 28px; height: 28px; place-items: center; border-radius: 50%; transform: translateY(-50%);
      background: var(--color-surface); border: 1px solid var(--color-border); color: var(--color-primary);
    }
    @media (min-width: 900px) { .flow__arrow { display: grid; } }
    .problem {
      position: relative; display: flex; flex-direction: column; gap: var(--space-2); overflow: hidden;
      padding-top: var(--space-6); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .problem::before {
      content: ''; position: absolute; inset: 0 0 auto; height: 4px;
      background: linear-gradient(90deg, #f59e0b, #ef4444);
    }
    .problem:hover { transform: translateY(-4px); box-shadow: 0 22px 44px -22px rgb(239 68 68 / 0.35); }
    .problem__icon {
      display: grid; place-items: center; width: 3.25rem; height: 3.25rem; margin-bottom: var(--space-2);
      border-radius: var(--radius-md); color: #c2410c;
      background: color-mix(in srgb, #f59e0b 16%, var(--color-surface));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #f59e0b 30%, transparent);
    }
    .problem .card__title, .problem .card__text { margin: 0; }
    .problem__fix {
      display: inline-flex; align-items: center; gap: 0.35rem; align-self: flex-start;
      margin-top: auto; padding: 0.25rem 0.7rem; border-radius: 999px;
      font-size: var(--font-size-xs, 0.75rem); font-weight: 600;
      color: var(--color-primary); background: var(--color-primary-soft);
    }
    .problem__fix { margin-top: var(--space-3); }
    .flow__note {
      display: flex; align-items: center; justify-content: center; gap: var(--space-2);
      margin: var(--space-6) auto 0; padding: var(--space-3) var(--space-5); width: fit-content; max-width: 100%;
      border-radius: 999px; background: var(--color-primary-soft); color: var(--color-primary); font-weight: 600; font-size: var(--font-size-sm);
    }
  `,
})
export class HowItWorks {
  protected readonly breadcrumbs = crumbs({ label: 'How it works' });
  protected readonly img = image('water-softener-home-plumbing-diagram', 'Diagram of a water softener connected to a home’s sump, overhead tank and taps');
  protected readonly process = [
    { icon: 'drop', title: 'Hard water enters', text: 'Water from your sump or borewell flows into the resin tank.' },
    { icon: 'magnet', title: 'Resin captures minerals', text: 'Resin beads hold calcium and magnesium ions and release sodium ions in exchange.' },
    { icon: 'sparkle', title: 'Soft water flows out', text: 'Softened water goes to every tap, shower and appliance in the house.' },
    { icon: 'timer', title: 'Brine recharge', text: 'When the resin is saturated, a salt brine wash flushes the minerals away and the cycle starts again.' },
  ];
  protected readonly problems = [
    { icon: 'bubbles', title: 'Poor lather', text: 'Soap and shampoo do not foam properly, so you use more and still feel less clean.' },
    { icon: 'sparkle', title: 'Dry skin and dull hair', text: 'Soap residue that will not rinse off can leave skin dry and itchy and hair rough.' },
    { icon: 'flame', title: 'Scaled geysers', text: 'Scale insulates heating elements, so geysers take longer and use more power.' },
    { icon: 'utensils', title: 'Spotted vessels and tiles', text: 'White marks on steel vessels, glasses, taps and bathroom tiles.' },
  ];

  constructor() {
    const p = PAGES.howItWorks;
    inject(SeoService).setPage({ title: p.title, description: p.description, path: p.path, breadcrumbs: this.breadcrumbs });
  }
}
