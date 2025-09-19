import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtaSectionComponent } from './cta-section.component';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('CtaSectionComponent', () => {
  let component: CtaSectionComponent;
  let fixture: ComponentFixture<CtaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CtaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render default title and description', () => {
    const titleEl = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(titleEl.textContent).toContain(
      'Boost your productivity. Start using our app today.'
    );
  });
});
