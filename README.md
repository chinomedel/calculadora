***
## Tabla de contenidos
1. [Integrantes del Equipo](#Integrantes-del-Equipo)
2. [Información General](#Información-General)
3. [Ejecución y Configuración del Proyect](#Ejecución-y-Configuración-del-Proyecto)

***
1. Integrantes del Equipo

Equipo 2: Tiene Sueño el Piero

Integrantes:
<<<<<<< HEAD
- Miguel Lucero Gatica https://github.com/miguellucero123/calculadora
- Pamela Correa Barrera  https://github.com/Pame-b182/calculadora.frontend
- Nelson Medel Bustamante  https://github.com/chinomedel/calculadora
- Sebastian Muñoz Zamora  https://github.com/SebMunz/calculadora
=======
Miguel Lucero Gatica https://github.com/miguellucero123/calculadora
Pamela Correa Barrera https://github.com/Pame-b182/calculadora.frontend
Nelson Medel Bustamante https://github.com/chinomedel/calculadora
Sebastian Muñoz Zamora https://github.com/SebMunz/calculadora
>>>>>>> c3338439b577b7f87fd24664a71a0e960c2f78a5
***
2. Información General

Nombre del proyecto    Sprint Módulo 2: "Yo Quiero Otro Mundo”
El proyecto consiste en la creación de una calculadora funcional, con operaciones matemáticas básicas como la suma, resta, multiplicación y división. A través de la ejecución de los diferentes botones se pueden realizar los cálculos deseados.
***
3. Ejecución y Configuración del Proyecto

<<<<<<< HEAD
El proyecto consiste en la creación de una calculadora funcional, con operaciones matemáticas básicas como la suma, resta, multiplicación y división. A través de la ejecución de los diferentes botones se pueden realizar los cálculos deseados.En JS se hizo lo siguiente:

 
3. Ejecutar la Calculadora

 function valor(val) {
       document.getElementById('resultado').value += val
       return val
    }
=======
En JS se hizo lo siguiente:

  function valor(val) {
      document.getElementById('resultado').value += val
      return val
  }
>>>>>>> c3338439b577b7f87fd24664a71a0e960c2f78a5

Lo que esto hace es crear la función llamada valor con el parámetro val.
Va hacia el Id 'resultado' (en este caso, la caja de resultado) y lee su valor, agregando = al mismo y retornando el parámetro


<<<<<<< HEAD
    function resuelve() {
        let x = document.getElementById('resultado').value
        let y = eval(x);
        document.getElementById('resultado').value = y
        return y
    }
=======
 function resuelve() {
     let x = document.getElementById('resultado').value
     let y = eval(x);
      document.getElementById('resultado').value = y
      return y
  }
>>>>>>> c3338439b577b7f87fd24664a71a0e960c2f78a5

Esta función resuelve lo que encuentra en el Id 'resultado'.
Se crea la función resuelve
Otorga a x el valor que contiene la id 'resultado'
Otorga a y el valor de la evaluación de x
Luego se dirige a 'resultado' y retorna y


<<<<<<< HEAD

    function limpiar() {
       document.getElementById('resultado').value = ''
    }
=======
  function limpiar() {
      document.getElementById('resultado').value = ''
}
>>>>>>> c3338439b577b7f87fd24664a71a0e960c2f78a5

Es la función para limpiar el cuadro
Se dirige al valor de la id 'result' y lo reemplaza por texto vacio
***