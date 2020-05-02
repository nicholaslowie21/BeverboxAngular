import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { NgForm } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [MessageService]
})
export class CreateAccountComponent implements OnInit {

  submitted: boolean;
  newCustomer: Customer;
  display: boolean;
  resultSuccess: boolean;
	resultError: boolean;
	message: string;
  msgs: Message[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService, private messageService: MessageService) { }

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
          this.msgs.push({severity:'success', summary:'Success', detail:'Account Created'});
				},
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while creating your account: " + error;
          this.msgs.push({severity:'error', summary:'Error', detail:error});
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
