import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableHomeComponent } from './table-home.component';

describe('TableHomeComponent', () => {
  let component: TableHomeComponent;
  let fixture: ComponentFixture<TableHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
