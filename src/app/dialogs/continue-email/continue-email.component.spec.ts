import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueEmailComponent } from './continue-email.component';

describe('ContinueEmailComponent', () => {
  let component: ContinueEmailComponent;
  let fixture: ComponentFixture<ContinueEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinueEmailComponent]
    });
    fixture = TestBed.createComponent(ContinueEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
