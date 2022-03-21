<template>
    <div class="contacto">
        <h1 class="about">Escribe tus datos para poder contactarte</h1>
        <hr class="linea">
        <div class="fila">
          <div class="column"></div>
          <div class="column" style="text-align: left;">
            <form style="text-align: right;">
              <div class="fila">
                  <input v-model="user.name" type="text" class="form-control" placeholder="Nombre" style="margin-left: 10px; width: 46%;">
                  <input v-model="user.phone" type="text" class="form-control" placeholder="Teléfono" style="margin-left: 10px; width: 46%;">
              </div>
              <br>
              <input v-model="user.email" type="text" class="form-control" placeholder="Correo" style="margin-left : 10px; width: 94%;">
              <br>
              <div class="form-group">
                <textarea v-model="user.details" class="form-control" placeholder="¿Tienes alguna indicación más?" id="exampleFormControlTextarea1" filas="3" style="margin-left: 10px;width: 94%;height: 150px;"></textarea>
              </div>
              <br>
              <input type="button" class="btn btn-primary" value="Enviar pedido" style="margin-right: 15px;text-align: center; float: right;" v-on:click="mandaDatos">
              <!--<button class="btn btn-primary" style="margin-right: 15px;text-align: center; float: right;" @click="submitBut">Enviar pedido</button>-->
            </form>
          </div>
          <div class="column"></div>
        </div>
    </div>
</template>

<script>
import store from "../store"
//Creamos un array que contenga los sabores seleccionados
export default {
  name: 'Formulario',
  data() {
    return {
      user: {
        email: '',
        name: '',
        phone: '',
        details: ''
      },
    }
  },
  methods: {
    mandaDatos(){
      //let nombre = this.user.name
      //alert("Nombre" + nombre + "Telefono" + telefono + "Correo" + correo + "Detalles" + detalles)
      alert("Gracias por su preferencia. Hemos recibido su pedido y en breve nos pondremos en contacto con usted.")
      let usuario = JSON.stringify(this.user)
      store.dispatch('envioFormulario',usuario)
    }
  }
}
</script>

<style scoped>
.contacto{
    margin: auto;
    text-align: center;
}
</style>