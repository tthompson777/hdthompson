import { Component, Input, OnInit } from '@angular/core'
import { HdService } from '../../services/hd.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalEditComponent } from '../modal-edit/modal-edit.component'
import { SelectedRowService } from '../../services/selectedRow.service'

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.css']
})
export class TableHomeComponent implements OnInit {

  @Input() dataHds: any;
  modalRef: BsModalRef;
  p: number = 1;

  constructor(
    private serviceHd: HdService,
    private modalService: BsModalService,
    private selectedRowService: SelectedRowService
  ) {}

  ngOnInit(): void {
    // Obtendo todos os chamados
    this.serviceHd.getHds().subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)

      this.selectedRowService.setSelectedRow({});
    })
  }

  openModal(tableRowData) {
    const modalRef: BsModalRef = this.modalService.show(ModalEditComponent);
    modalRef.content.dataHds = tableRowData;
    
    // Disponibilizando a linha selecionada da tabela
    this.selectedRowService.setSelectedRow(tableRowData);
  }

  // Deletar um chamado
  deleteHd(id: string) {
    this.serviceHd.deleteHds(id).subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)
    })
  }

}
