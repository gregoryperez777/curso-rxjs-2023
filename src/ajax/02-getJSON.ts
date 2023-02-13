import { ajax } from 'rxjs/ajax';

// es una api de prueba y el delay/1 hace que se demore 1 seg
const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'aplicaction/json',
    'mi-token': 'abc123'
});

obs$.subscribe( data => console.log('data', data) )