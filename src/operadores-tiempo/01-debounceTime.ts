import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators'; 

const click$ = fromEvent(document, 'click');

/**
 * debounceTime cuenta las milesimas de segundo que han pasado desde
 * la ultima emision y esas milesimas de segundos son mayor al parametro 
 * que tenemos entonces emitira el valor
 * 
 * debounceTime nos permite restringir la cantidad de emisiones que 
 * nuestros observables iniciales emiten 
 * 
 * En otras palabras debounceTime nos permite controlar observable que 
 * emiten muy rapidamente una gran cantidad emisiones  
 * 
 * espera el tiempo y luego emite el valor
 */


click$
    .pipe(
        debounceTime(3000)
    )
    .subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(document, 'keyup');

input$
    .pipe(
        debounceTime(1000),
        pluck('target', 'value'),
        distinctUntilChanged()
    )
    .subscribe(console.log)