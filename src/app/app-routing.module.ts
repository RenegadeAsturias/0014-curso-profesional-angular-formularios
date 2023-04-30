import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [
	{ path: '', redirectTo: 'formularios', pathMatch: 'full' },
  { path: 'formularios', component: FormulariosComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
