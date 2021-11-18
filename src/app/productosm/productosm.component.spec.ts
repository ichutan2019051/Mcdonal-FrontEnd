import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosmComponent } from './productosm.component';

describe('ProductosmComponent', () => {
  let component: ProductosmComponent;
  let fixture: ComponentFixture<ProductosmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
