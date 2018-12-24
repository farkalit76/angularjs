import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private myData:DataService ){
      this.route.params.subscribe(res => console.log('id:'+res.id));
   }

  ngOnInit() {
    this.myData.goal.subscribe(res => this.goals = res );
  }

  sendMeHome()
  {
    this.router.navigate(['']); //default homeComponent path
  }
}
