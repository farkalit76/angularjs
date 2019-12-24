import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-knet-error',
  templateUrl: './knet-error.component.html',
  styleUrls: ['./knet-error.component.css']
})
export class KnetErrorComponent implements OnInit {

  message:string;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) { 
    console.log('KnetErrorComponent');
  }

  ngOnInit() {
    console.log('KnetErrorComponent.ngOnInit');
    this.errorKnetTransferResponse();
  }

  errorKnetTransferResponse(){
    console.log('errorKnetTransferResponse');
    this.api.errorKnetTransferResponse()
    .subscribe( resp=> {
      console.log('resp--->',resp);
      if(!resp['status']['success']){
        console.log('statusDesc:',resp['status']['statusDesc']);
        this.message = resp['status']['statusDesc'];
        console.log('this.message:',this.message);
      }else{
        console.log('there not succcess..');
        alert('payment not succcess....');
      }
    }, error => {
      console.log("KnetErrorComponent Error-->", error);
    });
  }

  backHome(){
    this.router.navigate(['/home']);
  }
}
