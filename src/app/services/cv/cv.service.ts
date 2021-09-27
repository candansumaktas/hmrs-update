import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from 'src/app/models/cv/cv';
import { CvResponse } from 'src/app/models/cv/cvResponse';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  apiUrl="https://javareactcamp-hrms-backend.herokuapp.com/api/cvs"

  constructor(private httpClient: HttpClient) { }

  add(cv: Cv){
    return this.httpClient.post(this.apiUrl+"/add",cv);
  }

  getCvs():Observable<Cv>{
    return this.httpClient.get<Cv>(this.apiUrl+"/get/all");
  }

}
