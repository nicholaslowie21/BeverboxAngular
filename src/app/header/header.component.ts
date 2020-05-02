import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  	email: string;
	password: string;
	loginError: boolean;
	errorMessage: string;
	msgs: Message[] = [];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService, private messageService: MessageService) {
      this.loginError = false;
  }

  ngOnInit() {
  }

  customerLogin(): void {
    this.sessionService.setEmail(this.email);
	this.sessionService.setPassword(this.password);
	console.log("I am at customerLogin() in header component");
    
    this.customerService.customerLogin(this.email, this.password).subscribe(
			response => {										
				let customer: Customer = response.customer;				
				
				if(customer != null)
				{
					this.sessionService.setIsLogin(true);
					this.sessionService.setCurrentCustomer(customer);					
					this.loginError = false;
					this.messageService.add({severity:'success', summary: 'Success', detail:'You are now logged in!'});
					
					this.router.navigate(["/index"]);
				}
				else
				{
					this.loginError = true;
				}
			},
			error => {
				this.loginError = true;
				this.errorMessage = error
				this.messageService.add({severity:'error', summary: 'Error', detail:this.errorMessage});
			}
		);
  }

  reset(): void {
	this.email = "";
	this.password = "";
  }

  customerLogout(): void
	{
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentCustomer(null);
		
		this.router.navigate(["/index"]);
	}

}
