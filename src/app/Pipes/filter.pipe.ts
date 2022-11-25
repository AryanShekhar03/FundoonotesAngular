import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(value: any, searchNote: any){
  console.log(searchNote)
  if ( searchNote ===''){
    return value;
  }
 
  const Message = [];
  for(const notes of value){
    if(notes.title.toLowerCase().includes(searchNote.toLowerCase()) || notes.body.toLowerCase().includes(searchNote.toLowerCase())){
      Message.push(notes)
    }
  }
  return Message;
}

}
