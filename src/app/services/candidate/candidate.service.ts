import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { CandidateResponse } from 'src/app/models/candicated/candidate/candidateResponse';



@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  apiUrl: string = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidates"


  constructor(private httpClient: HttpClient) { }

  add(candidate: Candidate) {
    return this.httpClient.post(this.apiUrl + "/add", candidate);
  }

  getCandidates(): Observable<Candidate> {
    return this.httpClient.get<Candidate>(this.apiUrl + "/get/all");
  }

  checkCandidateNationalityIdExists(candidate: Candidate) {
    return this.httpClient.get(this.apiUrl + "/exists/byNatId?nationalityId=" + candidate.nationalityId);
  }

  getCandidateById(id: number): Observable<CandidateResponse> {
    return this.httpClient.get<CandidateResponse>(this.apiUrl + '/get/byId?candId=' + id);
  }
  addGithub(candidate: Candidate, githubLink: String): Observable<Candidate> {
    return this.httpClient.put<Candidate>(this.apiUrl + '/update/githubAccount?candId=' + candidate.id + '&githubAccount=' + githubLink, candidate);
  }

  addLinkedin(candidate: Candidate, linkedinAccount: String): Observable<Candidate> {
    return this.httpClient.put<Candidate>(this.apiUrl + '/update/linkedinAccount?candId=' + candidate.id + '&linkedinAccount=' + linkedinAccount, candidate);
  }
}
