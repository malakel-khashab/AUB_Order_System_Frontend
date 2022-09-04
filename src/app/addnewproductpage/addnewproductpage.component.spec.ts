import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewproductpageComponent } from './addnewproductpage.component';

describe('AddnewproductpageComponent', () => {
  let component: AddnewproductpageComponent;
  let fixture: ComponentFixture<AddnewproductpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewproductpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
