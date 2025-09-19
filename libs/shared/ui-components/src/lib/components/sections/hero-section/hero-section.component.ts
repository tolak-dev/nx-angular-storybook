import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  @Input() title = 'Boost your productivity. Start using our app today.';
  @Input() description =
    'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.';
  @Input() primaryCtaLabel = 'Get started';
  @Input() primaryCtaLink = '/';
  @Input() imageSrc = 'https://picsum.photos/900/450';
  @Input() imageAlt = 'App screenshot';
}
