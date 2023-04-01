import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainscreenComponentComponent } from './mainscreen-component.component';

describe('MainscreenComponentComponent', () => {
  let component: MainscreenComponentComponent;
  let fixture: ComponentFixture<MainscreenComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainscreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
