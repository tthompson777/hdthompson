import { Component, OnInit } from '@angular/core';

import { HdService } from '../../services/hd.service';

@Component({
  selector: 'app-mainscreen-component',
  templateUrl: './mainscreen-component.component.html',
  styleUrls: ['./mainscreen-component.component.scss']
})

export class MainscreenComponentComponent implements OnInit {

  constructor(private serviceHd: HdService) { }

  ngOnInit() {
    this.serviceHd.getHds().subscribe(data => {
      console.log(data);
    });
  }

}
