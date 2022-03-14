import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';


const routes: Routes = [{
  path: "/", 
  component: ClientComponent
  
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
