import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-observables',
  templateUrl: './rxjs-observables.component.html',
  styleUrls: ['./rxjs-observables.component.scss'],
})
export class RxjsObservablesComponent implements OnInit {
  constructor() {}

  observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Shona');
    setTimeout(() => subscriber.next('Blake'), 2000);
    setTimeout(() => subscriber.next('Sasha'), 4000);
    setTimeout(() => subscriber.error(new Error('Failure')), 5000);

    return () => {
      console.log('Teardown');
    }
  });

  ngOnInit(): void {
  }
  
  clickObserver() {
    this.observable$.subscribe({
      next: value => console.log(value),
      error: err => console.log(err.message),
      complete: () => console.log('Completed')
    });
  }




}
