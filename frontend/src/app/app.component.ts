import { Component } from "@angular/core";
import { MessageComponent } from "./messages/message.component"
import { Message } from "./messages/message.model";
import { MessageComponentSignal } from "./messages/message-signal.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessageListComponent } from "./messages/message-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    MessageComponent,
    MessageComponentSignal,
    MessageInputComponent,
    MessageListComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

})

export class AppComponent {

    valorNgSwitch: number = 0;

    mostrarElemento: boolean = true;
    onMudaMostrarElemento() {
        this.mostrarElemento = !this.mostrarElemento;
    }
    
    messageS: Message[] = [
        new Message("Texto 01 da Mensagem", "ViniciusRosalen"),
        new Message("Texto 02 da Mensagem", "RosalenSilva"),
        new Message("Texto 03 da Mensagem", "SilvaVinicius")
    ];
    messageBinding: Message = new Message("mensagem via input", "Caio Nathan");
    title = 'frontend';
}