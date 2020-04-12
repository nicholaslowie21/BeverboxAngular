import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../session.service';
import { BoxService } from '../../box.service';
import { Box } from '../../box';


@Component({
  selector: 'app-view-all-boxes',
  templateUrl: './view-all-boxes.component.html',
  styleUrls: ['./view-all-boxes.component.css']
})

export class ViewAllBoxesComponent implements OnInit {

  boxes: Box[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public sessionService: SessionService,
              private boxService: BoxService) 
  {
  
  
  }

  ngOnInit() {

    this.boxService.retreiveAllBoxes().subscribe(
        response => {
            this.boxes = response.boxes;
        },
        error => {
            console.log('********** ViewAllBoxesComponent.ts: ' + error)
        }
    )



  }

}
