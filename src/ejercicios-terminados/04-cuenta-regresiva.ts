import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    // asi lo hice yo
    // const inicio = 7;
    // const countdown$ = interval(700).pipe(
    //     take(8),
    //     map<number, number>(value => inicio - value)
    // );
    

    // // No tocar esta línea ==================
    // countdown$.subscribe( console.log ); // =
    // // ======================================

    // asi lo hizo el profe
    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        map( i => inicio - i),
        take(inicio + 1)
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();