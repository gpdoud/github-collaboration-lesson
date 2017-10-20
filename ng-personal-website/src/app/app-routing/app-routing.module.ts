import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { EricSmithComponent } from '../eric-smith/eric-smith.component';

const approutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: "full" },
  { path: 'ericsmith', component: EricSmithComponent }
];

@NgModule({
  imports: [
    CommonModule,
  	RouterModule.forRoot(approutes, { enableTracing: false })
  ],
  declarations: []
})
export class AppRoutingModule { }
