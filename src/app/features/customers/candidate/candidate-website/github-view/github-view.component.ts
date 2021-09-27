import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-github-view',
  templateUrl: './github-view.component.html',
  styleUrls: ['./github-view.component.css']
})
export class GithubViewComponent implements OnInit {

  candidates: Candidate[]=[]
  candidate: Candidate;
  constructor(
    private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCandidatesById(params["candidateId"])
  })
  }

  getCandidatesById(candidateId: number){
    this.candidateService.getCandidateById(candidateId).subscribe((data:any)=>{
      this.candidate=data.data;
      console.log(this.candidate)
    
  })
  }
}
