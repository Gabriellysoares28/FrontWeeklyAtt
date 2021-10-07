import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../model/Evento';
@Injectable({
    providedIn: 'root'
  })
  export class EventoService {
      public readonly BASE_URL: string = '/eventos'
  
    constructor(private http: HttpClient) { }
  
    public cadastraNovoEvento(novoEvento: Evento){
        return this.http.post(`${environment.apiUrl}${this.BASE_URL}`, novoEvento);
    }
  
    public listarEventos(){
      return this.http.get<Evento[]>(`${environment.apiUrl}${this.BASE_URL}`);

  }
  }