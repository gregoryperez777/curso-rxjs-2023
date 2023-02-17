/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */

import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';

(() =>{
    
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

    // como yo lo hice
    // of(...nombres)
    //     .pipe(
    //         map<string, string>(nombre => capitalizar(nombre))
    //     )
    //     .subscribe(console.log)
  

    // como lo resolvio el profe
    
    from(nombres)
        .pipe(
            map(capitalizar)
        )
        .subscribe(console.log)
  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //   console.log( capitalizar(nombre) )
    // }
  
  })();
  
  