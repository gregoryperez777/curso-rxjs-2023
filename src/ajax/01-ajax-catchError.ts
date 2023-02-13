import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';


const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message)
    return of([]);
}

const fetchPromesa = fetch(url);

// normal 
// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.log('error en usuarios', err))

// validando error
// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data', data))
//     .catch(err => console.warn('error en usuarios', err))

ajax(url)
    .pipe(
        // map(resp => resp.response),
        pluck('response'),
        catchError(atrapaError)
    )
    .subscribe(user => console.log('usuarios:', user))