import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'menssagem';
    message = {
        content: 'to ficano fera no assunto',
        author: 'Caio Nathan'
    };
}