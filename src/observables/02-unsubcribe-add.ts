
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subscribe => {
    
    let second = 0;

    const interval = setInterval(() => {
        second++;
        subscribe.next(second);
    }, 1000);

    setTimeout(() => {
        subscribe.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {

    subs1.unsubscribe();

    // Esto es valido
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
}, 6000);

// complete !== unsubscribe
// complete basicamente ejecuta el return y termina el flujo 