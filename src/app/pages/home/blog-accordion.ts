import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../core/data/blog';
import { Icon } from '../../shared/ui/icon';

/**
 * Expanding image panels: the active article opens wide with its title, excerpt and link while the rest
 * collapse into slim strips. Hover, focus or click a strip to open it. On small screens the panels stack.
 */
@Component({
  selector: 'app-blog-accordion',
  imports: [RouterLink, DatePipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="acc" role="list">
      @for (p of posts(); track p.slug; let i = $index) {
        <article class="bp" role="listitem" [class.is-active]="i === active()" (mouseenter)="activate(i)" [style.--i]="i">
          <img class="bp__img" [src]="p.image.src" [alt]="i === active() ? p.image.alt : ''" loading="lazy" decoding="async" />
          <span class="bp__shade" aria-hidden="true"></span>
          <span class="bp__num" aria-hidden="true">{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
          <span class="bp__vtitle" aria-hidden="true">{{ p.title }}</span>
          <div class="bp__body" [attr.inert]="i === active() ? null : ''">
            <p class="bp__meta"><span class="bp__chip"><app-icon name="clock" [size]="13" /> {{ p.readingMinutes }} min read</span>
              <time [attr.datetime]="p.published">{{ p.published | date: 'd MMM y' : 'UTC' }}</time></p>
            <h3 class="bp__title">{{ p.title }}</h3>
            <p class="bp__text">{{ p.excerpt }}</p>
            <a class="bp__more" [routerLink]="['/blog', p.slug]">Read article <app-icon name="arrow-right" [size]="16" /></a>
          </div>
          @if (i !== active()) {
            <button type="button" class="bp__pick" (click)="activate(i)" (focus)="activate(i)" [attr.aria-label]="'Open: ' + p.title"></button>
          }
        </article>
      }
    </div>
  `,
  styleUrl: './blog-accordion.scss',
})
export class BlogAccordion {
  readonly posts = input.required<BlogPost[]>();
  protected readonly active = signal(0);
  protected activate(i: number): void { this.active.set(i); }
}
