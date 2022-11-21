import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, pipe, tap, catchError } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major + ' RxJs Catching Errors in Angular';

  ngOnInit() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(
        map((i) => {
          // returns the number until it hits 4
          if (i === 4) {
            throw 'Error!';
          }
          return i;
        }),
        /* catches the error and THEN COMPLETES using the
         * subscription from the 'of operator, otherwise, 
         * it would just error and not unsubscribe or complete */
        catchError((err) => of('four'))
      )
      .subscribe({
        // (⊙＿⊙') --> Stops processing at 4
        next: (x) => console.log(x),
        error: (err) => console.log(err),
      });

    // from([1, 2, 3, 4, 5]).subscribe((item) => {
    //   console.log(item * 10);
    // });

    // from([6, 7, 8]).subscribe({
    //   next: (item) => console.log(`resulting item .. ${item}`),
    //   error: (err) => console.error(`error occurered ${err}`),
    //   complete: () => console.log(`complete`),
    // });
  }
}
