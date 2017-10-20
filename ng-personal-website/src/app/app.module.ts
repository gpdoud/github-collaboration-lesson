import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SueAnnComponent } from './sue-ann/sue-ann.component';
import { GregComponent } from './greg/greg.component';

@NgModule({
  declarations: [
    AppComponent,
    SueAnnComponent,
    GregComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
