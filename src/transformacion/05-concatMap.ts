import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/**
 * concatMap recibe N valores por cada uno genera
 * un nuevo observable al cual se subscribe a 
 * diferencia de mergeMap o switchMap que mantienen 
 * todas las N subscripciones o la ultima 
 * 
 * concatMap las encola una vez finalizada la anterior
 * continua con la siguiente
 * 
 */

click$.pipe(
    concatMap( () => interval$ )
)
.subscribe(console.log)