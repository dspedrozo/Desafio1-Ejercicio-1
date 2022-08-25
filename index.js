import * as operaciones from "./Operaciones.js";

var op = new operaciones.operations(10,5);


//template string
console.log(`Suma = ${op.sum()}`);
console.log(`Resta = ${op.diff()}`);
console.log(`Multiplicación = ${op.multi()}`);
console.log(`División = ${op.div()}`);