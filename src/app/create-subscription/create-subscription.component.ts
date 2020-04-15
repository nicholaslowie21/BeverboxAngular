import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../session.service';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit {

	submitted: boolean;
  newSubscription: Subscription;
  promoCode: string;
  cashback: boolean;
  optId: number;
  // Might need to remove but not sure
	
	resultSuccess: boolean;
	resultError: boolean;
	message: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public sessionService: SessionService,
              public subscriptionService: SubscriptionService) 
  {
    this.submitted = false;
		// this.newSubscription = new Subscription();
		
		this.resultSuccess = false;
		this.resultError = false;
    
    }

  ngOnInit() {
  }

	clear()
	{
		this.submitted = false;
		// this.newSubscription = new Subscription();
  }
  
  create(createSubscriptionForm: NgForm)
	{	
		this.submitted = true;
		
		if (createSubscriptionForm.valid) 
		{
			this.subscriptionService.createSubscription(this.promoCode, this.cashback, this.optId).subscribe(
				response => {
					let newSubscriptionId: number = response.subscriptionId;
					this.resultSuccess = true;
					this.resultError = false;
					this.message = "New subscription " + newSubscriptionId + " created successfully";
          // Navigate to a diff page: use activated Route?
        },
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while creating the new product: " + error;
					
					console.log('********** CreateSubscriptionComponent.ts: ' + error);
				}
			);
		}
	}

  checkAccessRight()
	{
		if(!this.sessionService.checkAccessRight(this.router.url))
		{
			this.router.navigate(["/accessRightError"]);
		}
	}
}
