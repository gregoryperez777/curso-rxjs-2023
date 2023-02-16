import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/**
 * exhaustMap recibe N valores por cada uno genera
 * un nuevo observable al cual se subscribe con la 
 * diferencia que si existe un observable que aun 
 * no se ha completado y llega un nuevo valor
 * el mismo es ignorado y no es hasta que se completa
 * el observable actual que admite un nuevo valor
 * 
 */

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe(console.log)