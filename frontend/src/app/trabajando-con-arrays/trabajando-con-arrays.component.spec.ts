import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajandoConArraysComponent } from './trabajando-con-arrays.component';

describe('TrabajandoConArraysComponent', () => {
  let component: TrabajandoConArraysComponent;
  let fixture: ComponentFixture<TrabajandoConArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrabajandoConArraysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajandoConArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
