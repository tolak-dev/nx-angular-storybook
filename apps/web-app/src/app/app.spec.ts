import { provideHttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { BannerComponent } from "@ui-comp/shared-ui-components";
import { App } from "./app";

describe("App", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, BannerComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it("should create the app component", () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
