import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


/**
 *  startWith empieza con 
 *  termina con
 * 
 *  dado un observable este empezara y terminara
 *  con lo que indique startWith y endWith
 */

const numero$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
);

numero$.subscribe(console.log)