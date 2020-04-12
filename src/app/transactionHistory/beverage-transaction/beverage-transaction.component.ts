import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';
import { BevTransaction } from '../../bev-transaction';

@Component({
  selector: 'app-beverage-transaction',
  templateUrl: './beverage-transaction.component.html',
  styleUrls: ['./beverage-transaction.component.css']
})
export class BeverageTransactionComponent implements OnInit {

  bevTrans: BevTransaction[];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.checkAccessRight();		
		
		this.transactionService.getBevTransactions().subscribe(
			response => {
				this.bevTrans = response.bevTransactions;
			},
			error => {
				console.log('********** BeverageTransactionComponent.ts: ' + error);
			}
		);
  }

  checkAccessRight()
	{
		if(!this.sessionService.checkAccessRight(this.router.url))
		{
			this.router.navigate(["/accessRightError"]);
		}
	}

}
