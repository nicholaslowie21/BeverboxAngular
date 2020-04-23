import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../../session.service';
import { BoxService } from '../../box.service';
import { ReviewService } from '../../review.service';
import { Box } from '../../box';
import { Review } from '../../review';

import { Message } from 'primeng/api';


@Component({
  selector: 'app-view-all-boxes',
  templateUrl: './view-all-boxes.component.html',
  //styleUrls: ['./view-all-boxes.component.css'],
  styles: [`
  .box-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .box-title {
    font-weight: bold;
    font-size: 20px;
    margin-top: 24px;
  }
  .box-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .box-data button {
    margin-left: 0.5em;
  }
  .box-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .box-details > .p-grid {
    margin-left: 0.6em;
  }
  .box-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})

export class ViewAllBoxesComponent implements OnInit {

  boxes: Box[];
  boxToView: Box;
  display: boolean = false;
  newReview: Review;
  msgs: Message[] = [];
  login: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public sessionService: SessionService,
              private boxService: BoxService,
			  private reviewService: ReviewService) 
  {
  this.newReview = new Review();
  this.newReview.reviewRating = 0;
  this.newReview.reviewContent = '';
  
  }

  ngOnInit() {

    this.boxService.retrieveAllBoxes().subscribe(
        response => {
            this.boxes = response.boxes;
        },
        error => {
            console.log('********** ViewAllBoxesComponent.ts: ' + error)
        }
    )

  }

  showDialog(boxToView: Box) {
    this.display = true;
    this.boxToView = boxToView;
    this.login = (this.sessionService.getCurrentCustomer() != null);
    console.log(boxToView);
  }


  clear(reviewForm: NgForm) {
    this.msgs = [];
    reviewForm.reset();
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
  
  
	createReview(reviewForm: NgForm)
	{
    if(this.sessionService.getCurrentCustomer() == null) {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message: ', detail:'Login is required to leave a review!'});
      return;
    }
    if(this.newReview.reviewRating == 0 || this.newReview.reviewRating == null) {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message: ', detail:'Rating is required!'});
      return;
    }
    if(this.newReview.reviewContent == '' || this.newReview.reviewContent == null) {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message: ', detail:'Review is required!'});
      return;
    }
    console.log(this.newReview.reviewContent);
    this.newReview.reviewDate = new Date();
		this.reviewService.createNewReview(this.newReview, this.boxToView.boxId, this.sessionService.getCurrentCustomer().customerId).subscribe(
			response => {
				this.newReview.reviewId = response.reviewId;
				console.log('New review Id: ' + this.newReview.reviewId);
				location.reload();
			},
			error => {
				console.log('Error creating new review');
			}
		);	
	}

}
