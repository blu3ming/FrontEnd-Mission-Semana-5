<template>
    <div class="primera-capa">
        <br>
        <h1 class="about">Selecciona uno o más sabores</h1>
        <hr class="linea">
        <div class="fila">
          <div class="column">
            <img src="../assets/chocolate-pan.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Chocolate $49</h4>
          </div>
          <div class="column">
            <img src="../assets/vainilla.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Vainilla $49</h4>
          </div>
          <div class="column">
            <img src="../assets/fresa-pan.jpg" class="rounded mx-auto d-block" width="50%">
            <br><h4>Fresa $49</h4>
          </div>
        </div>
        <div class="fila">
          <div class="column">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="chocolate" @click="activate">
              <label class="form-check-label" for="chocolate"><h4>Chocolate</h4></label>
            </div>
          </div>
          <div class="column">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="vainilla" @click="activate">
              <label class="form-check-label" for="vainilla"><h4>Vainilla</h4></label>
            </div>
          </div>
          <div class="column">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="fresa" @click="activate">
              <label class="form-check-label" for="fresa"><h4>Fresa</h4></label>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import store from "../store"
//Creamos un array que contenga los sabores seleccionados
let sabores = [];
export default {
  name: 'Sabores',
  data() {
    return {sabores}
  },
  methods: {
    //Cuando el usuario seleccione un sabor
    activate: function (event) {
        //obtenemos el id
        let sabor = event.target.id;
        //si el sabor ya esta en el array, quiere decir que lo esta deseleccionando
        if (sabores.includes(sabor)){
          //Por lo tanto, debemos eliminarlo del array de sabores seleccionados
          let pos = sabores.indexOf(sabor)
          sabores.splice(pos,1);
        //De lo contrario, como no está en el array, lo añadimos
        } else {
          sabores.push(sabor)
        }
        store.dispatch('seleccionSabores',sabores)
    }
  }
}
</script>

<style scoped>
.primera-capa{
    margin: auto;
    text-align: center;
}
</style>