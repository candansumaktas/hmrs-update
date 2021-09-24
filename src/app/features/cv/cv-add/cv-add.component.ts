import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
 import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { CvService } from 'src/app/services/cv/cv.service';
 
@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {
  candidate: Candidate
  cvAddForm: FormGroup;
  cv: Cv
  candidateJobExperienceIds: number[] = [];
  candidateLanguageIds: number[] = [];
  candidateSchoolIds: number[] = [];
  candidateSkillIds: number[] = [];
  constructor(private cvService: CvService, private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private candidateService: CandidateService) { }




  ngOnInit(): void {

    this.createCvAddForm();
    this.getCandidateById();
    this.getCandidateJobExperienceIds();
    this.getCandidateLanguageIds();
    this.getCandidateSchoolIds();
    this.getCandidateSkillIds();

  }

  createCvAddForm() {
    this.cvAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      candidateJobExperienceIds: [this.getCandidateJobExperienceIds()],
      candidateLanguageIds:[this.getCandidateLanguageIds()],
      candidateSchoolIds: [this. getCandidateSchoolIds()],
      candidateSkillIds: [this.getCandidateSkillIds()],
      coverLetter: ['', Validators.required],
      title: ['', Validators.required],

    });
  }

  cvAdd() {
    if (this.cvAddForm.valid) {
       this.cvService.add(this.cvAddForm.value).subscribe(
        (response: any) => {
           console.log(this.cvAddForm.value);
           this.toastrService.success(response.message, 'CV eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('Hata.');
    }
  }

  getUserId(): number {
    let user = JSON.parse(localStorage.getItem("user"))
    let userId = user.data.id
    console.log(user.data.id)
    return userId;
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.candidate = response.data;
      console.log(this.candidate)
    })

  }

  getCandidateJobExperienceIds():number[]{
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateJobExperiences.length; i++) {
        this.candidateJobExperienceIds[i] = response.data.candidateJobExperiencesIds[i].id;
      }})
    return this.candidateJobExperienceIds;
  }

  getCandidateLanguageIds():number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateLanguageIds.length; i++) {
        this.candidateLanguageIds[i] = response.data.candidateLanguageIds[i].id;
      }})
    return this.candidateLanguageIds;

  }

  getCandidateSchoolIds():number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSchoolIds.length; i++) {
        this.candidateSchoolIds[i] = response.data.candidateSchoolIds[i].id;
      }})
    return this.candidateSchoolIds;

  }

  getCandidateSkillIds():number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSkillIds.length; i++) {
        this.candidateSkillIds[i] = response.data.candidateSkillIds[i].id;
      }})
    return this.candidateSkillIds;

  }
 
}
