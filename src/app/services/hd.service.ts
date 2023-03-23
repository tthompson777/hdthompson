import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'

const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root',
})

export class HdService {

  constructor(private http: HttpClient) { }

  getHds(): Observable<any> {
    return this.http.get(baseUrl)
  }

  postHds(body:any): Observable<any> {
    return this.http.post(baseUrl, body)
  }

  deleteHds(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

}