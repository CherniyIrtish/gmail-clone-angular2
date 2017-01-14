import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class SearchPipe implements PipeTransform {

  transform(hotels: any[], search: string): any {
    return search ?
      hotels.filter(hotel => ~JSON.stringify(hotel).toLowerCase()
        .indexOf(search.toLowerCase()))
      : hotels;
  }

}