import {
  Component,
  Input,
  signal,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  @Input() title = 'Demo Notice';
  @Input() message =
    'This site is a demo. Features and functionality are for preview purposes only.';
  @Input() ctaLabel = 'Learn more';
  @Input() ctaLink = '/about';

  isVisible = signal(true);

  private readonly BANNER_EXPIRY_MS = 24 * 60 * 60 * 1000; // 1 day
  private readonly STORAGE_KEY = 'demo-banner';

  ngOnInit(): void {
    const dismissedAt = localStorage.getItem(this.STORAGE_KEY);

    if (dismissedAt) {
      const dismissedTime = new Date(dismissedAt).getTime();
      const now = Date.now();

      if (now - dismissedTime < this.BANNER_EXPIRY_MS) {
        this.isVisible.set(false);
        return;
      }
    }

    this.isVisible.set(true);
  }

  dismiss(): void {
    this.isVisible.set(false);
    localStorage.setItem(this.STORAGE_KEY, new Date().toISOString());
  }
}
