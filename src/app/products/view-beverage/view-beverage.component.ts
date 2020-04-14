import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../session.service';
import { BeverageService } from '../../beverage.service';
import { Beverage } from '../../beverage';


@Component({
  selector: 'app-view-beverage',
  templateUrl: './view-beverage.component.html',
  //styleUrls: ['./view-beverage.component.css']
  styles: [`
  .beverage-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .beverage-title {
    font-weight: bold;
    font-size: 20px;
    margin-top: 24px;
  }
  .beverage-data .car-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .beverage-data button {
    margin-left: 0.5em;
  }
  .beverage-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .beverage-details > .p-grid {
    margin-left: 0.6em;
  }
  .beverage-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})
export class ViewBeverageComponent implements OnInit {
  beverages: Beverage[];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private beverageService: BeverageService) { }

  ngOnInit() {

    this.beverageService.retrieveLimitedBeverage().subscribe(
      response => {
        this.beverages = response.beverages;
      },
      error => {
        console.log('********** ViewBeverageComponent.ts: ' + error)
      }
    )
  }




}
