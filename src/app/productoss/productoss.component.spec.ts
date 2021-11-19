import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductossComponent } from './productoss.component';

describe('ProductossComponent', () => {
  let component: ProductossComponent;
  let fixture: ComponentFixture<ProductossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
