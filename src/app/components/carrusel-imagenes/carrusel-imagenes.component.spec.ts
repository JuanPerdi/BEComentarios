import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselImagenesComponent } from './carrusel-imagenes.component';

describe('CarruselImagenesComponent', () => {
  let component: CarruselImagenesComponent;
  let fixture: ComponentFixture<CarruselImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselImagenesComponent]
    });
    fixture = TestBed.createComponent(CarruselImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
