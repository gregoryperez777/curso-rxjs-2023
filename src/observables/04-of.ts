import { of } from 'rxjs';

/*
*   of es una funcion que nos permite crear observables 
*   en base a un listado de elementos
*
*   Emite los valores en secuencia uno por uno de manera sincrona 
*
*   al emitir el ultimo valor se completa el observable
*/

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5);
// const obs$ = of([1,2], {a: 1, b:2}, function() {}, true, Promise.resolve(true));

console.log('Inicio del obs$');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () =>  console.log('Terminamos la secuencia!!')
);
console.log('Fin del obs$');