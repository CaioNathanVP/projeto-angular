import { FormsModule } from "@angular/forms";
import { Component, Directive } from "@angular/core";
import { MessageComponentSignal } from "./message-signal.component";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    standalone: true,
    imports: [FormsModule,
        MessageComponentSignal
    ],
    template: `
      <div class="col-md-8 col-md-offset-2">

    @for (msg of messageS; track $index) {
      <app-message-signal [messageVarClasse]="msg" (outputMessage)="msg.content = $event">

      </app-message-signal>
    } @empty {
      messageS é uma lista vazia
      } </div> `

})
export class MessageListComponent {
  messageS: Message[] = [
    new Message ("texto 01 da mensagem - LIST - COMP", "caio"),
    new Message ("texto 02 da mensagem - LIST - COMP", "nathan"),
    new Message ("texto 03 da mensagem - LIST - COMP", "vieira"),
    new Message ("texto 04 da mensagem - LIST - COMP", "pinheiro")
  ];
}