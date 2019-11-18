import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private http: HttpClient) { }
  public getGraphData(): Observable<any> {
    return this.http.get("./assets/data.json");
  }
}

