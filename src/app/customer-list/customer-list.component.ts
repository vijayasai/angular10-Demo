import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CustomerService } from '../customer.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['update-customer', id]);
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
  }
}
