import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './message.component.html',
    styleUrl: './message.component.css'
})

export class MessageComponent {
    title = 'menssagem';
    message = {
        content: 'to ficano fera no assunto',
        author: 'Caio Nathan'
    };
}