import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditFournisseurComponent } from './components/Fournisseur/add-edit-fournisseur/add-edit-fournisseur.component';
import { ConsultFournisseurComponent } from './components/Fournisseur/consult-fournisseur/consult-fournisseur.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-fournisseur', component: AddEditFournisseurComponent },
  { path: 'updt-fournisseur/:id', component: AddEditFournisseurComponent },
  { path: 'consult-fournisseur', component: ConsultFournisseurComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
