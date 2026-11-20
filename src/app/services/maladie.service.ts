// src/app/services/maladie.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maladie, MaladieCreate } from '../models/maladie.model';

@Injectable({ providedIn: 'root' })
export class MaladieService {
  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/maladies';

  getAll(): Observable<Maladie[]> {
    return this.http.get<Maladie[]>(this.apiUrl);
  }

  create(maladie: MaladieCreate): Observable<Maladie> {
    return this.http.post<Maladie>(this.apiUrl, maladie);
  }
}