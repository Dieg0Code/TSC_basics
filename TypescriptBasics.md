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
    "compilerOnSave": true,
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

- `array`
- `tuple`
- `enum`

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

- `object`

