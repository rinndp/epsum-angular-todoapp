import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSinHeaderComponent } from './layout-sin-header.component';

describe('LayoutSinHeaderComponent', () => {
  let component: LayoutSinHeaderComponent;
  let fixture: ComponentFixture<LayoutSinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutSinHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
