import { Component, Input, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-signal',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './message-signal.component.html',
    styleUrl: './message.component.css'
})

export class MessageComponentSignal {
    messageVarClasse = input<Message>(new Message("", ""));
    // @Input() messageVarClasse : Message = new Message
}