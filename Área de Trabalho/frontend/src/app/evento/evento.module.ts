import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventosComponent } from './listagem-eventos/listagem-eventos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CadastroEventoComponent, ListagemEventosComponent,SharedModule],
  imports: [
    CommonModule,
    EventoRoutingModule,  
    SharedModule
  ]
})
export class EventoModule { }
