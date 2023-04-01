import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateHdComponent } from './create-hd.component';

describe('CreateHdComponent', () => {
  let component: CreateHdComponent;
  let fixture: ComponentFixture<CreateHdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
