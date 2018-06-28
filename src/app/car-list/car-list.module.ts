import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListRoutingModule } from './car-list-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CarListRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarListComponent, EditPageComponent]
})
export class CarListModule { }
