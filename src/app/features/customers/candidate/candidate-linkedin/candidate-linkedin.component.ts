import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-candidate-linkedin',
  templateUrl: './candidate-linkedin.component.html',
  styleUrls: ['./candidate-linkedin.component.css']
})
export class CandidateLinkedinComponent implements OnInit {

  candidateLinkedInForm: FormGroup;
  candidate:Candidate
  constructor(private formBuilder: FormBuilder,
     private router: Router,
    private toastrService: ToastrService,
    private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.createLinkedinAddForm()
    this.getCandidateById()
  }


  createLinkedinAddForm() {
    this.candidateLinkedInForm=this.formBuilder.group({
      userId:[this.getUserId()],
      linkedinAccount: ["",Validators.required],
  })
}

candidateLinkedinAdd() {
    if (this.candidateLinkedInForm.valid) {
      console.log("burası çalıştı")
     this.candidateService.addLinkedin(this.candidate,this.candidateLinkedInForm.value['githubAccount']).subscribe(
      (response: any) => {
          this.toastrService.success(response.message, 'Hesap eklendi');
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
   } else {
    this.toastrService.error('form eksik');
  }
}

getUserId(): number {
  let user = JSON.parse(localStorage.getItem("user"))
  let userId = user.data.id
  console.log(user.data.id)
   return userId;
}
getCandidateById() {
  this.candidateService.getCandidateById(this.getUserId()).subscribe((response:any)=>{
    this.candidate = response.data;
    console.log(this.candidate)
  })

}

}
