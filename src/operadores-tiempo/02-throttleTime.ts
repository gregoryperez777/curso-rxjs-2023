import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators'; 

const click$ = fromEvent(document, 'click');

/**
 * 
 * emite el valor y luego espera el tiempo 
 */


click$
    .pipe(
        throttleTime(3000)
    )
    //.subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(document, 'keyup');

input$
    .pipe(
        throttleTime(400, asyncScheduler, {
            leading: false,
            trailing: true
        }),
        pluck('target', 'value'),
        distinctUntilChanged()
    )
    .subscribe(console.log)