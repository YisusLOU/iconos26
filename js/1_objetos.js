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
//Es buena práctica encapsular tu código en una función anónima autoejecutable
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
