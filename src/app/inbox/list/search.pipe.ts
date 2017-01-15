import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], search: string): any {
    return search ?
      items.filter(item => ~JSON.stringify(item).toLowerCase()
        .indexOf(search.toLowerCase()))
      : items;
  }

}