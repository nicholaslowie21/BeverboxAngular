import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string;
	password: string;
	loginError: boolean;
	errorMessage: string;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService) {
      this.loginError = false;
  }

  ngOnInit() {
  }

  customerLogin(): void {
    this.sessionService.setEmail(this.email);
    this.sessionService.setPassword(this.password);
    
    this.customerService.customerLogin(this.email, this.password).subscribe(
			response => {										
				let customer: Customer = response.customer;				
				
				if(customer != null)
				{
					this.sessionService.setIsLogin(true);
					this.sessionService.setCurrentCustomer(customer);					
					this.loginError = false;
					
					//this.childEvent.emit();
					
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
			}
		);
  }

  customerLogout(): void
	{
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentCustomer(null);
		
		this.router.navigate(["/index"]);
	}

}
