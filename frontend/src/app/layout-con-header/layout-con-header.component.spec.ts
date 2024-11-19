import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConHeaderComponent } from './layout-con-header.component';

describe('LayoutConHeaderComponent', () => {
  let component: LayoutConHeaderComponent;
  let fixture: ComponentFixture<LayoutConHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutConHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutConHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
