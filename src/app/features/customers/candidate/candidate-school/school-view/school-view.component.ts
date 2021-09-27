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

 

  candidates: Candidate[]=[]
  candidate: Candidate;
  
  school:School[]=[]
  department:Department[]=[]
  schoolNames:string[]=[]
  departmentNames:String[]=[]
  candidateSchools:CandidateSchool[]=[]
  
  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCandidateSchools(params["candidateId"])
    })
  }
  getCandidatesById(candidateId: number){
    this.candidateService.getCandidateById(candidateId).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }
  
  getCandidateSchools(candidateId:number){
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {
        
      this.candidateSchools=response.data.candidateSchools
          
          this.school= response.data.candidateSchools.map(o=>o.school)
          this.department= response.data.candidateSchools.map(o=>o.department)
         this.schoolNames=this.school.map(o=>o.name)
         this.departmentNames=this.department.map(o=>o.name)
          
      });
     
  }

}
