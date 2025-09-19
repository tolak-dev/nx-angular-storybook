import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-publish-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [class]="size + ' ' + color"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <g transform="translate(42.666667, 33.830111)">
        <path
          d="M170.666667,51.5032227 L256,136.836556 L256,392.836556 L0,392.836556 L0,51.5032227 L170.666667,51.5032227 Z
             M152.993555,94.1698893 L42.6666667,94.1698893 L42.6666667,350.169889 L213.333333,350.169889 L213.333333,154.509668 L152.993555,94.1698893 Z
             M341.333333,0 L431.084945,89.7516113 L400.915055,119.921501 L362.666,81.683 L362.666667,222.169889
             C362.666667,267.870058 326.742006,305.179572 281.592327,307.398789 L277.333333,307.503223
             L277.333333,264.836556 C299.826385,264.836556 318.254189,247.431163 319.882971,225.354153
             L320,222.169889 L319.999,81.684 L281.751611,119.921501 L251.581722,89.7516113 L341.333333,0 Z"
        />
      </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PublishIconComponent {
  @Input() size = 'h-6 w-6';
  @Input() color = 'text-green-500';
}
