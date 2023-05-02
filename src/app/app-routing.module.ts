import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';
import { Formularios2Component } from './formularios2/formularios2.component';

const routes: Routes = [
	{ path: '', redirectTo: 'formularios', pathMatch: 'full' },
  { path: 'formularios', component: FormulariosComponent  },
  { path: 'formularios2', component: Formularios2Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
