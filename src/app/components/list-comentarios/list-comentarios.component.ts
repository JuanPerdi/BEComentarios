import { Component } from '@angular/core';
import { comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent {

  listComentarios: comentario[]=[];

  constructor(private _comentarioService:ComentarioService){}

  ngOnInit():void{
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getListComentarios().subscribe(data=>{
      this.listComentarios=data;
    },error=>{
      console.log(error);
    })
  }

  eliminarComentario(id:any){
    this._comentarioService.deleteComentario(id).subscribe(data=>{
      this.getComentarios();
    },error=>{
      console.log(error);
    })
  }
}
