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
                {label: 'About Us', icon: 'pi pi-question', url: ['aboutUs'] },
                {label: 'Article', icon: 'pi pi-file', url: ['viewAllArticles'] },
                {label: 'Promotions', icon: 'pi pi-money-bill', url: ['viewAllPromotions'] },
            ]
        },
        {
            label: 'Product',
            items: [
                {label: 'Subscription', icon: 'pi pi-bell', url: ['viewAllOptions'] },
                {label: 'Box', icon: 'pi pi-briefcase', url: ['viewAllBoxes'] },
                {label: 'Beverage', icon: 'pi pi-tags', url: ['viewBeverage'] }
                
            ]
        },
        {
            label: 'My Profile',
            items: [
                {label: 'Update Profile', icon: 'pi pi-user', url: ['viewMyProfile'] },
                {label: 'My Reviews', icon: 'pi pi-comment', url: ['viewMyReviews']},
                {label: 'Subscription History', icon: 'pi pi-info-circle', url: ['viewSubsHistory'] },
                {label: 'Beverage History', icon: 'pi pi-tags', url: ['beverageTransaction'] },
            ]
        }
    ];
	}
}
