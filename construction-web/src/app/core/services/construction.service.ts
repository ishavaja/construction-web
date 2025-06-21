import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommanData, ObservationData } from '../models/construction.model';

@Injectable({ providedIn: 'root' })
export class ConstructionService {
  constructor(public http:HttpClient){}
  private apiUrl = 'https://localhost:7174/api/Observation';

  getAll(): Observable<CommanData> {
    return this.http.get<CommanData>(this.apiUrl);
  }

  update(data: ObservationData): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }
}
