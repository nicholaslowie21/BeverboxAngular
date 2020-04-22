import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  steps:MenuItem[]

  constructor(public sessionService: SessionService)
	{
	}

  ngOnInit() {
    this.steps= [
      {label: 'Register & Log In'},
      {label: 'Browse'},
      {label: 'Customise & Pay'},
      {label: 'Delivered at your doorstep'},
    ];
  }

}
