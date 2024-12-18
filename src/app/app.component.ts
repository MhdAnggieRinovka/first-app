import { Component, NgModule, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,HeaderComponent, UpperCasePipe,
            FormsModule, NgIf,NgTemplateOutlet,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,
            NgStyle, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements AfterViewInit{
  // title : string = 'this loaded dynamicly';
  // isDisabled : boolean = true;
  // isActive: boolean = true;
  // fruit: string ='apple';
  isLogin: boolean = false ;
  // isGuest: boolean = false;

  // userName: string ='admin';
  role: string = 'admin'

  // buttonClick(){
  //   // this.fruit = 'grape';
  //   console.log('button just clicked');
  // }
  // keyEnter(event:any){
  //   // this.fruit = 'grape';
  //   console.log(event.keyCode);
  //   if(event.keyCode == 13)
  //     {
  //       console.log("You find the "+event.key);
  //     }
  // }
  // keyFiltering(user:HTMLInputElement){
  //   // this.fruit = 'grape';
  //   console.log(user.id);
  // }
  // updateUserName(username:HTMLInputElement)
  // {
  //   this.userName = username.value;
  //   console.log(this.userName)
  // }
  // loginCount: number = 0;
  // countLoginAttempts()
  // {
  //   this.loginCount++;
  // }
  // users:Array<string> = ["John", "Smitha", "Atul"];
  newUser:string ="";
  count : number=1;
  userObj:Array<any> =[
    {id:1, name:"john"},
    {id:2, name:"Joshua"},
    {id:3, name:"Lambo"},
    {id:4, name:"Janguar"}
  ]
  addNewUser()
  {
      let user = {id:5,name:"Manko"}
      this.userObj.push(user);
  }
  deleteUser(user:object)
  {
    let index = this.userObj.indexOf(user);
    console.log(index)
    this.userObj.splice(index,1);
    // this.userObj.
  }
  masukData(newUser:string)
  {
      let index = this.userObj.length;
      console.log(newUser);
      this.userObj.push({id:index+1,name:newUser});
  }
  // deleteUserPerIndex(event:number)
  // {
  //   this.userObj.splice(event,1);
  // }
  appPostTitle : string = "Post";
  @ViewChild(PostListComponent) appChildMessage :any;
  // @ViewChild(PostListComponent) appPostCount :any;
  postChildMessage : string ="";
  postChildCount : number =0;
  messageFromChild :string="";
  // untuk ambil isi dari anak kelas harus implement AfterViewInit lalu bikin method seprti dibawah ini
  ngAfterViewInit(): void {
  //  console.log(this.appChildMessage) 
   this.postChildMessage = this.appChildMessage.childMessage;
  //  console.log(this.appChildMessage.childMessage) 
   this.postChildCount = this.appChildMessage.postCount
  //  console.log(this.appChildMessage.postCount) 
  }
  receiveMessage(message:string)
  {
    console.log(message);
    this.messageFromChild = message;
  }
}
