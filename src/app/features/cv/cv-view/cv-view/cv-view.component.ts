import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateJobExperience } from 'src/app/models/candicated/candidate-job-experience/candidate-job-experience';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { CandidateSchool } from 'src/app/models/candicated/candidate-school/candidate-school';
import { CandidateSkill } from 'src/app/models/candicated/candidate-skill/candidate-skill';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { Department } from 'src/app/models/department/department';
import { Language } from 'src/app/models/language/language';
import { Position } from 'src/app/models/position/position';
import { School } from 'src/app/models/school/school';
import { Skill } from 'src/app/models/skill/skill';
import { User } from 'src/app/models/user/user';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {

  user: any;
  candidates: Candidate[]=[]
  candidate: Candidate;
  candidateLanguages: CandidateLanguage[]=[]
  candidateJobExperiences: CandidateJobExperience[]=[]
  position:Position[]=[]
  positionTitles: string[]=[]
  language:Language[]=[]
  languageNames:String[]=[]
  school:School[]=[]
  department:Department[]=[]
  schoolNames:string[]=[]
  departmentNames:String[]=[]
  candidateSchools:CandidateSchool[]=[]
  candidateSkills:CandidateSkill[]=[]
  skill:Skill[]=[]
  skillName:string[]=[]
  cvs: Cv[]=[]
  cvTitle:string;
  coverLetter:string;
 
 
  constructor(private cvService: CvService,
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,) { }


  ngOnInit(): void {
    // this.getCandidatesById();
    // this.getCandidateSkills();
    // this.getCandidateSchools();
    // this.getCandidateLanguages();
    // this.getCandidateJobExperiences();
    // this.getCandidateCv();
    // this.getUserId();
  }

  // getCandidatesById(){
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((data:any)=>{
  //     this.candidate=data.data;
  //     console.log(this.candidate)
    
  // })
  // }

  // getCandidateLanguages() {
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
  //        this.language = response.data.candidateLanguages.map(o=>o.language)
  //        this.candidateLanguages=response.data.candidateLanguages
  //         console.log(this.language)
         
  //         this.languageNames=this.language.map(o=>o.name)
  //         console.log(this.languageNames)

         
  //        console.log(this.language)
          
          
  //     });
    
  // }

  // getCandidateJobExperiences(){
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
  //     this.candidateJobExperiences=response.data.candidateJobExperiences
  //     this.position= response.data.candidateJobExperiences.map(o=>o.position)
  //     this.positionTitles=this.position.map(o=>o.title)
     
  //     });
   
  // }

  // getCandidateSkills() {
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
  //     this.candidateSkills=response.data.candidateSkills
  //         this.skill= response.data.candidateSkills.map(o=>o.skill)
  //         this.skillName=this.skill.map(o=>o.name)
          
  //     });
   
  // }

  // getCandidateSchools(){
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
  //     this.candidateSchools=response.data.candidateSchools
          
  //         this.school= response.data.candidateSchools.map(o=>o.school)
  //         this.department= response.data.candidateSchools.map(o=>o.department)
  //        this.schoolNames=this.school.map(o=>o.name)
  //        this.departmentNames=this.department.map(o=>o.name)
          
  //     });
     
  // }

  // getCandidateCv(){
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
  //     this.cvTitle=response.data.cvs.map(o=>o.title)
  //     this.cvs=response.data.cvs
  //     console.log(this.cvTitle)
          
  //     });
     
  // }

  // getUserId(): number {
  //   this.user = JSON.parse(localStorage.getItem('user'));
  //   return this.user.data.id;
  // }

  

}
