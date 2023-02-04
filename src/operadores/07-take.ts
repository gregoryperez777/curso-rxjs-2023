import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of (1,2,3,4,5);

/**
 * operador take se utiliza para limitar las emiciones del 
 * observable
 * 
 * Example in this case we have five emitions but we only need three of that
 * then we use take operator for limited to three emisions
 */

numeros$
    .pipe(
        tap(t => console.log('tap', t)),
        take(3)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });