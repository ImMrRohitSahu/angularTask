import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "todo/home", component:HomeComponent},
  {path: "todo", redirectTo:"todo/home", pathMatch: "full"},
  {path: "", redirectTo:"todo/home", pathMatch: "full"},
  {path: "todo/create", component:CreateComponent},
  {path: 'todo/edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
