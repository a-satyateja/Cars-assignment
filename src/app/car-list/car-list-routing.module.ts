import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { EditPageComponent } from './edit-page/edit-page.component';
const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: ':manufacturer', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CarListRoutingModule { }
