import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  CtaSectionComponent,
  PublishIconComponent,
  ReusableIconComponent,
  StorybookIconComponent,
  TailwindIconComponent,
} from "@ui-comp/shared-ui-components";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CtaSectionComponent,
    ReusableIconComponent,
    StorybookIconComponent,
    TailwindIconComponent,
    PublishIconComponent,
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {}
