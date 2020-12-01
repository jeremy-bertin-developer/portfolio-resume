import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor() {}

  getDatas(model: any): Observable<any> {
    return new Observable(observer => {
      observer.next(model);
      observer.complete();
    });
  }
}
