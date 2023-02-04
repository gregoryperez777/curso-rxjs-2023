import { fromEvent } from 'rxjs';
import { tap, take, first, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * 
 * Operador first por si solo procesa la primera emision
 * y completa el observable
 * 
 * pero tambien se le puede pasar una condicion y detendra 
 * el observable cuando alguien lo cumpla por primera vez
 */

click$
    .pipe(
        tap<PointerEvent>(() => console.log('tap')),
        // map(event => ({ 
        //     clientY: event.clientY,
        //     clientX: event.clientX
        // })),
        map(({ clientX, clientY }) => ({ clientY, clientX})),
        first(event => event.clientY >= 150 )
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });