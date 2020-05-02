import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../session.service';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from 'rxjs';
import { Option } from '../option';
import { OptionService } from '../option.service';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
  providers: [MessageService]
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
	msgs: Message[] = [];

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
					console.log('Option 2' + this.option2.name);
				},
				error => {
					console.log('********** CreateSubscriptionComponent.ts: ' + error);
				}
			);
		} else {
			this.option2 = null;
		}
	  }

	checkOption2(): boolean {
		if (this.option2 == null){
			return false
		} else {
			return true;
		}
	}

	clear()
	{
		this.submitted = false;
		this.promoCode = "";
		this.cashback = false;
		this.optId = 0;
	}
	  
	  parseCashback(n: number)
	  {		
      let temp = n.toString();
      let idx = temp.indexOf(".");
      temp = temp.substring(0,idx + 3);
      return temp;
    }
  
  	create(createSubscriptionForm: NgForm)
	{	
		this.submitted = true;

		if (createSubscriptionForm.valid) 
		{
			this.subscriptionService.createSubscription(this.promoCode, this.cashback, this.optId).subscribe(
				response => {
					let newSubscriptionId: number = response.subsId;
					this.resultSuccess = true;
					this.resultError = false;
					this.msgs = [];
          			this.message = "New subscription " + newSubscriptionId + " created successfully";
					this.msgs.push({severity:'success', summary:'Success', detail:this.message});
					this.sessionService.updateCustomer();
					this.router.navigate(["/viewSubsHistory/"]);
        },
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while creating the new product: " + error;
					this.msgs = [];
					this.msgs.push({severity:'error', summary:'Error', detail:this.message});
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
