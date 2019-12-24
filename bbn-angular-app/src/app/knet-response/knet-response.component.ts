import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Transferinfo } from './transferinfo';

@Component({
  selector: 'app-knet-response',
  templateUrl: './knet-response.component.html',
  styleUrls: ['./knet-response.component.css']
})
export class KnetResponseComponent implements OnInit {

    // amt: string;
    // auth: string;
    // authRespCode: string;
    // avr: string;
    // kmsid: string;
    // paymentid: string;
    // postdate: string;
    // ref: string;
    // result: string;
    // trackid: string;
    // trandata: string;
    // udf1: string;
    // udf2: string;
    // udf3: string;
    // udf4: string;
    // udf5: string;

    transinfo = new Transferinfo();

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) {
    console.log('KnetResponseComponent..');
   }

  ngOnInit() {
    console.log('knet ngOnInit called...');
    console.log('this.activatedRoute.queryParams:::',this.activatedRoute.queryParams);
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.amt = params['amt'];
    //   this.auth = params['auth'];
    //   this.authRespCode = params['authRespCode'];
    //   this.avr = params['avr'];
    //   this.kmsid = params['kmsid'];

    //   this.paymentid = params['paymentid'];
    //   this.postdate = params['postdate'];
    //   this.ref = params['ref'];
    //   this.result = params['result'];
    //   this.trackid = params['trackid'];
    //   this.trandata = params['trandata'];

    //   this.udf1 = params['udf1'];
    //   this.udf2 = params['udf2'];
    //   this.udf3 = params['udf3'];
    //   this.udf4 = params['udf4'];
    //   this.udf5 = params['udf5'];

    //   console.log('trackid:'+this.trackid +',paymentid:'+this.paymentid +', trandata:'+this.trandata);
 
    // });
    //[amt=null, auth=null, authRespCode=null, avr=null, kmsid=null, paymentid=100201935223203736, 
    //postdate=null, ref=, result=null, trackid=DCP-USMAN4121575296162019-12-18081814285, 
    //trandata=DDAFE509172BE35EB9A6D7B96E7C5CF22A0B537FEE4B48AF77D161F70AC41DD80B174DB9620EF0E344F8AA4D3BB446018DB4E25D74B1E87C0DCE7CC40F809125D0C63490C431717A9BFB504E1A7D9D5B3F658232FC5A0DC4732E70BBD285C6EC9702A4E248B150BF02C2F7BFD3F266B06AAEA5500EB9BD4C890489A2F7CCA13979435539C6BBC5E815F970E75715564EF161CD290BC27160244E4A607B1D1BC379FE40AB78C358F931FE5F6F964CA2DF4688B73DF545212F628DFFFEBDFAE669B6FB8DF4B66E50BE7D1A97FEB1519B68316D63FB49E91B2122983649676ECFC6C71961C9778C1A1E0950F285223F56996B347596369909727CBFD67533694994AACB19D85C1D8DB8D2E58BE3072B15AA, 
    //udf1=null, udf2=null, udf3=null, udf4=null, udf5=null]

    this.transinfo.setAmt(null);
    this.transinfo.setAuth(null);
    this.transinfo.setAuthRespCode(null);
    this.transinfo.setAvr(null);
    this.transinfo.setKmsid(null);
    this.transinfo.setPaymentid('100201935223203736');
    this.transinfo.setPostdate(null);
    this.transinfo.setRef(null);
    this.transinfo.setResult(null);
    this.transinfo.setTrackid('DCP-USMAN4121575296162019-12-18081814285');
    this.transinfo.setTrandata('DDAFE509172BE35EB9A6D7B96E7C5CF22A0B537FEE4B48AF77D161F70AC41DD80B174DB9620EF0E344F8AA4D3BB446018DB4E25D74B1E87C0DCE7CC40F809125D0C63490C431717A9BFB504E1A7D9D5B3F658232FC5A0DC4732E70BBD285C6EC9702A4E248B150BF02C2F7BFD3F266B06AAEA5500EB9BD4C890489A2F7CCA13979435539C6BBC5E815F970E75715564EF161CD290BC27160244E4A607B1D1BC379FE40AB78C358F931FE5F6F964CA2DF4688B73DF545212F628DFFFEBDFAE669B6FB8DF4B66E50BE7D1A97FEB1519B68316D63FB49E91B2122983649676ECFC6C71961C9778C1A1E0950F285223F56996B347596369909727CBFD67533694994AACB19D85C1D8DB8D2E58BE3072B15AA');
    this.transinfo.setUdf1(null);
    this.transinfo.setUdf2(null);
    this.transinfo.setUdf3(null);
    this.transinfo.setUdf4(null);
    this.transinfo.setUdf5(null);
    console.log('this.transinfo:',this.transinfo);
    this.getKnetTransferResponse(this.transinfo);
  }

  getKnetTransferResponse(transinfo: Transferinfo){
    //console.log('getKnetTransferReponse',transinfo);
    this.api.getKnetTransferResponse(transinfo)
    .subscribe( resp=> {
      console.log('resp--->',resp);
      // if(resp['status']['success']){
      //   console.log('message:',resp['response']['message']);
      //   var data = resp['response']['message'];
      //   console.log('kneturl:',data.knetPaymentUrl);
      //   window.open(data.knetPaymentUrl)
      // }else{
      //   console.log('payment not succcess..');
      //   alert('payment not succcess....');
      // }
    }, error => {
      console.log("KnetResponseComponent Error-->", error);
    });
  }


}
