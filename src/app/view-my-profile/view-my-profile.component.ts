import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { NgForm } from '@angular/forms';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.component.html',
  styleUrls: ['./view-my-profile.component.css'],
  providers: [MessageService]
})
export class ViewMyProfileComponent implements OnInit {

  customer: Customer;
  display: boolean;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: String;
  msgs: Message[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService,
    private customerService: CustomerService, private messageService: MessageService) {
      this.display = false;
      this.submitted = false;
      this.resultSuccess = false;
      this.resultError = false;
    }

  ngOnInit() {
    this.checkAccessRight();  
    
    this.customer = this.sessionService.getCurrentCustomer();

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
          this.msgs.push({severity:'success', summary:'Success', detail:'Account Updated'});
          this.sessionService.updateCustomer();
				},
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while updating your profile: " + error;
          this.msgs.push({severity:'error', summary:'Error', detail:'Something went wrong'});
					console.log('********** ViewMyProfile.ts: update profile error' + error);
				}
			);
    }
  }

  parseCashback(n: number)
  {		
    let temp = n.toString();
    let idx = temp.indexOf(".");
    temp = temp.substring(0,idx + 3);
    return temp;
  }
  
  checkAccessRight() {
  if(!this.sessionService.checkAccessRight(this.router.url))
  {
   this.router.navigate(["/accessRightError"]);
  }
 }

}