import { Component, Input, OnInit } from '@angular/core'
import { HdService } from '../../services/hd.service'
import { ModalService } from '../../services/modalService'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { ModalEditComponent } from '../modal-edit/modal-edit.component'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'
import { SelectedRowService } from '../../services/selectedRow.service'

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
})
export class TableHomeComponent implements OnInit {

  @Input() dataHds: any;
  modalRef: BsModalRef;
  selectedRowId: string;
  

  constructor(
    private serviceHd: HdService,
    private modalService: BsModalService,
    private selectedRowService: SelectedRowService,
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

  openConfirmDialog(): void {
    const initialState = {
      title: 'Confirmação',
      message: 'Tem certeza que deseja excluir o item?'
    };
    const modalOptions = {
      initialState,
      backdrop: true,
      keyboard: false
    };
    const modalRef: BsModalRef = this.modalService.show(ConfirmDialogComponent, modalOptions);
    modalRef.content.confirm.subscribe(() => {
      this.deleteHd();
      modalRef.hide();
    });
    modalRef.content.decline.subscribe(() => {
      // Lógica a ser executada ao cancelar
      modalRef.hide();
    });
}

  // Abrirndo modal de edição
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
      this.selectedRowId = '';
      this.getHds();
    })
  }

  handleSelectedRowId(id: string) {
    this.selectedRowId = id;
  }

}
