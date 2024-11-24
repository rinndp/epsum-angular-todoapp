import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHogarComponent } from './main-page-hogar.component';

describe('MainPageHogarComponent', () => {
  let component: MainPageHogarComponent;
  let fixture: ComponentFixture<MainPageHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
