import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../core/data/products';
import { Icon } from '../../shared/ui/icon';
import { InrPipe } from '../../shared/ui/inr.pipe';

interface Pos { left: number; top: number; scale: number }

/** Main (featured) slot: large, right of centre. */
const MAIN: Pos = { left: 56, top: 50, scale: 3.05 };
/** Four fixed slots on a semicircular arc that opens toward the copy (top → bottom). */
const SLOTS: Pos[] = [
  { left: 62, top: 8, scale: 1 },
  { left: 91, top: 27, scale: 1 },
  { left: 91, top: 73, scale: 1 },
  { left: 62, top: 92, scale: 1 },
];

/**
 * Orbiting product carousel: one featured product in the centre, the others parked on an arc.
 * Selecting one swaps it with the featured product — the two glide to each other's position (CSS transitions).
 */
@Component({
  selector: 'app-hero-orbit',
  imports: [RouterLink, Icon, InrPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-orbit.html',
  styleUrl: './hero-orbit.scss',
})
export class HeroOrbit {
  readonly items = input.required<(Product & { fromPrice?: number })[]>();

  protected readonly active = signal(0);
  /** slots()[i] = index of the product parked in arc slot i. */
  protected readonly slots = signal<number[]>([]);

  protected readonly current = computed(() => this.items()[this.active()]);
  protected readonly total = computed(() => this.items().length);
  protected readonly counter = computed(() => String(this.active() + 1).padStart(2, '0'));

  private get order(): number[] {
    const s = this.slots();
    return s.length ? s : this.items().map((_, i) => i).filter((i) => i !== this.active()).slice(0, SLOTS.length);
  }

  protected pos(i: number): Pos {
    if (i === this.active()) return MAIN;
    const slot = this.order.indexOf(i);
    return SLOTS[slot < 0 ? 0 : slot];
  }

  protected select(i: number): void {
    const prev = this.active();
    if (i === prev) return;
    const order = [...this.order];
    const slot = order.indexOf(i);
    if (slot < 0) return;
    order[slot] = prev; // the outgoing featured product takes the vacated slot
    this.slots.set(order);
    this.active.set(i);
  }

  protected step(dir: 1 | -1): void {
    const n = this.total();
    this.select((this.active() + dir + n) % n);
  }
}
