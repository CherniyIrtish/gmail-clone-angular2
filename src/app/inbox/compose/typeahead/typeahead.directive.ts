import { Directive, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/src/Observable';
import { CONFIG } from './config';
import 'rxjs/src/add/observable/fromEvent';
import { TypeaheadService } from './typeahead.service';

@Directive({
  selector: '[typeahead]',
  providers: [TypeaheadService]
})
export class TypeaheadDirective {
  private list: string[];
  el: HTMLElement  = this.elementRef.nativeElement;
  datalist: HTMLElement;

  constructor(private elementRef: ElementRef, private typeaheadService: TypeaheadService) { }

  ngOnInit() {
    this.createEmptyDatalist();
    this.getList();

    Observable.fromEvent(this.el, 'input')
      .subscribe((event) => {
        let inputValue = event['target'].value;

        if (inputValue.length >= 3) {
          let filteredlist = this.list.filter(item => ~item.indexOf(inputValue));

          this.updateDatalist(filteredlist);
        }
      });
  }

  createEmptyDatalist(): void {
    this.el.setAttribute('list', 'typeahead');
    this.datalist = document.createElement('datalist');
    this.datalist.setAttribute('id', 'typeahead');
    this.el.parentNode.insertBefore(this.datalist, this.el.nextSibling);
  }

  updateDatalist(list: string[]): void {
    this.datalist.innerHTML = '';

    list.forEach((item) => {
      let option = document.createElement('option');
      option.value = item;
      this.datalist.appendChild(option);
    });
  }

  getList(): void {
    this.typeaheadService.getList().subscribe(list => {
      this.list = list;
    });
  }

}