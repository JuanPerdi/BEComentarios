import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';

const routes: Routes = [
  {path:'',component:ListaReservasComponent},

  {path:'listaComentarios',component:ListComentariosComponent},
  {path:'agregar',component:AgregarEditarComentarioComponent},
  {path:'editar/:id',component:AgregarEditarComentarioComponent},
  {path:'ver/:id',component:VerComentarioComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
