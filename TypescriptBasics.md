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
