
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]', )
}
 
// para indicar que una variable sera un Observable
// se le coloca al final un $ no es obligatorio pero es 
// un estandar

// esto funcionaria pero es poco comun
// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // forzar un error
    // const a = undefined;
    // a.nombre = 'gregory'


    subs.complete();
    // al momento de llamar a complete 
    // le anuncio a mis subscriber 
    // que pueden seguir con su vida.
    
    // por ende lo que venga despues de 
    // un complete no sera tomado en cuenta


    subs.next('Hola');
    subs.next('Mundo');

});

// obs$.subscribe(res => console.log(res))

// esto es equivalente a la linea anterior
// el parametro res se pasa directamente al console.log
// es6


// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error: ', error),
//     () => console.info('completado')
// );

obs$.subscribe( observer );



