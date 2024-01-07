import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWhereLeftComponent } from './continue-where-left.component';

describe('ContinueWhereLeftComponent', () => {
  let component: ContinueWhereLeftComponent;
  let fixture: ComponentFixture<ContinueWhereLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinueWhereLeftComponent]
    });
    fixture = TestBed.createComponent(ContinueWhereLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
