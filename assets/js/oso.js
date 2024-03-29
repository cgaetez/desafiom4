import Animal from "./animal";

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  gruñir() {
    return this.sonido;
  }
}
