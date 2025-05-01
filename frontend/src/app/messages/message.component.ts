import { Component, EventEmitter, Input, Output, input} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Message } from "./message.model";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent {
    @Input() messageVarClasse : Message = new Message

    onEdit(){
        alert('ta funcionando...')
    } 
}