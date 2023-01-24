import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
*/

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

/**
 * Nota cuando no sepamos el tipo de evento para pasarselo 
 * al observable solo tenemos que pasarle un observer
 * y en la consola se vera el tipo
 */

src1$.subscribe( ({ x,y }) => {
    console.log(x,y)
});

src2$.subscribe( evento => {
    console.log(evento.key);
});