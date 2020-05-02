import { Component, OnInit } from '@angular/core';

import { Review } from '../review';
import { ReviewService } from '../review.service';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-view-my-reviews',
  templateUrl: './view-my-reviews.component.html',
  styleUrls: ['./view-my-reviews.component.css'],
  providers: [ConfirmationService]
})

export class ViewMyReviewsComponent implements OnInit {

	
	reviews: Review[];
	msgs: Message[] = [];
	empty: boolean;

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				public sessionService: SessionService,
				private reviewService: ReviewService,
				private confirmationService: ConfirmationService)
	{	  
	}


	ngOnInit() 
	{
		this.checkAccessRight();
		
		this.reviewService.getReviewsByEmail().subscribe(
			response => {
				this.reviews = response.reviews;
				if(this.reviews.length == 0) {
					this.empty = true;
				}
				else {
					this.empty = false;
				}
			},
			error => {
				console.log('********** ViewMyReviewsComponent.ts: ' + error);
			}
		);

	}


	parseDate(d: Date) 
	{	
		let temp = d.toString().replace('[UTC]', '');
		let idx = temp.indexOf("Z");
		temp = temp.substring(0,idx);
		let hIdx = temp.indexOf("T");
		let col = temp.indexOf(":");
		let hour = ''+(parseInt(temp.substring(hIdx+1,col))+8);
		if (hour.length == 1) {
			hour = '0'+hour;
		}
		let newTemp = temp.substring(0,hIdx+1)+(hour)+temp.substring(col,temp.length);
		return newTemp;
	}


	createList(rating: number) {
		let arr = new Array<number>(rating);
		return arr;
	}
	
	
	confirmDialog(reviewId: number) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this review?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.deleteReview(reviewId);
            },
            reject: () => {
				console.log('Canceled');
            }
        });
    }
	
	
	deleteReview(reviewId: number)
	{
		this.reviewService.deleteReview(reviewId).subscribe(
			response => {
				location.reload();
			},
			error => {
				console.log("Error deleting review");
				this.msgs.push({severity:'error', summary:'Error Message: ', detail:'Unable to delete review'});
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
