import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500); 
const click$ = fromEvent(document, 'click');

/**
 *  sample no permite emitir valor hasta que ocurra otro
 *  evento y una vez ocurre ese evento emite el ultimo valor
 *  del flujo de valores si el flujo de valores no se emitio 
 *  nada ps no retorna nada
*/

interval$.pipe(
    sample(click$)
).subscribe(console.log)
