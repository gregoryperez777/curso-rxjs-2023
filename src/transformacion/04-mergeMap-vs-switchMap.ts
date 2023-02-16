import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);


/**
 *  mergeMap vs switchMap
 * 
 *  mergeMap mantiene N subscripciones internas activas simultaneamente
 *  switchMap mantiene solo una subscripcion interna activa
 * 
*/

click$.pipe(
    // mergeMap( () => interval$)
    switchMap(() => interval$)
).subscribe(console.log)