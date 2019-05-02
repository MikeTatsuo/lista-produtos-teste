import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://ibureau.herokuapp.com/"; // usar enviroment variable? talvez

  constructor(
    private http: HttpClient
  ) { }

  // get genérico
  public get(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint}`)
  }

  // get local json - por não ter rota específica no api e escolha pessoal para não deixar hardcoded
  public getLocalJSON(localJSON: string): Observable<any> {
    return this.http.get<any>(`${localJSON}`)
  }
}
