import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.less']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe( data =>{
      this.goToCustomerList();
    }
    , error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }
}
