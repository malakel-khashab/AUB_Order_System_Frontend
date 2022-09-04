import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmycartComponent } from './viewmycart.component';

describe('ViewmycartComponent', () => {
  let component: ViewmycartComponent;
  let fixture: ComponentFixture<ViewmycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmycartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
