import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasExamenComponent } from './lista-tareas-examen.component';

describe('ListaTareasExamenComponent', () => {
  let component: ListaTareasExamenComponent;
  let fixture: ComponentFixture<ListaTareasExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTareasExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareasExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
