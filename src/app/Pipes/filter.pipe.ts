import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filterString :string) {
    if(value.length ===0 || filterString ===''){
    return value;
  }

  const notes =[];
  for (const childMessage of value){
    if (childMessage['title']=== filterString){
      notes.push(childMessage);
    }
  }
  return notes;
}

}
