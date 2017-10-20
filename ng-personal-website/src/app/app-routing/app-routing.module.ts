import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: []
})
export class AppRoutingModule { }
