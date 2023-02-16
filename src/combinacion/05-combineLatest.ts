import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

/**
*  Merge recibe N observables y emite valores
*  de cualquiera de ellos segun se vayan disparando 
*
*  regresa un observable
*/

// combineLatest(
//     keyup$.pipe(pluck('type')), 
//     click$.pipe(pluck('type'))
// )
//     .subscribe(console.log);

/**
 *  Buscar en el curso la definicion del combineLatest
 */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) => 
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    )

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
)
    .subscribe(console.log)