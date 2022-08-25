import * as operaciones from "./Operaciones.js";

var op = new operaciones.operations(10,5);


//template string
console.log(`
-------------------------------------------------
        Suma = ${op.sum()}
        Resta = ${op.diff()}
        Multiplicación = ${op.multi()}
        División = ${op.div()}
-------------------------------------------------        
`);