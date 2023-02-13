import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

/***
 *  sampleTime nos permite obtener el ultimo valor emitido 
 *  en un periodo de tiempo
 */


/**
 * Nota es mas eficiente que el sampleTime este arriba
 * o de primero para mejorar el consumo de memoria 
 * ya que si lo ponemos de ultimo
 * cada vez que se genere un evento se activaria el map 
 * pero quedaria a la espera del sampleTime y estaria
 * consumiendo memoria 
*/

click$
    .pipe(
        sampleTime(2000),
        map(({ x , y }) => ({x, y}))
    )
    .subscribe(console.log);
