import { Component, OnInit } from '@angular/core';
import Hd from '../../interfaces/hd';
import { HdService } from '../../services/hd.service';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.scss']
})
export class TableHomeComponent implements OnInit {

  dataHds: []

  constructor(private serviceHd: HdService) {}

  ngOnInit(): void {
    // Obtendo todos os chamados
    this.serviceHd.getHds().subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)
    })
  }

  // Deletar um chamado
  deleteHd(id: string) {
    this.serviceHd.deleteHds(id).subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)
    })
  }

}
