import { Component, OnInit, ViewChild } from '@angular/core';
import { SubTransaction } from 'src/app/sub-transaction';  
import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';
import { DatePipe } from '@angular/common';


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
      private transactionService: TransactionService,
      private datePipe: DatePipe) { }

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

    onDurationChange(event) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const duration = parseInt(value);

          if (!isNaN(duration)) {
              this.table.filter(duration, 'monthDuration', 'gte');
          }
      }
  }

    onDateSelect(value) {
        this.table.filter(this.transformDate(value), 'transDate', 'contains')
    }

    onStartDateSelect(value) {
      this.table.filter(this.transformDate(value), 'startDate', 'contains')
    }

    onEndDateSelect(value) {
      this.table.filter(this.transformDate(value), 'endDate', 'contains')
    }

    transformDate(date) {
      return this.datePipe.transform(date, 'yyyy-MM-dd');
    }

    parseDate(d: Date)
	  {		
      let temp = d.toString().replace('[UTC]', '');
      let idx = temp.indexOf("T");
      temp = temp.substring(0,idx);
      return temp;
	  }

    checkAccessRight() {
		  if(!this.sessionService.checkAccessRight(this.router.url)) {
			  this.router.navigate(["/accessRightError"]);
		  }
	  }

}


