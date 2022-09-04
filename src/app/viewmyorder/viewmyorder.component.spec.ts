import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyorderComponent } from './viewmyorder.component';

describe('ViewmyorderComponent', () => {
  let component: ViewmyorderComponent;
  let fixture: ComponentFixture<ViewmyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
