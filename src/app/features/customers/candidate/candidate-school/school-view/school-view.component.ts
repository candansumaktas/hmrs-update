import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css']
})
export class SchoolViewComponent implements OnInit {

 
  user: any;
  candidates: Candidate[]=[]
  candidate: Candidate;
  candidateSchools: any;
  // school:School[]=[]
  // department:Department[]=[]
  // schoolNames:string[]=[]
  // departmentNames:String[]=[]
  // candidateSchools:CandidateSchool[]=[]

  
  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  this.getCandidatesById()
  this.getUserId()
  this.getCandidateSchools()
  }

  getCandidatesById(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }

  getCandidateSchools(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
      this.candidate = response.data;
      this.candidateSchools = response.data.candidateSchools;
          
          
      });
     
  }

   getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }
  
}
