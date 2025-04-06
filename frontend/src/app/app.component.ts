import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./messages/message.component";
import { Person } from "./person.model";



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        FormsModule,
        MessageComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',  
    
})

export class AppComponent {
    title = 'menssagem';
    message = {
        content: 'to ficano fera no assunto',
        author: 'Caio Nathan'
    };
    pessoa1: Person = new Person(100, 'Caio Nathan', 25);
    pessoa3: Person = new Person();
}