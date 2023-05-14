import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Formularios2Component } from './formularios2/formularios2.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { TodoComponent } from './todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormulariosComponent,
    Formularios2Component,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
