# Proyecto-canvas
Crear una animación con canvas y oop para el portafolio

Explicacion rapida del codigo

1 Para hacer este proyecto primero escogi la imagen de mi portafolio y recorte los ojos y las pupilas y luego le pinte los ojos de blanco creando 3 imagenes que coloque aqui https://maria-jose-conej.imgbb.com/

2 Luego usando clases coloque la imagen con sus respectivas posiciones en el canvas hay 2 clases que son Face y Mask 

3 Luego la funcion move eyes permite colocar las pupilas con un array de coordenadas del canvas / intente hacerlo class pero no me sirvia solo mostraba un ojo

4 En el util.js estan las funciones que tienen procedimientos matematicos para lograr la movilidad del ojo en este caso afuera de los ojos hay un circulo que debo calcular su radio
para con la formula de calcular la distancia entre dos puntos y vectores unitarios lograr que las pupilas sigan al mouse 
https://www.cecyt3.ipn.mx/ibiblioteca/mundodelasmatematicas/DistanciaEntreDosPuntos.html
https://www.superprof.es/apuntes/escolar/matematicas/analitica/vectores/vector-unitario.html

el circulo invisible que esta dentro de los ojos debe verse como si fuera el globo ocular y del centro del ojo al puntero de mouse una linea como si fuera un vector

5 luego se llamo al index.js usando import y se coloco en la funcion joinDrawing en el siguiente orden clean, face, moveEyes, mask debido a que si no se coloca de esa menra no se ve los ojos

6 se hace una funcion para actulizia la posicion del mouse con offsetx y offsety ( la posicion inicial esta en (0,0)

7 Se crea la funcion main que contiene joinDrawings y el movimiento del mouse

Referencias 
https://codepen.io/electricgarden/pen/YzzWMyM
https://codepen.io/etnepres/pen/aNJQOV
https://dev.to/stackfindover/animated-eyes-follow-mouse-cursor-javascript-mouse-move-3n40
https://codepen.io/ccodreanu/pen/poNzRXv
https://codepen.io/caymanbruce/embed/VWzVOK?default-tab=&theme-id=
https://codepen.io/jackrugile/embed/RRPeWe/?theme-id=modal



