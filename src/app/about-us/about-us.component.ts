import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';
import { NgForm } from '@angular/forms';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [MessageService]
})
export class AboutUsComponent implements OnInit {

  submitted: boolean;
  newFeedback: Feedback;
  display: boolean;
  resultSuccess: boolean;
	resultError: boolean;
  message: string;
  msgs: Message[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public sessionService: SessionService, private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.submitted = false;
    this.newFeedback =  new Feedback();

    this.display = false;
    this.resultSuccess = false;
		this.resultError = false;
  }

  createFeedback(newFeedbackForm: NgForm) {

    this.submitted = true;

    if (newFeedbackForm.valid) {
  
      this.feedbackService.createNewFeedback(this.newFeedback).subscribe(
        response => {					
					this.resultSuccess = true;
					this.resultError = false;
          this.message = "Feedback submitted successfully";
          this.msgs.push({severity:'success', summary:'Success', detail:'Feedback submitted!'});
				},
				error => {
					this.resultError = true;
					this.resultSuccess = false;
					this.message = "An error has occurred while creating your feedback: " + error;
          this.msgs.push({severity:'error', summary:'Error', detail:error});
					console.log('********** CreateFeedback.ts' + error);
				}
      );
    }
  }

}
