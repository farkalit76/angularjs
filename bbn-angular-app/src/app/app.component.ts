import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Smartphone } from './smartphone';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  //smartphone: any = [];
  //smartphone: Smartphone[] = [];
  //constructor(private api: ApiService) {}
  constructor(){}

  ngOnInit() {
    //this.getSmartphones();
  }

  // getSmartphones() {
  //   this.api.getSmartphone()
  //   .subscribe(resp => {
  //     //console.log(resp);
  //     const keys = resp.headers.keys();
  //     //this.headers = keys.map(key =>
  //     //  `${key}: ${resp.headers.get(key)}`);
  
  //     for (const data of resp.body) {
  //       this.smartphone.push(data);
  //     }
  //     //console.log(this.smartphone);
  //   });
  // }

  // clickButton() {  
  //   let num = 10;  
  //   num++;  
  //   alert(`Value of 'num' is : ${num}`);  
  // }  
}
