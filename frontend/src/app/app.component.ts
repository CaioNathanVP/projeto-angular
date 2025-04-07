import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./messages/message.component"
import { Message } from "./messages/message.model";
import { MessageComponentSignal } from "./messages/message-signal.component";
import { RouterOutlet } from "@angular/router";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        FormsModule,
        MessageComponent,
        MessageComponentSignal
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

})

export class AppComponent {
    messageBinding: Message = new Message("mensagem via input", "Caio Nathan");
    title = 'frontend';
}