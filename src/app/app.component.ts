import { Component, NgModule, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgComponentOutlet, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { PostListComponent } from './post-list/post-list.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,HeaderComponent, UpperCasePipe,
            FormsModule, NgIf ,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,
            NgStyle, PostListComponent,CardComponent,NgComponentOutlet,ProfileComponent,
            LowerCasePipe,TitleCasePipe,CurrencyPipe,DecimalPipe,PercentPipe,DatePipe,JsonPipe,SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
    appNama: string = "Jamaika";
    title:string = "angular app"
    day= new Date;
    constructor(private viewContainer : ViewContainerRef){}
    loadComponent()
    {
        // this.viewContainer.createComponent(PostListComponent);
        this.viewContainer.createComponent(ProfileComponent);
    }
    removeComponent()
    {
        this.viewContainer.remove();
    }
    changeUser()
    {
        this.appNama ="Yanto";
    }
    // uppercase()
    // {
    //   this.title = this.title.toUpperCase();
    // }
    user:any = {
        "Nama": "Yanto",
        "Umur":34
    }
    convertToJson()
    {
      this.user = JSON.stringify(this.user);
    }
}
