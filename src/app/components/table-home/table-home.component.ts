import { Component, OnInit } from '@angular/core';
import Hd from '../../interfaces/hd';
import { HdService } from '../../services/hd.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.scss']
})
export class TableHomeComponent implements OnInit {

  dataHds: Array<Hd> = []

  constructor(private serviceHd: HdService) {}

  ngOnInit(): void {
    this.serviceHd.getHds().subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)
    })
  }

}
