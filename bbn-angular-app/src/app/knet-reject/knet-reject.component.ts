import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knet-reject',
  templateUrl: './knet-reject.component.html',
  styleUrls: ['./knet-reject.component.css']
})
export class KnetRejectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backHome(){
    this.router.navigate(['/home']);
  }
}
