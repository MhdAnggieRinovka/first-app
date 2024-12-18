import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,HeaderComponent, UpperCasePipe, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title : string = 'this loaded dynamicly';
  isDisabled : boolean = true;
  isActive: boolean = true;
  fruit: string ='apple';
  isLogin: boolean =false;
  isGuest: boolean = false;

  userName: string ='Babi';

  buttonClick(){
    // this.fruit = 'grape';
    console.log('button just clicked');
  }
  keyEnter(event:any){
    // this.fruit = 'grape';
    console.log(event.keyCode);
    if(event.keyCode == 13)
      {
        console.log("You find the "+event.key);
      }
  }
  keyFiltering(user:HTMLInputElement){
    // this.fruit = 'grape';
    console.log(user.id);
  }
  updateUserName(username:HTMLInputElement)
  {
    this.userName = username.value;
    console.log(this.userName)
  }
  loginCount: number = 0;
  countLoginAttempts()
  {
    this.loginCount++;
  }
}
