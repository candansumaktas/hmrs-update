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


  candidates: Candidate[]=[]
  candidate: Candidate;
  
  
  candidateSkills:CandidateSkill[]=[]
  skill:Skill[]=[]
  skillName:string[]=[]
  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCandidatesById(params["candidateId"])
  })


this.activatedRoute.params.subscribe(params=>{
  this.getCandidateSkills(params["candidateId"])
})
  }

  getCandidateSkills(candidateId:number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
        
      this.candidateSkills=response.data.candidateSkills
          this.skill= response.data.candidateSkills.map(o=>o.skill)
          this.skillName=this.skill.map(o=>o.name)
          
      });
   
  }
  
    getCandidatesById(candidateId: number){
      this.candidateService.getCandidateById(candidateId).subscribe((data:any)=>{
        this.candidate=data.data;
        console.log(this.candidate)
      
    })
    }

  

}
