import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIdentityDialogComponent } from './brand-identity-dialog.component';

describe('BrandIdentityComponent', () => {
  let component: BrandIdentityDialogComponent;
  let fixture: ComponentFixture<BrandIdentityDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandIdentityDialogComponent]
    });
    fixture = TestBed.createComponent(BrandIdentityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
