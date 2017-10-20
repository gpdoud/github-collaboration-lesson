import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SueAnnComponent } from '../sue-ann/sue-ann.component';

import { GregComponent } from '../greg/greg.component';

const approutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: "full" },
	{ path: "sue-ann", component: SueAnnComponent},
	{ path: 'greg', component: GregComponent }
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: []
})
export class AppRoutingModule { }
