const calificacion=69
if (calificacion>=90)
{
console.log(`A`)
}
else if (calificacion>=80 && calificacion<90)
{
console.log(`B`)
}
else if (calificacion>=70 && calificacion<80)
{
console.log(`C`);
}
else
{
console.log(`REPROBADO`);
//◦ Condiciones aplicando switch
const n1=80
const n2=90
const operacion="add"
switch (operacion){
case "add":
console.log(n1+n2);
break;
case "subs":
console.log(n1-n2);
break;
default:
console.log(`No existe esa operaciOn`)
//◦ Arreglos
const frutas=[
"manzana",
"pera",
"guineo",
function(){
console.log("ok");
return 1;
}
]
console.log(frutas[3]());
//Encontrar la diferencia al utilizar un Set
const numeros = new Set();
numeros.add(5);
numeros.add(5);
numeros.add(6);
console.log(numeros)
//o un Map
const estudiantes = new Map();
estudiantes.set("uno","John");
console.log(estudiantes.get("uno"));
//Puede utilizar también arreglos asociativos
let prueba=[999,333];
prueba[0]="ok"
//array asociativo
prueba["abc"]="xyz"
console.log(prueba);
console.log(prueba["abc"]);

//◦ Ciclos
const frutas = [
"manzana","pera","guineo"
]
for (let i=0;i< frutas.length; i++)
{
console.log(frutas[i]);
}
//Utilizar un for-of
const frutas = [
"manzana","pera","guineo"
]
for (const fruta of frutas)
{
console.log(fruta);
}
//Utilizando un for-in
const personas = [
{nombre:'John'}, {nombre:'Javier'}
]
for (const persona in personas)
{
console.log(personas[persona].nombre);
//Utilizar un while
const personas = [
{nombre:'John'}, {nombre:'Javier'}
]
let iterador=0;
while (iterador< personas.length)
{
console.log(personas[iterador]);
iterador++;
}
//Utilizar un do-while
const personas = [
{nombre:'John'}, {nombre:'Javier'}
]
let iterador=0;
do
{
console.log(personas[iterador]);
iterador++;
}
while (iterador< personas.length)
//◦ Clases
const persona={
nombre:'john',
apellido:'cevallos',
esEstudiante:true,
getNombreCompleto(){
return this.nombre+" "+this.apellido;
}
}
console.log(persona.nombre)
console.log(persona['apellido']);
console.log(persona.getNombreCompleto());
//Podemos utilizar varias nomenclaturas
class Persona
{
constructor(nombre)
{
this.nombre=nombre;
}
getNombre(){
return this.nombre;
}
}
const persona = new Persona("John Antonio");
nombre= persona.getNombre();
console.log(nombre);
//◦ Funciones
function saludar(nombre)
{
console.log(`Hi ${nombre}`);
}
function llamarSaludo(fn, parametro)
{
fn(parametro);
}
llamarSaludo(saludar, 'john c')
//Definir una función como una variable
const saludame=function(nombre){
console.log(`Hola ${nombre}`);
saludame("joancema");
//Utilizar funciones flecha
const saludame = (nombre)=>console.log(`Hola ${nombre}`);
saludame("John Cevallos");
