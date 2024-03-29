import { Animal } from "./animal.js";

let researchedAnimals = [];
let addedAnimals = [];
let tempAnimal = [];

const showcase = document.querySelector("#animal");
const box = document.querySelector("#animales");
const ageSelector = document.querySelector("#edad");
const commentsInput = document.querySelector("#comentarios");
const previewDiv = document.querySelector("#preview");
const registerButton = document.querySelector("#btnRegistrar");
 

//obtener datos json
const apiUrl = "/animales.json";

const getAnimal = (() => {
  async function consultaAnimal(){
      const response = await fetch(`${apiUrl}`);
      const data = await response.json();  
      return data;
  }
  return {
    consultaAnimal
  }
})();

//getAnimal.consultaAnimal() retorna una promesa, necesitamos el array
let promise = getAnimal.consultaAnimal();
 promise.then(function (val) {
    //console.log(val);
    researchedAnimals = val.animales;
});



//cambio en el formulario
  showcase.onchange = function(){
    let value = showcase.value;
    let text = showcase.options[showcase.selectedIndex].text;
    //console.log(researchedAnimals);
    //cargar foto
    researchedAnimals.forEach(animal => {
        if(animal.name == text){          
          previewDiv.style.backgroundImage = `url('assets/imgs/${animal.imagen}')`;
          console.log('animal:');
          console.log(animal);
          tempAnimal = [];
          tempAnimal.push(animal);
          return false;
        }
    });
  };


registerButton.addEventListener("click", async () => {
   addResearchedAnimal(tempAnimal[0]);
   loadAnimals();
});



const addResearchedAnimal = (tempAnimal) => {
  console.log(tempAnimal);
  const age = ageSelector.value;
  const comments = commentsInput.value;

  const newAnimal = new Animal(
    tempAnimal.name,
    age,
    tempAnimal.imagen,
    comments,
    tempAnimal.sonido
  );


  addedAnimals.push(newAnimal);

  console.log(addedAnimals);
};
 
const loadAnimals = () => {
  box.innerHTML = addedAnimals.map(
    animal => `
      <div class="card" style="max-width: 18rem">
      <img src="/assets/imgs/${animal.img}" class="card-img-top" type="button" class="btn btn-primary" data-toggle="modal" data-target="#${animal.nombre}">
        
        <button class="card-body bg-secondary p-2" style="height: 30px" onclick="document.getElementById('${animal.nombre}sound').play();">
          <img style="width: 30px" src="/assets/imgs/audio.svg">
        </button>
        <audio controls class="card-body bg-secondary p-2 d-none" style="height: 30px" id="${animal.nombre}sound">
          <source src="/assets/sounds/${animal.sonido}" type="audio/mpeg" />
        </audio>
      </div>
      <div class="modal fade" id="${animal.nombre}" tabindex="-1" aria-labelledby="${animal.nombre}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="${animal.nombre}Label">${animal.nombre}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <img src="/assets/imgs/${animal.img}" class="img-fluid"/>
            <p><strong>Nombre: </strong>${animal.nombre}</p>
            <p><strong>Edad: </strong>${animal.edad}</p>
            <p><strong>Comentario: </strong>${animal.comentarios}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
    `
  );
};
