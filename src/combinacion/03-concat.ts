import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs';

const interval$ = interval(1000);

/**
 *  concatena los observable y los resuelve
 *  en el orden como se le pasa
 */

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1,2,3,4],
    of(1)
).subscribe(console.log)