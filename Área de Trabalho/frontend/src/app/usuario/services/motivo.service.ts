import { SelectItem } from 'primeng';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Motivo } from '../model/Motivo';

@Injectable({
    providedIn: 'root'
  })
  export class MotivoService {
  
    baseUrl = 'http://localhost:4200/motivos';
  
    constructor(private http: HttpClient) { }
    
    buscarTodos(): Observable<Motivo[]> {
      const url = `${this.baseUrl}`;
      return this.http.get<Motivo[]>(url);
    }
  
    buscarTodosSelect(): Observable<SelectItem[]> {
      const url = `${this.baseUrl}/select`;
      return this.http.get<SelectItem[]>(url);
    }
  
    buscarPorId(id: any): Observable<Motivo> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Motivo>(url);
    }
  
    inserir(motivo : MotivoService) : Observable<Motivo> {
      return this.http.post<Motivo>(this.baseUrl, motivo);
    }
  
    atualizacao(motivo : Motivo, id : any) : Observable<Motivo> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.put<Motivo>(url, motivo);
    }
    
  }