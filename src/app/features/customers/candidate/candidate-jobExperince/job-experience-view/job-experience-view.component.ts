import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Position } from 'src/app/models/position/position';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-job-experience-view',
  templateUrl: './job-experience-view.component.html',
  styleUrls: ['./job-experience-view.component.css']
})
export class JobExperienceViewComponent implements OnInit {


  candidateJobExperiences: CandidateJobExperience[] = []
  position: Position[] = []
  positionTitles: string[] = []
  candidates: Candidate[]=[]
  candidate: Candidate;
  constructor(private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCandidatesById(params["candidateId"])
    })
  }
  getCandidateJobExperiences(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {

      this.candidateJobExperiences = response.data.candidateJobExperiences
      this.position = response.data.candidateJobExperiences.map(o => o.position)
      this.positionTitles = this.position.map(o => o.title)

    });

  }

  getCandidatesById(candidateId: number){
    this.candidateService.getCandidateById(candidateId).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }
}
