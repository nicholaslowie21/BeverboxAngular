import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { NgForm } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  submitted: boolean;
  newCustomer: Customer;
  display: boolean;
  resultSuccess: boolean;
	resultError: boolean;
	message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.submitted = false;
		this.newCustomer = new Customer();
    
    this.display = false;
		this.resultSuccess = false;
		this.resultError = false;

  }

  createAccount(newAccountForm: NgForm) {

    this.submitted = true;

    if (newAccountForm.valid) {
      this.customerService.createNewCustomer(this.newCustomer).subscribe(
        response => {					
					this.resultSuccess = true;
					this.resultError = false;
          this.message = "Account created successfully";
				},
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while creating your account: " + error;
					
					console.log('********** CreateAccount.ts' + error);
				}
      );
    }
  }

  showDialog() {
    this.display = true;
  }

  redirect() {
    // navigate to homepage when done
    this.router.navigate(["/index"]);
  }

}
