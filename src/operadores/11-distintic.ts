import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of<number|string>(1,1,1,3,3,2,2,4,4,5,3,1);

/** 
 *  distintic: dado una serie de valores deja pasar
 *  solo aquellos no hayan sido emitidos antes
 * 
 *  distintic utiliza el operador === de javascript 
 *  es decir si tenemos 2 elementos "iguales" pero de 
 *  distinto tipos dejaria pasar estos 2 elementos 
 */

numeros$
    .pipe(
        distinct()
    )
    .subscribe(console.log)


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes)
    .pipe(
        distinct<Personaje, string>( p => p.nombre)
    )
    .subscribe(console.log)