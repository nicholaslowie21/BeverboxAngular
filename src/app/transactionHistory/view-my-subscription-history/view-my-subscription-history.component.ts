import { Component, OnInit, ViewChild } from '@angular/core';
import { SubTransaction } from 'src/app/sub-transaction';  
import { SessionService } from '../../session.service';
import { TransactionService } from '../../transaction.service';
import { DatePipe } from '@angular/common';
import { Subscription } from '../../subscription';
import { SubscriptionService } from 'src/app/subscription.service';
import { OptionService } from 'src/app/option.service';
import { Option } from '../../option';

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
    resultError: boolean;
    message: String;

    @ViewChild("dt", { static: false }) public table: Table;

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      public sessionService: SessionService,
      private transactionService: TransactionService,
      private subscriptionService: SubscriptionService,
      private optionService: OptionService,
      private datePipe: DatePipe) { 
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
        return true;
      } else {
        return false;
      }
    }

    renewSubscription(optionName: string){
      console.log(optionName);
      let activeOptions : Option[];
      let optId1 = 0;
      let optId2 = 0;
      let optId1Exist = false;

      // this.optionService.retrieveOptionByOptionId(optionId).subscribe(
			// 	response => {
      //     this.option = response.option;
      //     optionName = this.option.name;
			// 		console.log('Option' + this.option.name);
			// 	},
			// 	error => {
			// 		console.log('********** ViewMySubscriptionHistoryComponent.ts: ' + error);
			// 	}
      // );

      this.optionService.retrieveAllActiveOptions().subscribe(
        response => {
          activeOptions = response.options;
          
          for(var i = 0; i< activeOptions.length; i++) {
            if (activeOptions[i].name == optionName) {
              if(!optId1Exist) {
                optId1 = activeOptions[i].optionId;
                optId1Exist = true;
              } else {
                optId2 = activeOptions[i].optionId;
              }
            }
          }

          if (optId1Exist) {
            this.router.navigate(["/createSubscription/" + optId1 + "/" + optId2]);
          } else {
            this.resultError = true;
            this.message = "The subscription option is no longer active. Do browse our updated subscription option from the main menu."
          }
        },
        error => {
          console.log('********** ViewMySubscriptionHistoryComponent.ts: ' + error);
        }
      );


      // if (optId1Exist) {
      //   this.router.navigate(["/createSubscription/" + optId1 + "/" + optId2]);
      // } else {
      //   this.resultError = true;
      //   this.message = "The subscription option is no longer active :( Do browse our updated subscription option from the main menu on the left"
      // }

      // for(var i = 0; i< this.activeOptions.length; i++) {
      //   if (this.activeOptions[i].name == this.option.name) {
      //     if(!optId1Exist) {
      //       optId1 = this.activeOptions[i].optionId;
      //       optId1Exist = true;
      //     } else {
      //       optId2 = this.activeOptions[i].optionId;
      //     }
      //   }
      // }
      // this.subscriptionService.renewSubscription("", false, subsId).subscribe(
      //   response => {
      //     let newSubscriptionId: number = response.subsId;
      //     this.message = "New subscription " + newSubscriptionId + " created successfully";
      //     this.sessionService.updateCustomer();
      //     this.router.navigate(["/viewSubsHistory/"]);
      //   },
      //   error => {
      //     this.resultError = true;
      //     this.resultSuccess = false;
      //     this.message = "An error has occurred while creating the new product: " + error;
          
      //     console.log('********** RenewSubscriptionComponent.ts: ' + error);
      //   }
      // );
    }

    // loadOptions(optionId: number) {
    //   this.optionService.retrieveOptionByOptionId(optionId).subscribe(
		// 		response => {
		// 			this.option = response.option;
		// 			console.log('Option' + this.option.name);
		// 		},
		// 		error => {
		// 			console.log('********** ViewMySubscriptionHistoryComponent.ts: ' + error);
		// 		}
    //   );

    //   this.optionService.retrieveAllActiveOptions().subscribe(
    //     response => {
    //       this.activeOptions = response.options;
    //       console.log('************* ViewMySubscriptionHistoryComponent.ts is loaded');
    //     },
    //     error => {
    //       console.log('********** ViewMySubscriptionHistoryComponent.ts: ' + error);
    //     }
    //   );
    // }


    checkAccessRight() {
		  if(!this.sessionService.checkAccessRight(this.router.url)) {
			  this.router.navigate(["/accessRightError"]);
		  }
	  }

}


