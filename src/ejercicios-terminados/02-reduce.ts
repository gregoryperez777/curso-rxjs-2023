import { from } from 'rxjs';
import { tap, filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * es NaN cuando se convierte en un número
 * 
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{
// como yo lo hice
//   const total = (acumulado: number, actual: number) => {
//     return acumulado + actual;
//   }

//   const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

//   from(datos).pipe(
//     filter<any>(value => typeof value === 'number'),
//     reduce<number, number>(total, 0)    

//   ).subscribe( console.log ) // La salida debe de ser 32

// como el profe lo hizo 

  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    filter<any>(value => !isNaN(value)),
    reduce<number, number>((acc, curr) => acc + curr, 0)    
  ).subscribe( console.log ) // La salida debe de ser 32

})();