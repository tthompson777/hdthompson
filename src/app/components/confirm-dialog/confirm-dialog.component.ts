import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>(); // Definindo um EventEmitter para o evento de confirmação
  @Output() decline: EventEmitter<void> = new EventEmitter<void>(); // Definindo um EventEmitter para o evento de cancelamento

  title: string;
  message: string;

  onConfirm(): void {
    this.confirm.emit(); // Emitindo o evento de confirmação
  }

  onDecline(): void {
    this.decline.emit(); // Emitindo o evento de cancelamento
  }
}
