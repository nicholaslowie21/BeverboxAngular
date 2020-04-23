import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { SessionService } from '../session.service';



@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit
{
	
	items: any[];
	
	constructor(private router: Router,
				public sessionService: SessionService)
	{		
	}

	
	
	ngOnInit() {
		this.items = [{
            label: 'Beverbox',
            items: [
                {label: 'Home', icon: 'pi pi-home', url: ['index'] },
                {label: 'Create Account', icon: 'pi pi-home', url: ['createAccount'] },
                {label: 'My Profile', icon: 'pi pi-home', url: ['viewMyProfile'] },
				{label: 'My Reviews', icon: 'pi pi-home', url: ['viewMyReviews'] }
            ]
        },
        {
            label: 'Product',
            items: [
                {label: 'Subscription Options', icon: 'pi pi-home', url: ['viewAllOptions'] },
                {label: 'Box', icon: 'pi pi-home', url: ['viewAllBoxes'] },
                {label: 'Beverage', icon: 'pi pi-home', url: ['viewBeverage'] }
                
            ]
        },
        {
            label: 'Transaction History',
            items: [
                {label: 'Beverage', icon: 'pi pi-home', url: ['beverageTransaction'] },
                {label: 'Subscription', icon: 'pi pi-home', url: ['viewSubsHistory'] }
            ]
        },
        {
            label: 'Other',
            items: [
                {label: 'Promotions', icon: 'pi pi-home', url: ['viewAllPromotions'] },
				{label: 'Article', icon: 'pi pi-home', url: ['viewAllArticles'] }
            ]
        }];
	}
}
