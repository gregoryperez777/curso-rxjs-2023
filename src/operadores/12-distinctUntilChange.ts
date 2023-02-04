import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number|string>(1,'1',1,3,3,2,2,4,4,5,3,1,'1');

/** 
 *  distinctUntilChanged: dado una serie de valores deja pasar
 *  solo aquellos cuyo elemento anterior no sea igual al actual
 * 
 *  distinctUntilChanged utiliza el operador === de javascript 
 *  es decir si tenemos 2 elementos "iguales" pero de 
 *  distinto tipos dejaria pasar estos 2 elementos 
 */

numeros$
    .pipe(
        distinctUntilChanged()
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
        nombre: 'Megaman'
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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes)
    .pipe(
        distinctUntilChanged<Personaje>( (ant, act) => ant.nombre === act.nombre )
    )
    .subscribe(console.log)