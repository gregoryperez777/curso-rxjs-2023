
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, tap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user';
import { GithubUsersResp } from '../interfaces/github-users';

// operadores de transformacion
// observable que internamente retornan observable

// unificar observable en una sola salida se conoce como 
// operadores de aplanamiento

// mergeAll
// cuando un operador retorna un observable
// mergeAll se subscribe a ese nuevo observable
// y emite esos nuevos valores y cuando se 
// complete tambien se va a completar

// Referencias

/**
 *  Nota lo importante en caunto a tipado al aplicar
 *  distintos operadores es el tipado del inicio y del final
 * 
 *  en este caso fromEvent y pluck (Line 43)
 */

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers

const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);

    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
        body.append(orderList)
    }
}

// streams 
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


/**
 * Aqui en la parte del mergeMap recibe N textos 
 * por cada uno genera una peticion Ajax con un nuevo obsevable
 * al cual se subscribe el mergeMap a cada uno
 * 
 * el problema es que si se hacen muchas peticiones github nos puede 
 * bloquear nuestra ip ademas de ser ineficiente 
 */

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    pluck<GithubUsersResp, GithubUser[]>('items')
)//.subscribe(mostrarUsuarios)

const url = 'https://httpbin.org/delay/1?arg=';

/**
 *  como mencionamos anteriormente mergeMap recibe N textos 
 *  por cada uno genera una peticion Ajax con un nuevo obsevable
 * 
 *  y esto puede ser muy poco optimo para este tipo de ejercicio
 *  ya que la ultima peticion seria la nos traeria la data 
 *  que nos interesa 
 * 
 *  Por eso usamos switchMap que recibe N textos 
 *  por cada uno genera una peticion Ajax con un nuevo obsevable
 *  al cual se subscribe el switchMap a cada uno de ellos con la 
 *  diferencia que cada vez que recibe un nuevo text cancela la
 *  peticion ajax y completa el observable anterior 
 *  dejando asi solo la ultima peticion 
 */

/**
 *  mergeMap vs switchMap
 * 
 *  mergeMap mantiene N subscripciones internas activas
 *  switchMap mantiene solo una subscripcion interna activa
 * 
*/


input$.pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    tap(value => console.log('texto', value)),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)
