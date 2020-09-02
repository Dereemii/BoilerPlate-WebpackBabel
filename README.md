## Instalación y práctica webpack
Para comenzar a trabajar visitaremos la [página oficial](https://webpack.js.org/) donde podemos viajar a la guía práctica de nuestro primer proyecto con Webpack: [Guía de instalación](https://webpack.js.org/guides/getting-started/#basic-setup)

#### Requisitos:
- Tener instalado [Node.js](https://nodejs.org/es/) en tu computadora. Recomiendo reiniciar el pc una vez instalado.
- Utilizaremos Visual Studio Code (Puedes utilizar el editor de código que gustes :))

#### 1. Package.json
Creamos una carpeta en nuestro pc, abrimos dicha carpeta en VSC (Visual Studio Code) y abrimos la terminal para ejecutar:

```
npm init -y
```

Esto creará nuestro archivo base **package.json** donde podremos configurar las dependencias que utilizará nuestro proyecto.

#### 2. Instalar Webpack y Webpack CLI
Ejecutamos también en nuestra terminal:

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

Lo cual instalará **webpack** y **webpack cli**

#### 3. Crear index.html y index.js
Comenzaremos con una estructura básica de un proyecto web creando un index.html y dentro de la carpeta src un index.js:

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Webpack</title>
</head>
<body>
  <h1>Curso de Webpack</h1>
</body>
</html>
```

src/index.js
```js
const saludo = 'Hola mundo con webpack';
console.log(saludo);
```

#### 4. Ejecuta:
Nuevamente en la terminal ejecuta:
```
npx webpack
```

Y tan tan... ahora tendrás un archivo minificado con el código js en la carpeta **/dist/main.js**, por lo tanto podemos mover nuestro index.html a la carpeta **/dist** y llamar a tal archivo js.

```html{12}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Webpack</title>
</head>
<body>
  <h1>Curso de Webpack</h1>

  <script src="main.js"></script>
</body>
</html>
```
Ejecuta en el navegador y tendrías que ver la consola que configuramos :)

# Fundamentos de Webpack
Veremos como personalizar nuestros archivos JS de salida.

## webpack.config.js
Para esto necesitamos crear un archivo de configuración (en el directorio raíz) el cual se llamará:

```
webpack.config.js
```
y tendrá lo siguiente:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

En el **output: {filename}** estamos definiendo la salida por lo tanto podríamos cambiar el nombre a nuestro gusto. Ahora ejecutamos para comprobar la salida:

```
npx webpack --config webpack.config.js
```

## Script
Podemos configurar nuestros propios script en el archivo **package.json**:

```json
"scripts": {
    "build": "webpack --mode development",
    "produccion": "webpack -p",
    "watch": "webpack --w --mode development"
  },
```

El primer script define la compilación de nuestro proyecto js, el segundo nos sirve para pasar a producción y el tercero para poder mantener un observador de cambios.

# Babel.js
Nos permite compilar a diferentes versiones nuestro código JS. [Sitio oficial](https://babeljs.io/setup#installation)

## 1. Instalar dependencias
Ejecutar en nuestro proyecto:
```
npm install --save-dev babel-loader @babel/core
```

## 2. webpack.config.js
Agregar configuración al archivo **webpack.config.js**:
```js{9-13}
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'salida-compilada.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
```

## 3. .babelrc
Crear el archivo de configuración **.babelrc** pero antes ejecutar:
```
npm install @babel/preset-env --save-dev
```

y dentro del archivo **.babelrc**:
```json
{
  "presets": ["@babel/preset-env"]
}
```

Esto habilita las transformaciones para ES2015 +
