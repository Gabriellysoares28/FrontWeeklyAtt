import { SelectItem } from 'primeng';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class SituacaoService {
  
    constructor(private http: HttpClient) { }
  
    baseUrl = 'http://localhost:4200//situacao';
  
    buscarTodos(): Observable<SelectItem[]> {
      return this.http.get<SelectItem[]>(this.baseUrl);
    }
  }