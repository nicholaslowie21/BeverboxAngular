import { Component, OnInit } from '@angular/core';

import { Review } from '../review';
import { ReviewService } from '../review.service';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-view-my-reviews',
  templateUrl: './view-my-reviews.component.html',
  styleUrls: ['./view-my-reviews.component.css']
})

export class ViewMyReviewsComponent implements OnInit {

	
	reviews: Review[];
	msgs: Message[] = [];


	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				public sessionService: SessionService,
				private reviewService: ReviewService)
	{	  
	}


	ngOnInit() 
	{
		this.checkAccessRight();
		
		this.reviewService.getReviewsByEmail().subscribe(
			response => {
				this.reviews = response.reviews;
			},
			error => {
				console.log('********** ViewMyReviewsComponent.ts: ' + error);
			}
		);
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
