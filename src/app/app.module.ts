import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Formularios2Component } from './formularios2/formularios2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormulariosComponent,
    Formularios2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
