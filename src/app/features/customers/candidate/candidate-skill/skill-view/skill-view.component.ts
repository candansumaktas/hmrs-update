import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-skill-view',
  templateUrl: './skill-view.component.html',
  styleUrls: ['./skill-view.component.css']
})
export class SkillViewComponent implements OnInit {

  user :any
  candidates: Candidate[]=[]
  candidate: Candidate;
  candidateSkills:any
 

  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCandidatesById();
    this.getCandidateSkills();
    this.getUserId()
   }
 

   getCandidateSkills() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidate = response.data;
      this.candidateSkills=response.data.candidateSkills
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
