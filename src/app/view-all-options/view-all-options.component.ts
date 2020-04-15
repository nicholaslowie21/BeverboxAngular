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


    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private optionService: OptionService) 
      { }

    ngOnInit() {
		this.optionService.retrieveAllOptions().subscribe(
			response => {
				this.options = response.options;
			},
			error => {
				console.log('********** ViewAllArticlesComponent.ts: ' + error);
			}
		);
	}

}
