import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescribtionComponent } from './product-describtion.component';

describe('ProductDescribtionComponent', () => {
  let component: ProductDescribtionComponent;
  let fixture: ComponentFixture<ProductDescribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDescribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
