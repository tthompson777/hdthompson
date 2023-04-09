import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { HdService } from '../../services/hd.service'
import { ModalService } from '../../services/modalService'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalEditComponent } from '../modal-edit/modal-edit.component'
import { SelectedRowService } from '../../services/selectedRow.service'
import { MessageService } from 'primeng/api'


export interface HdsData {
  _id: string;
  hdTitle: string;
  hdType: string;
  hdStatus: string;
  hdPriority: string;
  hdDescription: string;
}

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
    private modalServiceBootstrap: ModalService
  ) { }

  ngOnInit(): void {
    this.getHds();
  }

  inputclassLgModal() {
    const divMinhaDiv = document.querySelector('.modal-dialog');

    if (divMinhaDiv) {
      divMinhaDiv.classList.add('modal-lg');
    }
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
    this.modalRef = this.modalService.show(ModalEditComponent);
    this.modalRef.content.dataHds = tableRowData;
    
    // Disponibilizando a linha selecionada da tabela
    this.selectedRowService.setSelectedRow(tableRowData);
    this.inputclassLgModal();

    // Quando a modal é fechada
    this.modalService.onHidden.subscribe(() => {
      this.getHds();
    });

    // Se inscreve no evento de fechar modal
    this.modalServiceBootstrap.fecharModal$.subscribe(() => {
      this.modalRef.hide();
    });
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
