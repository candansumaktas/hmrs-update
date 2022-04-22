import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Position } from 'src/app/models/position/position';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-job-experience-update',
  templateUrl: './job-experience-update.component.html',
})
export class JobExperienceUpdateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
