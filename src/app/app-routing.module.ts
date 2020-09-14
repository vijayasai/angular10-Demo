import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'update-customer/:id', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                       
  exports: [RouterModule]
})
export class AppRoutingModule { }