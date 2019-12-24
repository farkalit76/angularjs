import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knet-history',
  templateUrl: './knet-history.component.html',
  styleUrls: ['./knet-history.component.css']
})
export class KnetHistoryComponent implements OnInit {

  knethistory: any = [];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.getKnetHistory();
  }

  getKnetHistory() {
    this.api.getKnetHistory()
     .subscribe(data => {
       console.log(data);
       for (const d of (data['transferList'] as any)) {
         this.knethistory.push({
           cif:d.cif,
           custid:d.custId,
           payid: d.bbynPaymentId,
           trackid: d.bbynTrackId,
           stage:d.stage,
           status:d.status,
           initdate:d.knetInitDate
         });
       }
       console.log(this.knethistory);
     });
   }
   backHome(){
    this.router.navigate(['/home']);
  }
}
