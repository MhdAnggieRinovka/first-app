import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy {
  @Input() updateName:string="";
  counter : number = 0;
  constructor(){
    // console.log("constructor in profile")
    // console.log(this.updateName)
  }
    
  ngOnInit(): void {
    // console.log("Ng OnInit hook trigger")
    // console.log(this.updateName)
  }

  ngOnChanges(): void {
      // console.log("changes triggers")
    }

  ngDoCheck(): void {
    // console.log("DoCheck Triggers")
  }

  incrementCounter()
  {
    this.counter++;
  }

  //Pemanggilannya hanya sekali setelah contetnnya sudah dipassing ke profile component
  ngAfterContentInit(): void {
    console.log("AfterContent Init Trigger")
  }
  ngAfterContentChecked(): void {
    // console.log("After Content Checked")
  }
  ngAfterViewInit(): void {
    console.log("Afterview Init Triggered");
  }
  ngAfterViewChecked(): void {
    console.log("After View Checked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Triggered")
  }
}
