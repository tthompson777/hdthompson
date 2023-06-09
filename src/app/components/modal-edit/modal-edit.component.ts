import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { OPTIONS_HD_PRIORITY, OPTIONS_HD_STATUS, OPTIONS_HD_TYPE } from 'src/app/constants/constants';
import { HdService } from 'src/app/services/hd.service';
import { SelectedRowService } from '../../services/selectedRow.service';
import { OpenaiService } from '../../services/openai.service';
import { ModalService } from '../../services/modalService';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  @Input() dataHds: any;
  selectedRow: any = {};
  editForm: FormGroup;

  // Enuns
  optionsHdType = OPTIONS_HD_TYPE;
  optionsHdPriority = OPTIONS_HD_PRIORITY;
  optionsHdStatus = OPTIONS_HD_STATUS;

  message: string = '';
  conversation: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private serviceHd: HdService,
    private selectedRowService: SelectedRowService,
    private chatService: OpenaiService,
    private modalService: ModalService
  ) { }

  get hdTitle() {
    return this.editForm.get("hdTitle");
  }
  get hdType() {
    return this.editForm.get("hdType");
  }
  get hdStatus() {
    return this.editForm.get("hdStatus");
  }
  get hdPriority() {
    return this.editForm.get("hdPriority");
  }
  get hdCreateDate() {
    return this.editForm.get("hdCreateDate");
  }
  get hdDescription() {
    return this.editForm.get("hdDescription");
  }
  get hdResolvedDate() {
    return this.editForm.get("hdResolvedDate");
  }

  ngOnInit() {
    this.selectedRowService.getSelectedRow().subscribe(row => {
      this.selectedRow = row;
    });
    this.createForm();
  }

  createForm() {
    this.editForm = this.fb.group({
      hdTitle: ["", [Validators.required]],
      hdType: ["", [Validators.required]],
      hdStatus: ["", [Validators.required]],
      hdPriority: ["", [Validators.required]],
      hdCreateDate: [moment().format('DD/MM/YYYY HH:mm'), [Validators.required]],
      hdResolvedDate: [],
      hdDescription: ["", [Validators.required]],
      selectControl: [Validators.required],
      options: [Validators.required],
    },
      {
        updateOn:
          "blur"
      });
  }

  onChange(selectedValue: string) {
    console.log(selectedValue);
  }

  onSaveEdit() {
    const _form = this.editForm.value
    _form._id = this.selectedRow._id
    this.serviceHd.putHds(_form).subscribe(data => {
      this.closeModal();
    });
  }

  sendMessage() {
    if (this.message.trim() === '') {
      return;
    }

    this.conversation.push({
      message: this.message,
      from: 'user'
    });

    this.chatService.sendMessage(this.message).subscribe((response: any) => {
      this.conversation.push({
        message: response.choices[0].text,
        from: 'bot'
      });

      this.message = '';
    });
  }

  closeModal() {
    this.modalService.fecharModal();
  }

}
