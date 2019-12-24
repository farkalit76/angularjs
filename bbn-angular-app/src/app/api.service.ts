import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Smartphone } from './smartphone';
import { Observable } from 'rxjs';
import { Payinfo } from './knet-pay/payinfo';
import { Transferinfo } from './knet-response/transferinfo';

const localUrl = 'assets/data/smartphone.json';
const transferBaseURL = 'http://10.7.91.40:8093/transfer-mgmt';
//const payUrl = 'http://10.7.91.40:8093/transfer-mgmt/knet/pay?env=DCP-USMAN&l=en&t=OHRUTDY5WStFQS91Z2s5dVVVOXMvQT09';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS'
    })
  }

  getSmartphone(): Observable<HttpResponse<Smartphone[]>> {
    return this.http.get<Smartphone[]>(
      localUrl, { observe: 'response' });
  }

  // getSmartphone() {
  //   return this.http.get(localUrl);
  // }

  getKnetPaymentInfo(env:string, lang:string, token:string){
    const payUrl = transferBaseURL+'/knet/pay?env='+env+'&l='+lang+'&t='+token;
    console.log('payUrl:'+payUrl);
    return this.http.get(payUrl);
  }

  getKnetPayInfo(env:string, lang:string, token:string): Observable<HttpResponse<Payinfo>>{
    const payUrl = transferBaseURL+'/knet/pay?env='+env+'&l='+lang+'&t='+token;
    console.log('payUrl:'+payUrl);
    return this.http.get<Payinfo>(payUrl, {observe: 'response'});
  }

  getKnetConfirm(payinfo:Payinfo){
    var payUrl = transferBaseURL+"/knet/confirm";
    console.log('payUrl:'+payUrl);
    return this.http.post(payUrl, JSON.stringify(payinfo), this.httpOptions);
  }

  getKnetHistory(){
    return this.http.get(transferBaseURL+"/knet/history");
  }

  getKnetTransferResponse(transinfo: Transferinfo){   
    console.log(' transinfo:',transinfo);
    //var payUrl = transferBaseURL+"/knet/responses";
    var payUrl = transferBaseURL+"/knet/response";
    //var payUrl = transferBaseURL+'/knet/response?amt=&auth=&authRespCode=&avr=&kmsid=&paymentid='+paymentid+'&postdate=&ref=&result=&trackid='+trackid+'&trandata='+trandata+'&udf1=&udf2=&udf3=&udf4=&udf5=';
    console.log('payUrl:'+payUrl);
    this.httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Content-Type':'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS'
      })
    }
    //return this.http.post(payUrl, JSON.stringify(transinfo), this.httpOptions);
    return this.http.post(payUrl, transinfo, this.httpOptions);
  }

  errorKnetTransferResponse(){   
    console.log(' errorKnetTransferResponse:');
    var payUrl = transferBaseURL+"/knet/error";
    console.log('payUrl:'+payUrl);
    return this.http.post(payUrl, null, this.httpOptions);
  }

  // getKnetTransferResponse(payid:string, trid:string, tranid:string){
  //   //console.log('api transinfo:', transinfo);
  //   var formData: any = new FormData();
  //   formData.append('amt', '11.50')
  //   formData.append('auth', '')
  //   formData.append('authRespCode', '')
  //   formData.append('avr', '')
  //   formData.append('kmsid', '')
  //   formData.append('postdate', '')
  //   formData.append('ref', '')
  //   formData.append('result', '')
  //   formData.append('udf1', '')
  //   formData.append('udf2', '')
  //   formData.append('udf3', '')
  //   formData.append('udf4', '')
  //   formData.append('udf5', '')

  //   const paymentid = payid;//'DCP-100201934617964145';
  //   const trackid = trid;//'DCP-USMAN4023751609422019-12-12103013277';
  //   const trandata = tranid; //'DDAFE509172BE35EB9A6D7B96E7C5CF2DAFC9D2BD38DD9100B00828F269CFE4488DA755765E26C756BB5FB97D10D1A05C1AFC7C1DB904FE2C705580ED7394DFC5DDC84A824CF51412DE591DF7D85FF35FA8FA3C738855D4C96681EAEEB9D0E5C0D22E94E353E96C221A274257A577CCB8621E8111EB003C1B840B95C63B446237EEA30F4D379F77BF298A158460048697EEEA1FEAFB69DC2BB7AE25E16A1A05B45BE7C113866449CCC629CECFFA6E27E4A7E7242DF55733378F1268AE2B4C0304327B74A365A762F672A409C09638BB1E07728630595D72F576B23E361BE76B55E7680E3FE1AC48B9E55A069CF7B1EB3C6C1C1DEAA1940E76AE6B4B2D4AEE1906AEC7FCE3AA31A37BC22960D6C6F7A46';
  //   formData.append('paymentid', paymentid)
  //   formData.append('trackid', trackid)
  //   formData.append('trandata', trandata)
  //   console.log('api paymentid:'+paymentid +'--trackid:'+trackid+'--trandata:'+trandata);
  //   //var payUrl = transferBaseURL+"/knet/response";
  //   var payUrl = transferBaseURL+'/knet/response?amt=&auth=&authRespCode=&avr=&kmsid=&paymentid='+paymentid+'&postdate=&ref=&result=&trackid='+trackid+'&trandata='+trandata+'&udf1=&udf2=&udf3=&udf4=&udf5=';
  //   console.log('payUrl:'+payUrl);
  //   //return this.http.post(payUrl, JSON.stringify(transinfo), this.httpOptions);
  //   return this.http.post(payUrl, null, this.httpOptions);
  // }

  
}
