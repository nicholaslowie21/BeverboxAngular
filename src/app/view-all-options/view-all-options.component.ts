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
    
    regularOptions: Option[];
    healthyOptions: Option[];
    alcoholOptions: Option[];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private optionService: OptionService) 
      {
      }

    ngOnInit() {
      this.optionService.retrieveOptionByType("REGULAR").subscribe(
        response => {
          this.regularOptions = response.options;
          console.log('************* ViewAllOptionsComponent.ts is loaded');
        },
        error => {
          console.log('********** ViewAllArticlesComponent.ts: ' + error);
        }
      );

      this.optionService.retrieveOptionByType("HEALTHY").subscribe(
        response => {
          this.healthyOptions = response.options;
          console.log('************* ViewAllOptionsComponent.ts is loaded');
        },
        error => {
          console.log('********** ViewAllArticlesComponent.ts: ' + error);
        }
      );

      this.optionService.retrieveOptionByType("ALCOHOL").subscribe(
        response => {
          this.alcoholOptions = response.options;
          console.log('************* ViewAllOptionsComponent.ts is loaded');
        },
        error => {
          console.log('********** ViewAllArticlesComponent.ts: ' + error);
        }
      );

    }
    
    checkSharing(option: Option): boolean {
      // console.log(option.name + " with priceSharing as " + option.priceSharing)
      if (option.priceSharing == 0) {
        return false;
      } else {
        return true;
      }
    }

    createSub(option: Option): void {
      let option1 = option.optionId;
      let option2 = option.sharingOptionId;
      this.router.navigate(["/createSubscription/" + option1 + "/" + option2]);
    }
}

