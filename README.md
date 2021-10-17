# Typescript

## ¿Qué es Typescript?

Es un superconjunto tipado de JavaScript que permite la creación de programas que se pueden compilar a JavaScript.

- **Lenguajes de programación tipado**: Posee un conjunto de tipos de datos que definen el comportamiento de las variables y funciones. Pudiendo personalizarlo o extenderlo.
- **Lenguajes de alto nivel**: Entendible por humanos y posee un alto nivel de abstracción del código maquina.
- **Genera como resultado código JavaScript**: Genera código JavaScript que puede ser ejecutado en navegadores web.
- **Es de código abierto**: Puede ser modificado y extendido por cualquier persona.
- **Multiplataforma**: Puede ser ejecutado en múltiples plataformas: Windows, Mac, Linux, etc.

## ¿Por qué utilizar Typescript?

- Programación orientada a objetos.
- Potenciar tu código javascript.
- Mayor productividad.
- Poderoso sistema de tipos.
- Compila a ES5, ES6 y más.
- Proyecto muy activo / Open Source.
- Actualizaciones constantes.
- Comunidad creciente.
- Puede prevenir cerca del 15% de bugs.
- Puede usarse en el back-end y front-end.

## ¿Cómo instalar Typescript?

Para instalar Typescript, necesitas tener instalado el paquete de NodeJS. Luego, ejecuta el siguiente comando:

```bash
npm install -g typescript
```

Una vez instalado, puedes verificar la version de Typescript que estás usando con el siguiente comando:

``` bash
tsc -v
```

Los archivos que puede compilar typescript son los que tienen la extensión `.ts`, el compilador lo que hace es convertir el código typescript en código javascript, luego de verificar que el código escrito es correcto. Generaría un archivo con el mismo nombre que el archivo de origen pero con la extensión `.js`.

```bash
tsc file.ts
```

Como resultado, se generará un archivo `file.js`. Es en este punto en donde se necesita un javascript runtime para que interprete el código javascript generado.

```bash
node file.js
```

### Compilar de manera automática nuestros ficheros .ts

```bash
tsc -w file.ts
```

Este comando lo que hace es vigilar los cambios y generar un archivo `file.js` cada vez que se modifique el código.

## El archivo `tsconfig.json`

Es un archivo que contiene configuraciones para el compilador.

- Especifica la raíz del proyecto typescript.
- Permite configurar las opciones de compilación.

### Generación del archivo `tsconfig.json`

```bash
tsc --init
```

Este comando genera un archivo `tsconfig.json` en el directorio actual.

Este archivo es el que se usa para configurar el compilador.

Ejemplo:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "removeComments": true,
    }
}
```

Se trata de un archivo json literal con un atributo llamado `compilerOptions` que nos permite configurar las opciones de compilación.

Por ejemplo podemos utilizar el parámetro `target` para especificar la versión de la ECMAScript que se va a generar como resultado de la compilación, puede ser `es3`, `es5`, `es6`, etc. Dependiendo de los objetivos que tenemos en nuestro proyecto.

Asi mismo podemos especificar un atributo llamado `module` en donde vamos a especificar la configuración para generación de módulos en nuestro proyecto typescript. Entre los valores que podemos usar están: `commonjs`, `amd`, `system`, `umd`, `none`, entre otros.

También podemos especificar un atributo llamado `strict` que recibe un valor booleano que indica si se va a compilar el código en modo estricto, es decir, si se va a compilar el código verificando que todos los tipos de datos son correctos.

Finalmente podemos especificar un atributo llamado `removeComments` que recibe un valor booleano que indica si se va a eliminar los comentarios de nuestro código.

También podemos especificar opciones adicionales que vayan de la mano con la configuración de nuestro proyecto.

```json
// tsconfig.json
{
    "extends": "./configs/base",
    "compileOnSave": true,
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "removeComments": true,
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
        "**/*.test.ts"
    ]
}
```

De esta forma usamos el parámetro `include` que llega a ser una lista de declaraciones de tipo que se van a incluir en el proceso de compilación. Lo cual significa que podemos mencionar que directorios y subdirectorios se van a incluir en el proceso de compilación.

Así mismo podemos especificar una sección equivalente pero para excluir directorios y archivos del proceso de compilación. Podemos especificar por ejemplo la carpeta de `node_modules` para que no se tomen en cuenta en el proceso de compilación.

Finalmente podemos mencionar también en el archivo de configuración la herencia de compilaciones, podemos definir un archivo `tsconfig.json` general para nuestro proyecto y heredar las configuraciones usando el parámetro `extends`. De la misma forma, si es que estamos usando algún editor de código o IDE podemos usar el parámetro `compileOnSave` para indicar que el compilador se ejecute cada vez que se guarde un archivo.

## Usando el archivo `tsconfig.json`

Una vez que hayamos generado y configurado el archivo `tsconfig.json`, ¿de qué forma podemos usarlo?.

```bash
tsc # typescript empieza a buscar el archivo tsconfig.json en el directorio actual para tomar en cuenta dichos parámetros de configuración.
```

También podemos usar el parámetro `--project` para indicar el directorio donde se encuentra el archivo `tsconfig.json`

```bash
tsc --project tscBasics
```

En caso de que queramos omitir el uso de `tsconfig.json` podemos simplemente compilar un archivo de tipo `.ts` directamente.

```bash
tsc file.ts
```

## Tipado en TypeScript

En typescript podemos definir variables de manera explícita, eso significa que debemos tomar en cuenta el tipo de dato que va a tener la variable. Pero también typescript tiene la capacidad de inferir el tipo de dato de una variable, es decir, si no se especifica el tipo de dato de la variable, typescript lo infiere.

### Tipado Explícito

```typescript
let a: number = 5;
```

`nombreVariable` `:` `tipoVariable`

### Tipado Implícito

```typescript
let a = 5;
```

Typescript infiere el tipo de dato de `a` como `number`. La variable debe estar inicializada para que el tipo de dato pueda ser inferido.

### Tipos primitivos

- `number` : Valores numéricos, hexadecimales, binarios, octales.

```typescript
// Number
// explicito

