import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SessionService } from '../../session.service';
import { BoxService } from '../../box.service';
import { Box } from '../../box';


@Component({
  selector: 'app-view-all-boxes',
  templateUrl: './view-all-boxes.component.html',
  //styleUrls: ['./view-all-boxes.component.css'],
  styles: [`
  .car-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .car-data .car-title {
    font-weight: 1000;
    font-size: 20px;
    margin-top: 24px;
  }
  .car-data .car-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .car-data button {
    margin-left: 0.5em;
  }
  .car-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .car-details > .p-grid {
    margin-left: 0.6em;
  }
  .car-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})

/*@Component({
  templateUrl: './view-all-boxes.component.html',
  styles: [`
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
    font-weight: 1000;
    font-size: 20px;
    margin-top: 24px;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
    margin-left: 0.5em;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {
    margin-left: 0.6em;
  }
  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})*/



export class ViewAllBoxesComponent implements OnInit {

  boxes: Box[];
  boxToView: Box;
  display: boolean = false;

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

  showDialog(boxToView: Box) {
    this.display = true;
    this.boxToView = boxToView;
    console.log(boxToView);
  }

}
