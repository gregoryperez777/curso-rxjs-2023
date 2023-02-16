import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

/**
 *  Merge recibe N observables y emite valores
 *  de cualquiera de ellos segun se vayan disparando 
 *
 *  regresa un observable
 */

merge(
    keyup$.pipe(pluck('type')), 
    click$.pipe(pluck('type'))
)
    .subscribe(console.log);