import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@ui-comp/shared-ui-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, BannerComponent],
  templateUrl: './app.html',
})
export class App {
  private readonly http = inject(HttpClient);
}
