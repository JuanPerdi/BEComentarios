import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortafolioComponent } from './header-portafolio.component';

describe('HeaderPortafolioComponent', () => {
  let component: HeaderPortafolioComponent;
  let fixture: ComponentFixture<HeaderPortafolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPortafolioComponent]
    });
    fixture = TestBed.createComponent(HeaderPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
