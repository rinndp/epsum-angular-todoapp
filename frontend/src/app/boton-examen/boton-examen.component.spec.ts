import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonExamenComponent } from './boton-examen.component';

describe('BotonExamenComponent', () => {
  let component: BotonExamenComponent;
  let fixture: ComponentFixture<BotonExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
