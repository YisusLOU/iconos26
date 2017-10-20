;
/*
  Comentario
  de
  varias
  líneas
*/

// Comentario de una línea

//Definición o declaración
function saludo (nombre = 'ICONOS') {
  //Interpolación de variables
  //alert(`Hola, ${nombre}`)
}

//Invocación o ejecución
//saludo('Tete')
//saludo()
;
//Es buena práctica encapsular tu código en una función anónima autoinvocada
(function (d, w) {
  //alert(d)
  //alert(w)
  //alert('Hola')
  //console.log(d, w, 'Hola')
})(document, window);

/* Objetos Literales */
(function (c) {
  c('*****Objetos Literales*****')

  /* Para declarar una variable en JS se utilizaba la palabra 'var'. Ahora para declarar una variable usamos 'const' o 'let' */

  /* Los objetos en JS son una colección de propiedades con sus respectivos valores. Esas propiedades pueden ser atributos o métodos */
  const perro = {
    nombre: 'kEnAi',
    edad: 5,
    esterilizado: true,
    raza: 'Callejero',
    genero: 'Macho',
    ladrar: function () {
      c('Guauuu guauuu!!!')
    },
    comer: function (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    perro,
    perro.nombre,
    perro.edad,
    perro.esterilizado,
    perro.raza,
    perro.genero
  )

  perro.ladrar()
  perro.comer()
  perro.comer('tacos')
  perro.aparecer('https://jonmircha.github.io/edjs-paradigmas2017/img/kEnAi.jpg')

  const perro2 = {
    nombre: 'Boni',
    edad: 10,
    esterilizado: false,
    raza: 'Boxer',
    genero: 'Hembra',
    ladrar: function () {
      c('Guauuu guauuu!!!')
    },
    comer: function (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    perro2,
    perro2.nombre,
    perro2.edad,
    perro2.esterilizado,
    perro2.raza,
    perro2.genero
  )

  perro2.ladrar()
  perro2.comer()
  perro2.comer('tacos')
  perro2.aparecer('http://de10.com.mx/sites/default/files/styles/detalle_nota/public/field/image/shutterstock_122056762-boxer.jpg?itok=7ZKh-CgR')
})(console.log);

/* Clases */
(function (c) {
  c('*****Clases*****')
  /* Una clase es un modelo a seguir, un machote */
  class Perro {
    //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor (nombre, edad, esterilizado, raza, genero) {
      //Definición de los Atributos de mi clase
      this.nombre = nombre
      this.edad = edad
      this.esterilizado = esterilizado
      this.raza = raza
      this.genero = genero
    }

    //Definición de los métodos de mi clase
    ladrar () {
      c('Guauuu guauuu!!!')
    }

    comer (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    }

    aparecer (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  //La palabra new me permite crear o INSTANCIAR un objeto de un tipo determinado de clase
  const firulais = new Perro('Firulais', 3, false, 'Callejero', 'Macho')
  const frida = new Perro('Frida', 7, true, 'Labrador', 'Hembra')

  c(
    firulais,
    firulais.nombre,
    firulais.edad,
    firulais.raza,
    firulais.genero,
    firulais.esterilizado,
    frida,
    frida.nombre,
    frida.edad,
    frida.raza,
    frida.genero,
    frida.esterilizado,
  )

  firulais.ladrar()
  firulais.comer()
  firulais.aparecer('http://i0.wp.com/cinicosdesinope.com/wp-content/uploads/2015/09/firulais-perro-mascota-rugrats-personajes.png')

  frida.ladrar()
  frida.comer()
  frida.aparecer('https://cdn.heraldodemexico.com.mx/wp-content/uploads/2017/09/heraldo-de-mexico-frida-juchitan-1024x682.jpg')
})(console.log);
