import { Component, OnInit } from '@angular/core';

import { Option } from '../option';
import { OptionService } from '../option.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-options',
  templateUrl: './view-all-options.component.html',
  styleUrls: ['./view-all-options.component.css']
})
export class ViewAllOptionsComponent implements OnInit {
    
    options: Option[];
    uniqueOptions: Option[];
    priceSharing: number;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private optionService: OptionService) 
      {
        this.priceSharing = 0;
      }

    ngOnInit() {
		this.optionService.retrieveAllActiveOptions().subscribe(
			response => {
        this.options = response.options;
        console.log('************* ViewAllOptionsComponent.ts is loaded');
			},
			error => {
				console.log('********** ViewAllArticlesComponent.ts: ' + error);
			}
    );
    }

    // KIV: To print unique options, and inside has sharing and non sharing price
    // for (var i = 0; i < this.options.length; i++) {
    //   this.options
    // };
    

    createSub(optionId: number): void {
      // Will assign a diff value to this
      let option2 = 0;
      this.router.navigate(["/createSubscription/" + optionId + "/" + option2]);
    }
}

