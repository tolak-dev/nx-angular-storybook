import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { Component } from '@angular/core';
import { BannerComponent } from './banner.component';

@Component({
  template: '<div>Mock Page</div>',
})
class MockPageComponent {}

describe('BannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
      providers: [
        provideRouter([
          { path: 'about', component: MockPageComponent },
          { path: 'features', component: MockPageComponent },
          { path: 'maintenance', component: MockPageComponent },
          { path: 'pricing', component: MockPageComponent },
          { path: 'security', component: MockPageComponent },
          { path: 'announcements', component: MockPageComponent },
          { path: 'beta', component: MockPageComponent },
        ]),
        provideLocationMocks(),
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BannerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
