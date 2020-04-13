import { Component, OnInit, ViewChild } from '@angular/core';
import { SubTransaction } from 'src/app/sub-transaction';  
import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-view-my-subscription-history',
  templateUrl: './view-my-subscription-history.component.html',
  styleUrls: ['./view-my-subscription-history.component.css']
})
export class ViewMySubscriptionHistoryComponent implements OnInit {

    subTransactions: SubTransaction[];
    loading: boolean = true;

    @ViewChild("dt", { static: false }) public table: Table;

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      public sessionService: SessionService,
      private transactionService: TransactionService) { }

    ngOnInit() {
      this.checkAccessRight();
      this.transactionService.getSubsTransactions().subscribe(
        response => {
          this.subTransactions = response.subTransactions;
          this.loading = false;
        },
        error => {
          console.log('********** SubscriptionTransactionComponent.ts: ' + error);
        }
      );

      

    }

    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'transAmt', 'gte');
            }
        }
    }

    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'transDate', 'equals')
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    checkAccessRight() {
		  if(!this.sessionService.checkAccessRight(this.router.url)) {
			  this.router.navigate(["/accessRightError"]);
		  }
	  }

}


