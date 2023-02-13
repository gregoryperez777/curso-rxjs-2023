import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


/**
 *  ajax vs getJSON
 * 
 *  getJson tiene la informacion propiamente de la respuest
 *  ajax tiene informacion mas amplia como la response, request, xhr etc
 */

// es una api de prueba y el delay/1 hace que se demore 1 seg
const url = 'https://httpbi12332n.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error:', resp.message);

    return of({
        ok: false,
        usuario: []
    }) 
}
// una forma de manejar el error
// const obs$ = ajax.getJSON(url).pipe( catchError(manejaError) );
// const obs2$ = ajax(url).pipe( catchError(manejaError) );

// otra forma de manejar el error
// es utilizando un observer dentro del subscribe (next, error, complete)
// eso dispararia el console.warn pero no se 
// completaria el observable

// en cambio al pasarle catchError y dentro su callback
// de manejo de error que retorna un nuevo observable 
// disparia el error y se completaria observable 

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)

// obs2$.subscribe( data => console.log('ajax', data) )
obs$
    .pipe(
        catchError(manejaError)
    )
    .subscribe({
        next: val => console.log('next:', val),
        error: err => console.warn('error en subs:', err),
        complete: () => console.log('complete')
    })