import { Component, Injectable } from '@angular/core';
import { SearchService } from './search.service';

@Injectable()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    search: string;

    constructor(private searchService: SearchService) { }

    onSearch(value) {
        this.searchService.getSubject().next(value);
    }
}