import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateImageComponent } from './candidate-image.component';

describe('CandidateImageComponent', () => {
  let component: CandidateImageComponent;
  let fixture: ComponentFixture<CandidateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
