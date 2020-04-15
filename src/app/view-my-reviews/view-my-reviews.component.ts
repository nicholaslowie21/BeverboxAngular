import { Component, OnInit } from '@angular/core';

import { Review } from '../review';
import { ReviewService } from '../review.service';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-my-reviews',
  templateUrl: './view-my-reviews.component.html',
  styleUrls: ['./view-my-reviews.component.css']
})

export class ViewMyReviewsComponent implements OnInit {

	
	reviews: Review[];


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
				//console.log("Box: " + this.reviews[0].box.boxId);
			},
			error => {
				console.log('********** ViewMyReviewsComponent.ts: ' + error);
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
