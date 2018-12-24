
import {  NgModule,  Component,  Pipe,  OnInit} from '@angular/core';
import {  ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  myData: any[] = [];
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  zip: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'Urdu',
    'Arabic',
  ];

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.createFormControls();
    this.creatForm();
    
  }

  createFormControls()
  {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.lastName  = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.zip = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("[0-9]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  creatForm()
  {
    this.myForm = new FormGroup({
        name: new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
        }),
        email: this.email,
        zip:this.zip,
        password: this.password,
        language: this.language
    });
  }

  getBook(){
    console.log("doGetEmp called.");
    var bookUrl='http://localhost:8091/fu/sboot/cssd/book/list';

    this.http.post( bookUrl, {},{} ).subscribe(
        (data:any) =>{
          console.log(data);
          //this.employees = data;
          //return <IBook[]>data;
          //this.books=data.response;
          this.myData = data.response;
        }
      );   
    // this.http.post(bookUrl,{},{})
    // .map((response: Response) => {
    //    console.log(response);
    //     return <IEmployee[]>response.json();
    // });
  //.catch(this.handleError);
      
    // handleError(error: Response) {
    //     return Observable.throw(error.statusText);
    // }
  }
}
