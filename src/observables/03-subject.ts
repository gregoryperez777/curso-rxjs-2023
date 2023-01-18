
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1000);


    /*
    *   Esta funcion (en este caso para destruir el intervalo) se va 
    *   a llamar cuando se llame al metodo unsubscription de la suscripcion 
    */
    return () => {
        clearInterval(intervalID);
        console.log('intervalo destruido')
    }; 
});

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));


/*
* caracteristicas de Subject
*   0- Es un tipo especial de Observable
*   1- Casteo múltiple
*   2- Tambien es un Observer
*   3- Se puede manejar Next, error y complete    
*/
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


/*
*   Notas:
*   
*   Cuando la data es producida por el mismo observable se dice que es
*   Cold Observable 
*
*   Cuando la data es producida FUERA del obsevable es llamada
*   Hot Obsevable
*/

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)

