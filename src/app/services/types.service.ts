import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from "./api.service";

import { Type } from "../models/Type";

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  private typeJSON: string = "../assets/types.json";

  constructor(
    private api: ApiService
  ) { }

  public getTypes(): Observable<Type[]> {
    return this.api.getLocalJSON(this.typeJSON)
  }
}
