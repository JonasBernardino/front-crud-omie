import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientPage } from '../../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  urlBaseClient= `${environment.API_BASE_LOCAL}`
  constructor(
    private http: HttpClient,
  ) { }

  readClientPage(pageNumber:number, size:number):Observable<ClientPage>{
    return this.http.get<ClientPage>(`${this.urlBaseClient}/client/short?page=${pageNumber}&size=${size}`)

  }
}
