import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public sessionService: SessionService)
	{
	}

  ngOnInit() {
  }

}
