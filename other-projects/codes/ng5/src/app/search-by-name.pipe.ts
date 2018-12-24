import { Pipe, PipeTransform } from '@angular/core';
import { Teacher } from './teacher';
 
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(teachers: Teacher[], searchText: string) {
    //console.log("|"+searchText+"|");
    if( searchText == undefined ){ //|| searchText == null || searchText == ' '
      searchText ='';
    }
    //return teachers.filter(teacher =&amp;gt; teacher.name.indexOf(searchText) !== -1);
    return teachers.filter(teacher => teacher.name.indexOf(searchText) !== -1);
  }
}