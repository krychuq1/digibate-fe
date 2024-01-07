import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNavComponent } from './create-nav.component';

describe('CreateNavComponent', () => {
  let component: CreateNavComponent;
  let fixture: ComponentFixture<CreateNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNavComponent]
    });
    fixture = TestBed.createComponent(CreateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
