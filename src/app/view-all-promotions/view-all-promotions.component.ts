import { Component, OnInit, ViewChild } from '@angular/core';

import { Promotion } from '../promotion';
import { SessionService } from '../session.service';
import { PromotionService } from '../promotion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-view-all-promotions',
  templateUrl: './view-all-promotions.component.html',
  styleUrls: ['./view-all-promotions.component.css']
})
export class ViewAllPromotionsComponent implements OnInit {

    promotions: Promotion[];
    loading: boolean = true;
    types: any[];
    selectedType: string;

    @ViewChild("dt", { static: false }) public table: Table;

    constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      public sessionService: SessionService,
      private promotionService: PromotionService) { }

      ngOnInit() {
        this.promotionService.getPromotions().subscribe(
          response => {
            this.promotions = response.promotions;
            this.loading = false;
          },
          error => {
            console.log('********** PromotionComponent.ts: ' + error);
          }
        );

        this.types = ["NEW MEMBER", "GENERAL"];
      }

      onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'percentage', 'gte');
            }
        }
      }

      valueSelected() {
        this.table.filter(this.selectedType, 'promoType', 'equals');
      }

}
