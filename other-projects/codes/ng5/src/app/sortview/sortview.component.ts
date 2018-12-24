import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sort, MatSort, MatSortable, MatTableDataSource }  from '@angular/material';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { NgxPaginationModule } from 'ngx-pagination';
import { ISortedData} from './sorteddata';


@Component({
  selector: 'app-sortview',
  templateUrl: './sortview.component.html',
  styleUrls: ['./sortview.component.css']
})

  export class SortviewComponent implements OnInit {

  sortedData: any[];

  constructor() {
  }

  ngOnInit() {
    this.sortedData = this.desserts.slice();
  }

  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4',time: '2017-05-10T08:34:32'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4',time: '2017-11-07T08:34:32'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6',time: '2018-12-17T08:34:32'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4',time: '2017-09-20T08:34:32'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4',time: '2018-05-30T08:34:32'},
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4',time: '2017-11-05T08:34:32'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4',time: '2017-11-01T08:34:32'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6',time: '2015-07-11T08:34:32'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4',time: '2018-04-18T08:34:32'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4',time: '2017-11-22T08:34:32'},
  ];
 
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    //console.log("sorting data:"+data.toString());
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'calories': return this.compare(+a.calories, +b.calories, isAsc);
        case 'fat': return this.compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return this.compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return this.compare(+a.protein, +b.protein, isAsc); 
        case 'time': return this.compare(new Date(a.time), new Date(b.time), isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
