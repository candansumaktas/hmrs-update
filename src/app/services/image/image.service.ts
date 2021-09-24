import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/image/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/images"

  constructor(private httpClient: HttpClient) { }

  add(image: Image, userId: number): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/upload?userId=' + userId, image);
  }

}
