import { Subject } from 'rxjs/Subject';

export class SearchService {
  subject: Subject<string> = new Subject();

  getSubject() {
    return this.subject;
  }
}