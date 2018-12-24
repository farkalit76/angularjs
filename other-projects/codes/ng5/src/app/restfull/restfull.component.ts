import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Component({
  selector: 'app-restfull',
  templateUrl: './restfull.component.html',
  styleUrls: ['./restfull.component.css']
})

export class RestfullComponent implements OnInit {

  id:string='';
  title:string='';
  idFound: boolean;
  titleFound:boolean;

  constructor(private httpClient: HttpClient) {

   }

  ngOnInit() {
  }

  onIdKeyUp(event: any)
  {
    //console.log(event.target.value);
    this.id=event.target.value;
    this.idFound= false;    
    this.titleFound = false;
  }

  onTitleKeyUp(event: any)
  {
    //console.log(event.target.value);
    this.title= event.target.value;
  }

  getProfileById()
  {
    //console.log(this.id);
    this.httpClient.get(`https://my-json-server.typicode.com/typicode/demo/posts/?id=${this.id}`)
    .subscribe(
      (data:any[]) =>{
        //console.log(data)
        if(data.length){
          this.title = data[0].title;
          this.titleFound = true;
        }
      }
    )

  }
  getProfileByTitle()
  {
    //console.log(this.title);
    this.httpClient.get(`https://my-json-server.typicode.com/typicode/demo/posts/?title=${this.title}`)
    .subscribe(
      (data:any[]) =>{
        //console.log(data)
        if(data.length){
          this.id = data[0].id;
          this.idFound = true;
        }
      }
    )
  }

  postProfile()
  {
    //console.log(this.title);
    this.httpClient.post(`https://my-json-server.typicode.com/typicode/demo/posts/`,{
      id: '5',
      title: 'Post Title 5'
    })
    .subscribe(
      (data:any) =>{
        console.log(data)
      }
    )
  }
}
