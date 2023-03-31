import { Component, OnInit } from '@angular/core'

import { HdService } from '../../services/hd.service'
import Hd from '../../interfaces/hd'

@Component({
  selector: 'app-mainscreen-component',
  templateUrl: './mainscreen-component.component.html',
  styleUrls: ['./mainscreen-component.component.css']
})

export class MainscreenComponentComponent implements OnInit {

  dataHds: Array<Hd> = []

  constructor(private serviceHd: HdService) {}

  ngOnInit(): void {
    this.serviceHd.getHds().subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)
    })
  }

}
