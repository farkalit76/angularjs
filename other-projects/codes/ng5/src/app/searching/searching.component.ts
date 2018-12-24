import { Component, OnInit } from '@angular/core';

import { Teacher } from '../teacher';
import { SearchByNamePipe } from '../search-by-name.pipe';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  teacherList: any[];
  constructor() { }

  ngOnInit() {
    this.teacherList = this.TEACHERS.slice();
  }

  ////////////////////////////////////////
  // Teacher Search/Filter data handling
  ////////////////////////////////////////
  title = 'Data Search';
  id = 1;
  teacher = new Teacher(0, '', '', '', 0);
 
  TEACHERS = [
    new Teacher(1, 'Adarsh', 'Physics', 'Delhi', 87645623410),
    new Teacher(2, 'Usman', 'Chemistry', 'Mumbai', 87645623414),
    new Teacher(3, 'Alok', 'Mathematics', 'Dubai', 90645623414)
  ];
  addTeacher() {
    console.log("before:"+this.TEACHERS.length);
    this.id += 3;
    const teacherEntry = new Teacher(this.id, this.teacher.name, this.teacher.subject, this.teacher.address, this.teacher.mobile);
    this.TEACHERS.push(teacherEntry);
    this.resetTeacher();
    console.log("after:"+this.TEACHERS.length);
    this.reloadData();
  }
  deleteTeacher(id: number) {
     console.log("id:"+id)
    //for (let i = this.TEACHERS.length - 1; i &amp;amp;amp;gt;= 0; i--) {
      for (let i = this.TEACHERS.length - 1; i >= 0; i--) {
      if (this.TEACHERS[i].id === id) {
        this.TEACHERS.splice(i, 1);
        console.log("data deleted....");
      }
    }
  }
  resetTeacher() {
    this.teacher.name = '';
    this.teacher.subject = '';
    this.teacher.address = '';
    this.teacher.mobile = 0;
  }

  reloadData()
  {
    this.TEACHERS;
  }
}
