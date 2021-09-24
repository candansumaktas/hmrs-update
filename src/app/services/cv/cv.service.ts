import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/cvs"

  constructor(private httpClient: HttpClient) { }

  add(cv: Cv){
    return this.httpClient.post(this.apiUrl+"/add",cv);
  }
 
  getCvByUserId(): Observable<Candidate> {
    return this.httpClient.get<Candidate>(this.apiUrl + "/get/byId?cvId=");
  }  

  getCvs(): Observable<Cv> {
    return this.httpClient.get<Cv>(this.apiUrl + "/get/all");
  }  
}
