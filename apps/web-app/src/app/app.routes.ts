import { Routes } from "@angular/router";
import { LayoutPublicComponent } from "@ui-comp/shared-ui-components";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: LayoutPublicComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "contact", component: ContactComponent },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
