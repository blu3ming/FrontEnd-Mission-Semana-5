<template>
    <div class="decorados">
        <br>
        <h1 class="about">Selecciona la decoración superior</h1>
        <hr class="linea">
        <div class="fila">
          <div class="column">
            <img src="../assets/cereza.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Cerezas $39</h4>
          </div>
          <div class="column">
            <img src="../assets/chocolate-barra.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Chocolates $35</h4>
          </div>
          <div class="column">
            <img src="../assets/durazno.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Duraznos $29</h4>
          </div>
          <div class="column">
            <img src="../assets/decorado.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Decorado Chantilly $29</h4>
          </div>
        </div>
        <div class="fila">
          <div class="column">
            <img src="../assets/nuez.jpg" class="rounded mx-auto d-block" width="50%">
            <h4>Nueces $39</h4>
          </div>
          <div class="column">
            <img src="../assets/fresa.jpeg" class="rounded mx-auto d-block" width="50%">
            <h4>Fresas $39</h4>
          </div>
          <div class="column">
            <img src="../assets/glas.jpg" class="rounded mx-auto d-block" width="50%">
            <h4>Azucar Glas $25</h4>
          </div>
          <div class="column">
            <img src="../assets/luneta.jpg" class="rounded mx-auto d-block" width="50%">
            <h4>Lunetas $39</h4>
          </div>
        </div>
        <div class="fila">
          <div class="column">
            <input class="form-check-input" type="checkbox" id="cerezas" @click="activate">
            <label class="form-check-label" for="cerezas"><h4>Cerezas</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="chocolates" @click="activate">
            <label class="form-check-label" for="chocolates"><h4>Chocolates</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="duraznos" @click="activate">
            <label class="form-check-label" for="duraznos"><h4>Duraznos</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="chantilly" @click="activate">
            <label class="form-check-label" for="chantilly"><h4>Decorado Chantilly</h4></label>
          </div>
        </div>
        <div class="fila">
          <div class="column">
            <input class="form-check-input" type="checkbox" id="nueces" @click="activate">
            <label class="form-check-label" for="nueces"><h4>Nueces</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="fresas" @click="activate">
            <label class="form-check-label" for="fresas"><h4>Fresas</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="glas" @click="activate">
            <label class="form-check-label" for="glas"><h4>Azúcar glas</h4></label>
          </div>
          <div class="column">
            <input class="form-check-input" type="checkbox" id="lunetas" @click="activate">
            <label class="form-check-label" for="lunetas"><h4>Lunetas</h4></label>
          </div>
        </div>
      </div>
</template>

<script>
import store from "../store"
//Creamos un array que contenga los sabores seleccionados
let decorados = [];
export default {
  name: 'Decorados',
  methods: {
    //Cuando el usuario seleccione un sabor
    activate: function (event) {
        //obtenemos el id
        let decorado = event.target.id;
        //si el sabor ya esta en el array, quiere decir que lo esta deseleccionando
        if (decorados.includes(decorado)){
          //Por lo tanto, debemos eliminarlo del array de sabores seleccionados
          let pos = decorados.indexOf(decorado)
          decorados.splice(pos,1);
        //De lo contrario, como no está en el array, lo añadimos
        } else {
          decorados.push(decorado)
        }
        //console.log(decorados)
        store.dispatch('seleccionDecorados',decorados)
    }
  }
}
</script>

<style scoped>
.decorados{
    margin: auto;
    text-align: center;
}
</style>