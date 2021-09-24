import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateGithubComponent } from './candidate-github.component';

describe('CandidateGithubComponent', () => {
  let component: CandidateGithubComponent;
  let fixture: ComponentFixture<CandidateGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
