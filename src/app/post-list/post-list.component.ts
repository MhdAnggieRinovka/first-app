import { NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-post-list',
  imports: [NgIf, FormsModule,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,CardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  // untuk ambil inputan dari class parentnya pakai @input 
@Input() postTitle : string ='' ;
@Input() postLogin :boolean = false;
childMessage : string = "Ini dari post list (kelas children)"
postCount : number = 190;
parentMessage : string ="Message from child using click Event"

@Output () MessageEvent = new EventEmitter();

  sendMessage()
  {
    // console.log("test");
    this.MessageEvent.emit(this.parentMessage)
  }
}
