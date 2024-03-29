export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }

  get Nombre() {
    return this.nombre;
  }

  get Edad() {
    return this.edad;
  }

  get Img() {
    return this.img;
  }

  get Comentarios() {
    return this.comentarios;
  }

  get Sonido() {
    return this.sonido;
  }
}
