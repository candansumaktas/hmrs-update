import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateLanguage } from 'src/app/models/candicated/candidate-language/candidate-language';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Language } from 'src/app/models/language/language';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css']
})
export class LanguageViewComponent implements OnInit {

 

  candidateLanguages: CandidateLanguage[] = []
  candidates: Candidate[] = []
  candidate: Candidate;

  language: Language[] = []
  languageNames: String[] = []

  constructor(private candidateService: CandidateService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCandidatesById(params["candidateId"])
    })
  }
  getCandidatesById(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((data: any) => {
      this.candidate = data.data;
      console.log(this.candidate)

    })
  }

  getCandidateLanguages(candidateId: number) {
    this.candidateService.getCandidateById(candidateId).subscribe((response: any) => {

      this.language = response.data.candidateLanguages.map(o => o.language)
      this.candidateLanguages = response.data.candidateLanguages
      console.log(this.language)

      this.languageNames = this.language.map(o => o.name)
      console.log(this.languageNames)


      console.log(this.language)


    });

  }

}
