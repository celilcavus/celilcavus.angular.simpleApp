import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'home',component:AppComponent},
  {path:'person',pathMatch:'full',component:PersonComponent},
  {path:'delete/:id',component:PersonComponent},
  {path:'person/:id',component:PersonUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
