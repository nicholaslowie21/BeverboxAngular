import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../session.service';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from 'rxjs';
import { Option } from '../option';
import { OptionService } from '../option.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})

export class CreateSubscriptionComponent implements OnInit {

	submitted: boolean;
	promoCode: string = "";
	cashback: boolean = false;
	optId: number;
	optId1: number;
	optId2: number;
	option1: Option;
	option2: Option;
	currentLogs: number;
	
	resultSuccess: boolean;
	resultError: boolean;
	message: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
			  public sessionService: SessionService,
			  public optionService: OptionService,
              public subscriptionService: SubscriptionService) 
  	{
    	this.submitted = false;
		this.resultSuccess = false;
		this.resultError = false;

		this.option1 = new Option();
		this.option2 = new Option();
    }

  	ngOnInit() {
		this.checkAccessRight();

		this.currentLogs = this.sessionService.getCurrentCustomer().accumulatedCashback;
		this.optId1 = parseInt(this.activatedRoute.snapshot.paramMap.get('optId1'));
		this.optId2 = parseInt(this.activatedRoute.snapshot.paramMap.get('optId2'));

		if (this.optId1!= null) {
			this.optionService.retrieveOptionByOptionId(this.optId1).subscribe(
				response => {
					this.option1 = response.option;
					console.log('Option 1' + this.option1.name);
				},
				error => {
					console.log('********** CreateSubscriptionComponent.ts: ' + error);
				}
			);
		}
		
		if (this.optId2 != 0) {
			this.optionService.retrieveOptionByOptionId(this.optId2).subscribe(
				response => {
					this.option2 = response.option;
					console.log('Option 2' + this.option2);
				},
				error => {
					console.log('********** CreateSubscriptionComponent.ts: ' + error);
				}
			);
		} else {
			this.option2 = null;
		}
	  }
	  
	  print() {
		console.log(this.option1.name + " is Option1 Name");
		console.log(this.option2.name + " is Option2 Name");
	  }

	clear()
	{
		this.submitted = false;
  	}
  
  	create(createSubscriptionForm: NgForm)
	{	
		this.submitted = true;

		// Will change this after setting up the other stuff
		this.optId = this.optId1;

		if (createSubscriptionForm.valid) 
		{
			this.subscriptionService.createSubscription(this.promoCode, this.cashback, this.optId).subscribe(
				response => {
					let newSubscriptionId: number = response.subsId;
					this.resultSuccess = true;
					this.resultError = false;
					this.message = "New subscription " + newSubscriptionId + " created successfully";
       				//   Navigate to a diff page: use activated Route?
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