let phone: number;
phone = 1;
phone = 5678903;

// phone = 'hola'; // Error

// Inferido
let phoneNumber = 567890;
phoneNumber = 123;
// phoneNumber = true; // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

- `boolean` : El tipo de dato más simple en typescript. Dos valores posibles: `true` o `false`.

```typescript
// Boolean
// explicito
let isAdmin: boolean;
isAdmin = true;
isAdmin = false;

// Inferido
let isAdmin = true;
isAdmin = false;
isAdmin = 'true'; // Error
```

- `string` : El tipo de dato para trabajar con dato textuales o cadenas de caracteres. Así como en javascript, se pueden usar comillas dobles ("") y simples ('') para definir cadenas de caracteres.

```typescript
// String
// explicito
let name: string;
name = 'Juan';
name = 'Juan Pérez';

// Inferido
let name = 'Juan';
name = 'Juan Pérez';
name = 123; // Error
```

- `template string` : Permite definir múltiples líneas de texto. Pueden contener expresiones o variables embebidas. Se debe usar el carácter backtick/backquote (\`) y para expresiones `${expr}`.

```typescript
// Template String
let userName = 'Pepe';
let firstName = 'Juan';
let phone = '1234567890';
let isAdmin = true;

let userInfo = `
    User info: 
    username: ${username}
    first name: ${firstName + ' Pérez'}
    phone: ${phone}
    isAdmin: ${isAdmin}
`;
console.log('userInfo', userInfo);
```

- `array` : Al igual que en javascript, typescript permite definir arrays que contienen un conjunto de valores. Usa dos notaciones: `[]` y `Array<tipo>`

```typescript
// Array
// explicito
let numbers: number[] = [];
numbers = [1, 2, 3];
numbers = [1, '2', 3]; // Error

// Inferido
let otherNumbers = [1, 2, 3]; // number[]
let otherNumbers = [1, '2', 3]; // Error

// Array<tipo>
let pictureTitles: Array<string>; // string[]
pictureTitles = ['A', 'B', 'C'];

// Accediendo a los valores en un array
console.log('first number', numbers[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en arrays
console.log('length', pictureTitles.length);

// Uso de funciones en arrays
numbers.push(4); // Agrega el valor 4 al final del array
pictureTitles.sort(); // Ordena los valores del array en este caso de forma alfabética
```

- `tuple` : Una tupla en typescript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla. Las tuplas permiten expresar un array con un número específico de elementos.

```typescript
// Tuple
// [1, 'user']
let user: [number, string];
user = [1, 'Juan'];

console.log('user', user);
console.log('username', user[1]);
console.log('user name length', user[1].length); // esto no funciona con otro tipo de dato que no sean strings
console.log('user id', user[0]); // aquí no funcionaria pedir el length

// tuplas con varios valores
// id, userName, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Pedro', true];
console.log('userInfo', userInfo);

// array de tuplas
let array: [number, string][] = []; // debe ser inicializada para poder usar propiedades como push
array.push([1, 'Juan']); // 0
array.push([2, 'Pedro']); // 1
array.push([3, 'Antonio']); // 2

// Uso de funciones en arrays
// Antonio -> Antonio001

array[2][1] = array[2][1].concat('001'); // Antonio001
console.log('array', array);
```

- `enum` : Los enumerados permiten definir un conjunto de constantes con nombre. Tiene la ventaja de adaptarse al contexto de la aplicación.

```typescript
// Enum
// Orientación para fotografiás
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape); // landscape 0
console.log('landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}

// Siempre son valores consecutivos que se van incrementando de 1 en 1

console.log('portrait', PictureOrientation.Portrait); // portrait 11

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    México = 'mex',
    EEUU = 'usa',
    España = 'esp'
}

const country: Country = Country.Bolivia;
console.log('country', country); // country bol
```

- `any` : Usado para capturar valores dinámicos. Los valores pueden cambiar de tipo dependiendo del contexto. APIs externas, librerías de terceros, etc.

En la practica `any` debe ser usado como último recurso, esperaríamos aplicarlo en caso de que no sepamos el tipo de la variable a priori.

```typescript
// any
// explicito
let idUser: any;
idUser = 1; // Tipo: number
idUser = '1'; // Tipo: string
console.log('idUser', idUser);

// Inferido
let otherIdUser;
otherIdUser = 1;
otherIdUser = '1';
console.log('otherIdUser', otherIdUser);

let surprise: any = 'hello typescript';
// surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log('res', res);
```

- `void` : Void es lo opuesto a any. Representa la ausencia de tipo. Comúnmente se usa como tipo de retorno de funciones.

```typescript
// void
// explicito
function showInfo(user: any): void {
    console.log('user info', user.id, user.userName, user.firstName);
}

showInfo({ id: 1, userName: 'Pepe', firstName: 'Juan' });

// Inferido
function showFormatedInfo(user: any) {
    console.log('User info', `
        id: ${user.id}
        userName: ${user.userName}
        firstName: ${user.firstName}
    `);
}

showFormatedInfo({ id: 1, userName: 'Pepe', firstName: 'Juan' });
```

Una variable de tipo `void` no puede ser inicializada, se puede asignar unicamente como `null` o `undefined` como valores.

```typescript
// tipo void, como tipo de dato en variable
let unusable: void;
unusable = null;
unusable = undefined;
```

Normalmente esto nos daría un error puesto que en nuestro archivo de configuración tenemos el modo `strict` en nuestro chequeo de tipos.

Esto no es recomendable, pero es posible. Nos sirve para entender que `null` y `undefined` son una especie de subtipo de `void`.

- `null`: En Typescript, ambos valores `null` y `undefined` tienen sus respectivos tipos.
- `undefined`

```typescript
// null y undefined
// explicito
let nullValue: null;
nullValue = null;
nullValue = 1; // Error

let otherVariable = null; // lo infiere como any
otherVariable = 'test'; // se puede porque el tipo de variable es any

console.log('nullValue', nullValue);
console.log('otherVariable', otherVariable);

// undefined
let undefinedValue: undefined = undefined;
undefinedValue = 'test'; // Error

let otherUndefinedValue = undefined; // lo infiere como any

console.log('undefinedValue', undefinedValue);
console.log('otherUndefinedValue', otherUndefinedValue);
```

`null` y `undefined` se pueden asumir como subtipos de los otros tipos de datos. Significa que podemos asignar `null` y `undefined` a variables de tipo `number` o `string`, por ejemplo.

```typescript
// null y undefined como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null; // Error
// albumName = undefined; // Error
```

Una de las maneras más prácticas de solucionar problemas habituales cuando trabajamos con código javaScript consiste en evitar la asignación de valores `null` y `undefined` a variables. Typescript provee los mecanismos necesarios para evitar esto, una de las formas consiste en utilizar el parámetro `strictNullChecks` en la configuración del archivo de configuración, con lo cual el compilador verifica que no se está asignando un valor `null` o `undefined` a una variable.

También podemos usar el parámetro `strictNullChecks` mediante la linea de comandos.

```bash
tsc file.ts --strictNullChecks
```

Nos devuelve un reporte de todas las lineas en las que se encontró una asignación de valor `null` o `undefined` a una variable.

Esto se hace porque cuando se asignan valores `null` o `undefined` a variables el código se vuelve propenso a producir errores.

- `never` : Representa el tipo de valor que nunca ocurre. Se usa en funciones que lanzan excepciones o en funciones que nunca retornan un valor.

```typescript
// never
// explicito
function handleError(code: number, message: string): never {
    // process your code
    // generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not found');
} catch (error) {
}

function sumNumbers(limit: number): never {
    let sum = 0;
    // infinit loop
    while (true){
        sum++;
    }
    // return sum;
}

sumNumbers(10); // never return sum, bc of infinit loop
```

- `object` : Es el tipo de dato que representa un valor no primitivo. Es el tipo para variable que no sea `number`, `string`, `boolean`, `undefined`, `null`, etc.

```typescript
// object
// explicito
let user: object;
user = {}; // Object

user = {
    id: 1,
    userName: 'Pepe',
    firstName: 'Juan',
    isPro: true
};

console.log('user', user);
// Object vs object(Clase JS vs tipo TS)
const myObj = { // inferido como clase es decir tipo Object
    id: 1,
    userName: 'Pepe',
    firstName: 'Juan',
    isPro: true
};

const isInstance = myObj instanceof Object; // true

console.log('user.userName', myObj.userName);

// console.log('user.userName', user.userName); // Error property 'userName' does not exist on type 'object'.
```

#### `Object` vs `object`

- `Object` : Instancia de la clase `Object` de javascript.
- `object` : Tipo para valores no primitivos. Con este tipo no se puede acceder a las propiedades del objeto.

En resumen, la principal diferencia entre `Object` y `object` es que `Object` es una clase de javascript, mientras que `object` es un tipo de dato.

## Union de Tipos, Alias y Tipos Literales

### Union de Tipos

- En `Typescript` se puede definir una variable con múltiples tipos de datos: *Union Type*.
- Se usa el símbolo de pipe `|` entre tipos.

```typescript
// union type
// 10, '10'
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un id
function getUsername(id: number | string) {
    // Lógica de negocio, find the user
    return 'Pepe';
}

getUsername(10); // 'Pepe'
getUsername('10'); // 'Pepe'
```

### Alias de Tipos

- Typescript permite crear un alias como nuevo nombre para un tipo.
- El alias se puede aplicar también a un conjunto o combinación de tipos.
- Se usa la palabra reservada `type` para crear alias.

```typescript
// alias
// nos ayudan a evitar la redundancia en la union de tipos
type IdUser = number | string;
type UserName = string; // alias para el tipo string
let idUser: IdUser;

function getUsername(idUser: IdUser): UserName {
    // Lógica de negocio, find the user
    return 'Pepe';
}

getUsername(10); // 'Pepe'
getUsername('10'); // 'Pepe'
```

### Tipos Literales

- Una variable con un tipo literal pude contener únicamente una cadena de conjunto.
- Se usan cadenas como "tipos", combinados con el símbolo de pipe `|` entre ellos.

```typescript
// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSizes = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSizes = '100x100';
// let smallPicture: SquareSizes = '200x200'; // Error
let mediumPicture: SquareSizes = '500x500';
```

## Aserciones de tipos

Ademas de los tipos de datos, Typescript también provee un mecanismo para poder convertir estos tipos.

- Cuando el programador conoce más que Typescript sobre el valor de una variable se hace necesario utilizar algún tipo de operador que me permita hacer una converción de tipos de datos.
- Se parece al casting de tipos en otros lenguajes de programación. Sin embargo no es lo mismo puesto que Typescript no realiza ningún tipo de verificación y no afecta al tiempo de ejecución de la aplicación.
- Usa dos sintaxis: `<Angle Bracket>` y `(variable as tipo)`

```typescript
// Aserciones de tipos
// <tipo> Angle Bracket syntax
let userName: any;
userName = 'Pepe';

// tenemos una cadena, TS confía en mi!
let message: string = (<string>userName).length > 5 ? ` Welcome ${userName}`: 'Username is too short';
console.log('message', message);

let userNameWithId: any = 'luixaviles 1';
// Como obtener el userName?
userName = (<string>userNameWithId).substring(0, 10);
console.log('userName', userName);

// Sintaxis "as"
let message = (userName as string).length > 5 ? ` Welcome ${userName}`: 'Username is too short';

let helloUser: any;
helloUser = 'hello paparazzi';
userName = (helloUser as string).substring(6);
console.log('userName', userName);
```

## Funciones en TypeScript

- Los parámetros en las funciones son tipados.
- Se pueden definir parámetros opcionales.
- El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos.

```typescript
// Funciones
// crear una fotografía
// JS
function cratePictureJS(title, date, size) {
    // los parámetros son de tipo any
}

type SquareSizes = '100x100' | '500x500' | '1000x1000';

// TS
function createPictureTS(title: string, date: string, size: SquareSizes) {
    // Se crea una fotografía
    console.log('create picture using', title, date, size);
}

cratePictureTS('My Birthday', '10/10/2016', '100x100');

// Parámetros opcionales
function createPictureTS(title?: string, date?: string, size?: SquareSizes) {
    // Se crea una fotografía
    console.log('create picture using', title, date, size);
}

// El símbolo ? es para indicar que el parámetro es opcional
createPictureTS('My Birthday', '10/10/2016');
createPictureTS('My Birthday');
createPictureTS();
// de esta forma se vuelve opcional pasar todos los parámetros

// ES6, flat array functions
let createPic = (title: string, date: string, size: SquareSizes): object => {
    return { title, date, size };
};

const picture = createPic('My Birthday', '10/10/2016', '100x100');
console.log('picture', picture);
```

Un parámetro opcional siempre debe ir añ final en el caso de que existan otros parámetros obligatorios.

```typescript
// Tipo de retorno con Typescript.

function handleError(code: number, message: string): never | string {
    // procesamiento del código, mensaje
    if(message === 'error') {
        throw new Error(`${message}. Code error ${code}`);
    } else {
        return 'an error has ocurred';
    }
}


try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result); // an error has occurred
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch(error) {

}
```

## Interfaces

Las interfaces en Typescript constituyen una forma poderosa de definir "contratos" tanto para tu proyecto, como para el código externo del mismo.

```typescript
// Interfaces
// Función para mostrar una fotografía

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title},
                    date: ${picture.date},
                    orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'My Birthday',
    date: '10/10/2016',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test title',
    date: '10/10/2016',
    orientation: PhotoOrientation.Portrait,
    // extra: 'extra' // Error
});
```

Una interfaz en Typescript es en cierto sentido como un tipo (como string, number, boolean, etc) mas "complejo", en el cual defines (como en enum un contrato) las propiedades y métodos que se deben cumplir en cualquier objeto que implemente dicha interfaz. La diferencia entre una interfaz y una clase es que en la interfaz solo hacemos mención de que esperamos de un objeto, en una clase mencionamos las propiedades (igual que en una interfaz) pero definimos los métodos (osea, especificamos que hará ese método, en la interfaz solo mencionamos el nombre de la función).

### Interfaces Propiedades opcionales

No todas las propiedades de una interfaz podrían ser requeridas.

Establecemos una propiedad como opcional con el símbolo `?` después del nombre de la propiedad.

```typescript
interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'default', date: '10/10/2016'}
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({}); // {title: 'default', date: '10/10/2016'}
picture = generatePicture({title: 'Travel pic'}); // {title: 'Travel pic', date: '10/10/2016'}
picture = generatePicture({title: 'Travel pic' ,date: '17/17/2017'}); // {title: 'Travel pic', date: '17/17/2017'}
```

### Interfaces Propiedades de Solo Lectura

Algunas propiedades de una interfaz pueden ser de solo lectura. Esto significa que no se puede cambiar su valor, pero si se puede acceder a su valor. Esto es posible usando `readonly` antes del nombre de la propiedad.

```typescript
// Interfaz Usuario
interface User {
    readonly id: number; // id es de solo lectura
    userName: string;
    isPro: boolean;
}

let user: User;
user = {id: 1, userName: 'John', isPro: true};
user.id = 2; // Error readonly property
user.userName = 'Juan';
```

Esto es util ya que en ciertos casos no queremos que se modifiquen ciertos valores ya que estos pueden ser importantes, como en el caso de una id de usuario en el contexto de una base de datos.

### Extendiendo Interfaces

Las interfaces pueden