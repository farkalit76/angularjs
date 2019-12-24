import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Payinfo } from './payinfo';
import { Responsestatus } from './../responsestatus';
import { Respstatus } from './respstatus';
import { Router } from '@angular/router';


@Component({
  selector: 'app-knet-pay',
  templateUrl: './knet-pay.component.html',
  styleUrls: ['./knet-pay.component.css']
})
export class KnetPayComponent implements OnInit {

  env:string;
  lang:string;
  token:string;
  name:string;
  amount:number;
  comment:string;
  paymentInfo : Payinfo;
  responsestatus: Responsestatus;
  respstatus: Respstatus;
  
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.env = params['env'];
      this.lang = params['l'];
      this.token = params['t'];
      console.log('env:'+this.env +',lang:'+this.lang +', token:'+this.token);
    });
    //this.getKnetPaymentInfo();
    if( this.env == null){
      this.env='DCP-USMAN';
      this.lang='en';
      this.token='d1RQTUF5R2c5Z3BYeFVWR2NlQ1FWUT09';
      console.log(' Default values ---env:'+this.env +',lang:'+this.lang +', token:'+this.token);
    }
    this.getKnetPayInfo(this.env, this.lang, this.token);
  }

  
  getKnetPaymentInfo() {
    this.api.getKnetPaymentInfo(this.env, this.lang, this.token)
     .subscribe(data => {
       console.log(data);
       console.log(data['status'].success);
       if( data['status'].success == true){
         console.log(data['response']);
         var pay = data['response'];
       }
     });
   }

   getKnetPayInfo(env:string, lang:string, token:string) {
    this.api.getKnetPayInfo(env, lang, token)
    .subscribe(resp => {
      console.log('resp:::',resp);
      //const keys = resp.headers.keys();
      //this.respstatus =resp.body['status'];
      console.log('status:',resp.body['status']['success']);
      if(resp.body['status']['success']){
        this.paymentInfo = resp.body['response'];//['message'];
        console.log('paymentInfo:', this.paymentInfo);
        this.name=this.paymentInfo.cif;
        this.amount=this.paymentInfo.amountInKwd;
        this.comment= this.paymentInfo.comment;
      }else{
        console.log('payment not initiated....');
        alert('payment not initiated....');
      }
    });
  }

   confirmPayment(){
     console.log('--this.paymentInfo--:',this.paymentInfo)
     this.api.getKnetConfirm(this.paymentInfo)
    .subscribe(resp => {
      console.log(resp);
      //const keys = resp.headers.keys();
      console.log('status:',resp['status']['success']);
      if(resp['status']['success']){
        console.log('message:',resp['response']);//['message']);
        var data = resp['response'];//['message'];
        console.log('kneturl:',data.knetPaymentUrl);
        //this.router.navigateByUrl(data.knetPaymentUrl);
        //this.router.navigate(['/externalRedirect', { externalUrl: data.knetPaymentUrl}]);
        window.open(data.knetPaymentUrl)
      }else{
        console.log('payment not succcess..');
        alert('payment not succcess....');
      }
    });
   }

   rejectPayment(){
     this.router.navigate(['/reject']);
   }
}
