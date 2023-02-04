import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
 
interface Personajes {
    tipo: string;
    nombre: string;
}

range(1,10)
    .pipe(
        filter((val,i) => {
            console.log('index ->', i);
            return val % 2 === 1;
        })
    )
    //.subscribe(console.log);

const personajes: Personajes[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes)
    .pipe(
        filter(val => val.tipo === 'heroe')
    )
    .subscribe(console.log);

/**
 *  Nota importante los operadores pueden encadenarse 
 *  a traves de ',' pero es importante conocer el tipo de 
 *  dato que recibe y que retorna
 * 
 *  la data que retorna un operador es recibida por otro 
 *  operador en el caso que esten encadenado 
 */

const keyup$ = 
    fromEvent<KeyboardEvent>(document, 'keyup')
        .pipe(
            map( event => event.code ), // KeyboardEvent, string -> lo que recibe, lo que retorna
            filter( key => key === 'Enter')
        )

keyup$.subscribe(console.log);