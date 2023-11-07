import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent {
  agregarComentario:FormGroup;
  accion='Agregar';
  id=0;
  comentario:comentario|undefined;

  constructor(private fb:FormBuilder,private _comentarioService:ComentarioService,
    private router:Router,private aRoute:ActivatedRoute){
    this.agregarComentario=this.fb.group({
      titulo:['',Validators.required],
      creador:['',Validators.required],
      texto:['',Validators.required],
    })

    this.id=+this.aRoute.snapshot.paramMap.get('id')!;//el + es para parsear de string a number
    //y ! es para que ignore null y undefined
  }

  ngOnInit():void{
    this.esEditar();
  }

  esEditar(){
    if(this.id!=0){
      this.accion="Editar";
      this._comentarioService.getComentario(this.id).subscribe(data=>{
        this.comentario=data;
        this.agregarComentario.patchValue({
          titulo:data.titulo,
          texto:data.texto,
          creador:data.creador
        })
      },error=>{
        console.log(error);
      })
    }
  }
  agregarEditarComentario(){

    if(this.comentario==undefined){
      //agregamos un nuevo comentario
      const comentario:comentario={
        titulo:this.agregarComentario.get('titulo')?.value,
        creador:this.agregarComentario.get('creador')?.value,
        texto:this.agregarComentario.get('texto')?.value,
        fechaCreacion:new Date()
      }
      this._comentarioService.saveComentario(comentario).subscribe(data=>{
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
      })
    }
    else{
      //editamos comentario
      const comentario:comentario={
        id:this.comentario.id,
        titulo:this.agregarComentario.get('titulo')?.value,
        creador:this.agregarComentario.get('creador')?.value,
        texto:this.agregarComentario.get('texto')?.value,
        fechaCreacion:new Date()
      }

      this._comentarioService.updateComentario(this.id,comentario).subscribe(data=>{
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
      })
    }

    
  }
}
