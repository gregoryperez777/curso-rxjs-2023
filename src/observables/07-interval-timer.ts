import { interval, timer } from 'rxjs';


/***
 *  Interval y Timer son observable que nos permiten trabajar 
 *  con intervalos de tiempo
 * 
 *  Interval recibe como parametro un tiempo en ms y cada tantos 
 *  ms emitira un valor que comienza en 0 hasta el oo+ cada uno de
 *  los valores emitidos entra al stack de callback de javascript
 * 
 *  Timer recibe como parametro un tiempo en ms cuando llegue ese
 *  tiempo emitira un valor y se completara dicho observable y no
 *  se emitira mas valores
 *  
 */
const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}


/**
 * Timer es super util para desarrollar notificaciones 
 * ya que podemos fijar una fecha con hh:mm:ss para 
 * ejecutar esta accion
 * */ 

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);

// Esto es exactamente igual que hicieramos timer(0)
// esto no lo ejecuta inmediatamente
// se encola en el stack de callback y es ejecutado 
// tan pronto como se pueda
// const timer$ = timer();


const timer$ = timer();

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');