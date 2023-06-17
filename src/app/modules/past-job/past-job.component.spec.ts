import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastJobComponent } from './past-job.component';

describe('PastJobComponent', () => {
  let component: PastJobComponent;
  let fixture: ComponentFixture<PastJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
