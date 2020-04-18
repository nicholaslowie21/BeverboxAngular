import { Component, OnInit } from '@angular/core';

import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  styles: [`
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .promotion-details > .p-grid {
            border: 1px solid #b3c2ca;
            border-radius: 3px;
            margin: 0.3em;
            text-align: center;
            padding: 2em 0 2.25em 0;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .promotion-data .promotion-title {
            font-weight: 700;
            font-size: 20px;
            margin-top: 24px;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .promotion-data .promotion-subtitle {
            margin: 0.25em 0 2em 0;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .promotion-data button {
            margin-left: 0.5em;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .promotion-data button:first-child {
            margin-left: 0;
        }
        .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
            width: 16px !important;
            height: 16px !important;
            border-radius: 50%;
        }
        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .promotion-details > .p-grid {
            margin-left: 0.6em;
        }
        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .promotion-details > .p-grid {
            margin-right: 0.6em;
        }
    `]
})
export class SidebarComponent implements OnInit {

    promotions: any[];

    responsiveOptions;

    constructor(private promotionService: PromotionService) { 
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    ngOnInit() {
      this.promotionService.getPromotions().subscribe(
        response => {
          this.promotions = response.promotions;
        },
        error => {
          console.log('********** PromotionComponent.ts: ' + error);
        }
      );
    }

}
