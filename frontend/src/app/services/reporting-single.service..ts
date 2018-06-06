import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { SingleActivity } from "../model/single-activity";

const httpOptions = {
  headers: new HttpHeaders({ "content-type": "application.json" })
};

@Injectable()
export class SingleService {
  constructor(private http: HttpClient) {}
  showGameReports(): Observable<SingleActivity[]> {
    return this.http.get<SingleActivity[]>(
      "http://10.0.5.188:9099/api/v1/getAllSingleReports"
    );
  }
}
