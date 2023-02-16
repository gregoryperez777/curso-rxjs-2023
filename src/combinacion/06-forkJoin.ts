import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

/**
 *  Recibe N observable finitos
 * 
 *  los ejecuta en orden y hasta que el ultimo observable 
 *  se complete no retorna el resultado
 * 
 *  que seria los ultimo valores de cada observable 
 */


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of ('a','b','c').pipe(delay(3500));

// respuesta en forma de array
// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(console.log)

// obtener el valor segun observable
// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe(resp => {
//     console.log('numeros: ', resp[0])
//     console.log('intervalos: ', resp[1])
//     console.log('letras: ', resp[2])
// })

// respuesta en forma de objeto
// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe(console.log)

// respuesta en forma de objeto con nombres personalizados
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe(console.log)
