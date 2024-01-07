import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedForYouComponent } from './suggested-for-you.component';

describe('SuggestedForYouComponent', () => {
  let component: SuggestedForYouComponent;
  let fixture: ComponentFixture<SuggestedForYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedForYouComponent]
    });
    fixture = TestBed.createComponent(SuggestedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
