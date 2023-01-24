import { of, range, asyncScheduler } from 'rxjs';

/**
 *  Como ya sabemos la función of imprime una seria de valores 
 *  que nosotros le pasamos. El problema con esto es que pasa si
 *  queremos imprimir un 1.000.000 de elementos?
 * 
 *  Para esto existe la función range la cual recibe 2 parametros
 *  el primero es el punto inicial y el segundo se refiere a 
 *  cuantos elementos consecutivos se debe imprimir a partir
 *  del punto inicial
 * 
 *  range por defecto es una función sincrona pero puede transformarse
 *  en una función asincrona pasando como tercer parametro de tipo asyncScheduler
 */

// const src$ = of(1,2,3,4,5,6);
const src$ = range(-1,9, asyncScheduler);

console.log('Inicio');
src$.subscribe( console.log );
console.log('Fin');