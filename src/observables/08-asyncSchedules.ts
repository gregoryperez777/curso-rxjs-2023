import { asyncScheduler } from 'rxjs';

// El asyncScheduler es usado para trabajar con estas
// dos funciones:

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

/**************************************************************/

// setTimeout

const saludar1 = () => console.log('Hola Mundo');
// para acceder al state o tercer parametro
// const saludar2 = state => console.log(`Hola ${state.name}`);
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// este es el uso basico
// asyncScheduler.schedule(saludar1, 2000);

// Ahora como hariamos cuando al primer argumento
// hay que pasarle data?
// si le pasamos data de esta forma 
// asyncScheduler.schedule(saludar1('Gregory'), 2000);
// estaria mal ya que estariamos diciendo que ejecute la funcion 
// en ese preciso momento

// asyncScheduler.schedule recibe un tercer parametro 
// que es el state el cual para cosas mas complejas 
// puede ser un objeto con toda la data que quieras {  }
// example 
// asyncScheduler.schedule(saludar2, 2000, { name: 'gregory' });

// Para este ejemplo solo se paso un string
asyncScheduler.schedule(saludar2, 2000, 'gregory');

/**************************************************************/

/**************************************************************/

// setInterval
/**
 * Nota: 
 *  
 * la function que recibe no puede ser una arrow function y 
 * recibe el state como parametro
 * 
 * el segundo argumento de asyncScheduler.schedule es el tiempo
 * a esperar para que se ejecute el codigo
 * 
 * para que se ejecute constantemente debemos especificar 
 * cada cuanto tiempo debe cambiar como en la linea 57
 * this.schedule(state + 1, 1000);
 */
const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);

    this.schedule(state + 1, 1000);

}, 3000, 0);

// para cancelar la subscripcion
// esto es valido
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

// lo mismo pero como schedule
asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );

/**************************************************************/