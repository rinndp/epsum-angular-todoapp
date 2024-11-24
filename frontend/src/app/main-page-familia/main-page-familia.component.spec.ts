import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFamiliaComponent } from './main-page-familia.component';

describe('MainPageFamiliaComponent', () => {
  let component: MainPageFamiliaComponent;
  let fixture: ComponentFixture<MainPageFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageFamiliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
