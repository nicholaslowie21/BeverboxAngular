import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';
import { BeverageService } from '../../beverage.service';
import { Beverage } from '../../beverage';
import { BevTransaction } from 'src/app/bev-transaction';


@Component({
  selector: 'app-view-beverage',
  templateUrl: './view-beverage.component.html',
  //styleUrls: ['./view-beverage.component.css']
  styles: [`
  .beverage-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .beverage-title {
    font-weight: bold;
    font-size: 20px;
    margin-top: 24px;
  }
  .beverage-data .car-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .beverage-data button {
    margin-left: 0.5em;
  }
  .beverage-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .beverage-details > .p-grid {
    margin-left: 0.6em;
  }
  .beverage-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})
export class ViewBeverageComponent implements OnInit {
  beverages: Beverage[];
  resultSuccess: boolean;
	resultError: boolean;
  submitted: boolean;
  promoCode: string = "";
  cashback: boolean = false;
  beverageId: number;
  qty: number;
  newBevTransaction: BevTransaction;
  message: string;
  beverageToBuy: Beverage;
  display: Boolean;
  custCashback: number;
  beverage: Beverage;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private beverageService: BeverageService,
    public transactionService: TransactionService) { 

      this.newBevTransaction = new BevTransaction();
      this.submitted = false;
      this.resultSuccess = false;
      this.resultError = false;
    }

  ngOnInit() {
    this.checkAccessRight();
    this.beverageService.retrieveLimitedBeverage().subscribe(
      response => {
        this.beverages = response.beverages;
        this.beverage = this.beverages[0];
      },
      error => {
        console.log('********** ViewBeverageComponent.ts: ' + error)
      }
    )
  }

  clear()
	{
    this.submitted = false;
  	}

  showDialog(beverageToBuy: Beverage) {
    this.display = true;
    this.beverageToBuy = beverageToBuy;
    this.custCashback = this.sessionService.getCurrentCustomer().accumulatedCashback;
    console.log(this.sessionService.getCurrentCustomer().accumulatedCashback);

  }

  getCashback(): number {
    this.custCashback = this.sessionService.getCurrentCustomer().accumulatedCashback;
    return this.custCashback;
  }

  create(buyBevForm: NgForm) {
    this.submitted = true;
    console.log(buyBevForm.valid);
    if(buyBevForm.valid) {
      console.log(this.beverageToBuy.beverageId);
      this.transactionService.createBevTransaction(this.beverageToBuy.beverageId, this.promoCode, this.newBevTransaction.qty, this.cashback).subscribe(
        response => {
            this.newBevTransaction.transId = response.bevTransactionId;
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "New Beverage Transaction " + response.bevTransactionId + " created successfully";
            this.sessionService.updateCustomer();
          },
          
          error => {
            this.resultError = true;
					  this.resultSuccess = false;
					  this.message = error;
					
					console.log('********** (Buy beverage)ViewBeverageComponent.ts: ' + error);
          }
      )
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
