import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTareaExamenComponent } from './detalles-tarea-examen.component';

describe('DetallesTareaExamenComponent', () => {
  let component: DetallesTareaExamenComponent;
  let fixture: ComponentFixture<DetallesTareaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesTareaExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesTareaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
