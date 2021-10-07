import { SelectItem } from 'primeng';
export class Evento{
    id:number ;
    dtEvento: string;
    justificativaAdiamento: string;
    valor: number;
    motivo: SelectItem;
    patrocinadores: SelectItem[]; 


}