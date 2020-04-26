import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.component.html',
  styleUrls: ['./view-my-profile.component.css']
})
export class ViewMyProfileComponent implements OnInit {

  customer: Customer;
  display: boolean;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: String;
  items:any[];
  subscriptions: Subscription[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService, private subscriptionService: SubscriptionService) {
      this.display = false;
      this.submitted = false;
      this.resultSuccess = false;
      this.resultError = false;
    }

  ngOnInit() {
    this.checkAccessRight();  
    
    this.customer = this.sessionService.getCurrentCustomer();

    this.items = [
      {icon: 'pi pi-home', routerLink:['/index']},
      {label: 'My Profile'},
    ];

    this.subscriptionService.retrieveCustomerSubscriptions().subscribe (
      response => {
        this.subscriptions = response.subscriptions;
      },
      error => {
        console.log('********** ViewMyProfileComponent.ts: ' + error);
      }
    )
  }

  showDialog() {
    this.display = true;
  }
  
  updateProfile(profileForm: NgForm) {
    // problem: updated address shows on angular page but not in database, all other attributes update properly
    this.submitted = true;
    
    if (profileForm.valid) 
		{
			this.customerService.updateProfile(this.customer).subscribe(
				response => {					
					this.resultSuccess = true;
					this.resultError = false;
          this.message = "Profile updated successfully";
          //this.updateCustomer();
				},
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while updating your profile: " + error;
					
					console.log('********** ViewMyProfile.ts: update profile error' + error);
				}
			);
    }
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer.customerEmail, this.customer.customerPassword).subscribe(
      response => {
        this.customer = response.customer;
        this.sessionService.setCurrentCustomer(response.customer);
        console.log('****** Customer Name: ' + this.customer.customerName);
      },
      error => {
        console.log('********** ViewMyProfile.ts: error updating customer' + error);
      }
    );
  }

  parseDate(d: Date)
  {		
    let temp = d.toString().replace('[UTC]', '');
    let idx = temp.indexOf("T");
    temp = temp.substring(0,idx);
    return temp;
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
  if(!this.sessionService.checkAccessRight(this.router.url))
  {
   this.router.navigate(["/accessRightError"]);
  }
 }

}