import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLinkedinComponent } from './candidate-linkedin.component';

describe('CandidateLinkedinComponent', () => {
  let component: CandidateLinkedinComponent;
  let fixture: ComponentFixture<CandidateLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
