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
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
  });

  ngOnInit(): void {
    console.log('Subscription 1 starts');
    this.observable$.subscribe((value) =>
      console.log('Subscription 1:', value)
    );
  }
}
