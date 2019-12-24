import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-knet-response-back',
  templateUrl: './knet-response-back.component.html',
  styleUrls: ['./knet-response-back.component.css']
})
export class KnetResponseBackComponent implements OnInit {

  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {  
    // headers.set('Access-Control-Allow-Origin', '*');
    // headers.set('withCredentials','True');
    // headers.set('useXDomain','True');
    // headers.set('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');
    console.log('done...')
  }

  ngOnInit() {
    service : ApiService;
    console.log('response back page started..')
    console.log('this.activatedRoute.queryParams--:',this.activatedRoute.queryParams);
    this.activatedRoute.paramMap.subscribe((params: any) => {
      console.log('response params :', params);
      //Do some logic with the id
    }) 
    this.printAll();
  }

  // printString(string){
  //   setTimeout(
  //     () => {
  //       console.log(string)
  //     }, 
  //     Math.floor(Math.random() * 100) + 1
  //   )
  // }
  
  // printAll(){
  //   this.printString("A")
  //   this.printString("B")
  //   this.printString("C")
  // }

  printString(string, callback){
    setTimeout(
      () => {
        console.log(string)
        callback()
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }
  printAll(){
    this.printString("A", () => {
      this.printString("B", () => {
        this.printString("C", () => {})
      })
    })
  }


}
