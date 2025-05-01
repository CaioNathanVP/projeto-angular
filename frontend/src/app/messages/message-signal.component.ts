import { Component, EventEmitter, Input, Output, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Message } from "./message.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-message-signal',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './message-signal.component.html',
    styleUrl: './message.component.css'
})

// export class MessageComponentSignal {
//     color = 'yellow';
//     messageVarClasse = input<Message>(new Message("", ""));
//     //@Input() messageVarClasse : Message = new Message
// }

export class MessageComponentSignal {
    @Input() messageVarClasse : Message = new Message
    @Output() outputMessage = new EventEmitter<string>();
    onEdit(){
        this.outputMessage.emit("texto retornado: venho de message")
    }
    }