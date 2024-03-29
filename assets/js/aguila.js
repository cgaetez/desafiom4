import Animal from "./animal";

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    return this.sonido;
  }
}
