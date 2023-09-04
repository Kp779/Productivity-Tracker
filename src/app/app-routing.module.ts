import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [ 
  {
    component : TimerComponent ,
    path : 'timer'
  },
  {
    component : TodoComponent ,
    path : 'todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
