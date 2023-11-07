import { Component } from '@angular/core';
import { reserva } from 'src/app/interfaces/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent {
  listaReservas: reserva[]=[];

  constructor(private _reservaService:ReservaService){}

  ngOnInit():void{
    this.getReservas();
  }

  getReservas(){
    this._reservaService.getListReservas().subscribe(data=>{
      this.listaReservas=data;
    },error=>{
      console.log(error);
    })
  }
}
