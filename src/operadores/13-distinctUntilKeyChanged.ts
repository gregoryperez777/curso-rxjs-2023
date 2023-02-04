import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

/** 
 *  distinctUntilKeyChanged: dado una serie de objectos deja pasar
 *  solo aquellos cuya valor de propiedad especificada anterior no sea igual al actual
 * 
 *  distinctUntilKeyChanged utiliza el operador === de javascript 
 *  es decir si tenemos 2 elementos "iguales" pero de 
 *  distinto tipos dejaria pasar estos 2 elementos 
 */

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
        // distinctUntilKeyChanged solo puedes pasarle 
        // nombres de la propiedad exactamente como esta 
        // en el objeto
        distinctUntilKeyChanged<Personaje>('nombre')
    )
    .subscribe(console.log)