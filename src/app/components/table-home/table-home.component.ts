import { Component, Input, OnInit } from '@angular/core'
import { HdService } from '../../services/hd.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalEditComponent } from '../modal-edit/modal-edit.component'
import { SelectedRowService } from '../../services/selectedRow.service'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.css'],
  providers: [MessageService]
})
export class TableHomeComponent implements OnInit {

  @Input() dataHds: any;
  modalRef: BsModalRef;
  selectedRowId: string;

  constructor(
    private serviceHd: HdService,
    private modalService: BsModalService,
    private selectedRowService: SelectedRowService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHds();
  }

  getHds(){
    // Obtendo todos os chamados
    this.serviceHd.getHds().subscribe((data: any) => {
      this.dataHds = data
      console.log(this.dataHds)

      this.selectedRowService.setSelectedRow({});
    })
  }

  messageSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onReject() {
    this.messageService.clear('c');
  }

  openModal(tableRowData) {
    const modalRef: BsModalRef = this.modalService.show(ModalEditComponent);
    modalRef.content.dataHds = tableRowData;

    // Disponibilizando a linha selecionada da tabela
    this.selectedRowService.setSelectedRow(tableRowData);
  }

  // Deletar um chamado
  deleteHd() {
    const _id = this.selectedRowId;
    this.serviceHd.deleteHds(_id).subscribe((data: any) => {
      this.onReject();
      this.selectedRowId = '';
      this.getHds();
    })
  }

  handleSelectedRowId(id: string) {
    this.selectedRowId = id;
  }

}
