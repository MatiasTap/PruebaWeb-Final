import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HabitacionComponent } from './habitaciones/habitacion.component';



const routes: Routes = [
  {  path: '', component: PanelComponent, pathMatch: 'full'},
  {  path: 'clientes', component: ClientesComponent},
  {  path: 'empleados', component: EmpleadosComponent},
  {  path: 'habitaciones', component: HabitacionComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
