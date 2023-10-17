import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en 02 template', () => { 
    test('getSaludo debe retornanr "Hola Soy Helpnet', () => { 
        const name = "Carlos";
        const msg =  getSaludo(name);
     })
})