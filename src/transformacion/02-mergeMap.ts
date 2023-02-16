import { of, interval, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');

/**
 *  
 *  mergeMap recibe un valor y retorna un nuevo obsevable y
 *  no tiene limites de subscripciones internas y todas pueden
 *  estar activas simultaneamente
 * 
 *  lo que regresa al subscribe es 
 *  el valor producto de la subscripcion interna
 * 
 */


letras$
    .pipe(
        mergeMap( (letra) => interval(1000).pipe(
            map(i => letra + i),
            take(10)
        ))
    )
    // .subscribe({
    //     next: val => console.log('next: ', val),
    //     complete: () => console.log('complete')
    // })

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
    .pipe(
        mergeMap(() => interval$.pipe(
            takeUntil(mouseup$)
        ))
    )
    .subscribe(console.log);