import { getSaludo } from '../../base-pruebas/02-template-string.js';
import '@testing-library/jest-dom';



describe('Pruebas en 02-template-string.js', ()=> {

    test('getSaludo debe de retornar Hola Fernando', ()=>{

        const nombre = 'Fernando';
        const saludo = getSaludo( nombre )
        expect( saludo ).toBe('Hola '+ nombre);

    })

    //getSaludo debe retornar Hola Carlos!! si no hay argumento en el nombre
    test('getSaludo debe retornar Hola Carlos si no hay argumento en la funcion', ()=>{

        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');

    })

});