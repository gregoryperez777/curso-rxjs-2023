import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // takeWhile( ({ y }) => y <= 150)
        
        
        // true al final es para que nos devuelva el valor 
        // que rompio la condicion
        takeWhile( ({ y }) => y <= 150, true)
    )    
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });