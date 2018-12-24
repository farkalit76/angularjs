import {  NgModule,  Component,  Pipe,  OnInit} from '@angular/core';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {IBook } from "./books";
import {IEmployee } from "./employee";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  myData: any[] = [];
  empForm: FormGroup;
  empId: FormControl;
  empName: FormControl;
  email: FormControl;
  phone: FormControl;
  address: FormControl;
  salary: FormControl;

  books: IBook[];
  employees: IEmployee[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.createFormControls();
    this.creatForm();
  }

  createFormControls()
  {
    this.empId = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.empName  = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.phone = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern("[0-9]*")
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.salary = new FormControl('', [Validators.required,Validators.pattern("[0-9]*")]);
  }

  creatForm()
  {
    this.empForm = new FormGroup({
        
        empId: this.empId,
        empName: this.empName,
        email: this.email,
        phone:this.phone,
        address: this.address,
        salary: this.salary
    });
  }

  getEmployees(){
    console.log("getEmployees called.");
    var bookUrl='http://localhost:8091/fu/sboot/cssd/employee/list';

    this.http.post( bookUrl, {},{} ).subscribe(
        (data:any) =>{
          console.log(data);
          //this.employees = data;
          //return <IBook[]>data;
          this.employees=data.response;
          //this.myData = data.response;
        }
      );   
    // this.http.post(bookUrl,{},{})
    // .map((response: Response) => {
    //    console.log(response);
    //     return <IEmployee[]>response.json();
    // });
  //.catch(this.);
      
    // handleError(error: Response) {
    //     return Observable.throw(error.statusText);
    // }
  }
}
