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

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
   candidateJobExperiences:any

  constructor(private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getUserId()
    this.getCandidatesById()
    this.getCandidateJobExperiences()
    
  }
  
  getCandidateJobExperiences(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
     this.candidate = response.data;
      this.candidateJobExperiences = response.data.candidateJobExperiences;
  
     
      });
   
  }
  
  getCandidatesById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }

    getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

 
}
