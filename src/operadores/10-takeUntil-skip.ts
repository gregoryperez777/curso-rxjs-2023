import { interval, fromEvent} from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';


const boton = document.createElement('button');

boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = 
    fromEvent(boton, 'click')
        .pipe(
            tap(() => console.log('Tap antes de skip')),
            skip(1),
            tap(() => console.log('Tap despues de skip'))
        )

// takeUntil Nos permite emitir valores hasta que otro obsevable
// emita su primer valor

// skip Nos permite saltarnos N emisiones de un observable y a partir 
// de n+1 comenzara a emitir
counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complet')
    })