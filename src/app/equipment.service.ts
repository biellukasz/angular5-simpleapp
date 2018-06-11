import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Equipment} from "./model/equipment";
import {Property} from "./model/property";
import {Comments} from "./model/comment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EquipmentService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/getall');
  }
  public createEquipment(equipment) {
    return this.http.post<Equipment>('http://localhost:8080/api/create', equipment);
  }

  getAllTypes(): Observable<any> {
    return this.http.get('http://localhost:8080/api/gettypes');
  }
  public createProperties(propertiesList) {
    return this.http.post<Array<Property>>('http://localhost:8080/api/addproperties', propertiesList);
  }
  public createComments(commentsList) {
    return this.http.post<Array<Comments>>('http://localhost:8080/api/addcomments', commentsList);
  }

}


