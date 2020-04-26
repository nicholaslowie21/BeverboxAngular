import { Component, OnInit, ViewChild } from '@angular/core';
import { SubTransaction } from 'src/app/sub-transaction';  
import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';
import { DatePipe } from '@angular/common';
import { Subscription } from '../../subscription';
import { SubscriptionService } from 'src/app/subscription.service';

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
    items:any[];
    subscriptions: Subscription[];
    resultSuccess: boolean;
    resultError: boolean;
    message: String;

    @ViewChild("dt", { static: false }) public table: Table;

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      public sessionService: SessionService,
      private transactionService: TransactionService,
      private subscriptionService: SubscriptionService,
      private datePipe: DatePipe) { 
        this.resultSuccess = false;
        this.resultError = false;
      }

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

      this.subscriptionService.retrieveCustomerSubscriptions().subscribe (
        response => {
          this.subscriptions = response.subscriptions;
        },
        error => {
          console.log('********** ViewMyProfileComponent.ts: ' + error);
        }
      )

      this.items = [
        {icon: 'pi pi-home', routerLink:['/index']},
        {label: 'My Profile', routerLink:['/viewMyProfile']},
        {label: 'My Subscriptions'}
        ];

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
    
    checkRenewable(d: Date): boolean {
      let thisMonth = this.transformDate(new Date());
      thisMonth = thisMonth.substring(5, 7);

      let endDateMonth = this.parseDate(d);
      endDateMonth = endDateMonth.substring(5, 7);

      if (thisMonth == endDateMonth) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    }

    renewSubscription(subsId: number){
      console.log(subsId);
      console.log("in the method");
      this.subscriptionService.renewSubscription("", false, subsId).subscribe(
        response => {
          let newSubscriptionId: number = response.subsId;
          this.message = "New subscription " + newSubscriptionId + " created successfully";
          this.sessionService.updateCustomer();
          this.router.navigate(["/viewSubsHistory/"]);
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new product: " + error;
          
          console.log('********** RenewSubscriptionComponent.ts: ' + error);
        }
      );
    }

    checkAccessRight() {
		  if(!this.sessionService.checkAccessRight(this.router.url)) {
			  this.router.navigate(["/accessRightError"]);
		  }
	  }

}


