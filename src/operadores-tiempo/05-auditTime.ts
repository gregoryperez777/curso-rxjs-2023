import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

 const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * auditTime emitir el ultimo valor que ha sido emitido por el 
 * observable por un periodo de tiempo determinado
 */

 click$
    .pipe(
        map(({ x }) => x),
        tap(val => console.log('tap', val)),
        auditTime(2000)
    )
    .subscribe(console.log);