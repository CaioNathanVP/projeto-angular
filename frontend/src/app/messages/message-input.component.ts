import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
    selector: 'app-message-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './message-input.Component.html'
})
export class MessageInputComponent{}