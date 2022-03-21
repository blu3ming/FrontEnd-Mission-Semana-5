import { createStore } from 'vuex'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let saboresSeleccion = []
let decoradosSeleccion = []

export default createStore({
  state: {
    panChocolate: 10,
    panVainilla: 10,
    panFresa: 10,
    cerezas: 10,
    chocolates: 10,
    duraznos: 10,
    chantilly: 10,
    nueces: 10,
    fresas: 10,
    glas: 10,
    lunetas: 10,
    noPedido: 10,
    nombre: "Nombre",
    numero: "5511223344",
    correo: "javier@correo.com",
    saboresPedido: "Sabor, Sabor",
    decoradosPedido: "Decorado1, Decorado2",
    detallesPedido: "Mensaje que diga Feliz Cumpleaños"
  },
  getters: {
  },
  mutations: {
    //Reducimos el inventario con base en la seleccion del pedido
    modificarSabores(state, sabores){
      if (sabores.includes('chocolate')){
        state.panChocolate -= 1;
      } if (sabores.includes('vainilla')){
        state.panVainilla -= 1;
      } if (sabores.includes('fresa')){
        state.panFresa -= 1;
      }
      state.saboresPedido = sabores.join();
    },
    modificarDecorados(state, decorados){
      if (decorados.includes('cerezas')){
        state.cerezas -= 1;
      } if (decorados.includes('chocolates')){
        state.chocolates -= 1;
      } if (decorados.includes('duraznos')){
        state.duraznos -= 1;
      } if (decorados.includes('chantilly')){
        state.chantilly -= 1;
      } if (decorados.includes('nueces')){
        state.nueces -= 1;
      } if (decorados.includes('fresas')){
        state.fresas -= 1;
      } if (decorados.includes('glas')){
        state.glas -= 1;
      } if (decorados.includes('lunetas')){
        state.lunetas -= 1;
      }
      state.decoradosPedido = decorados.join();
    },
    //Seteamos los datos del pedido recibido
    modificarPedido(state, datos){
      state.noPedido += 1;
      const datosRecibidos = JSON.parse(datos);
      state.nombre = datosRecibidos.name;
      state.numero = datosRecibidos.phone;
      state.correo = datosRecibidos.email;
      state.detallesPedido = datosRecibidos.details;
    }
  },
  actions: {
    //Lo único que hacemos cada que el usuario selecciona un sabor, es guardar ese estado hasta que envie
    //el formulario completo con su seleccion final.
    seleccionSabores({ commit },sabores){
      saboresSeleccion = sabores;
    },
    //Lo mismo para decorados
    seleccionDecorados({ commit },decorados){
      decoradosSeleccion = decorados;
    },
    //Cuando envía todo su formulario (hace clic en el boton) se actualizan los valores del
    //lado del pastelero
    envioFormulario({ commit },datos){
      this.commit("modificarSabores", saboresSeleccion);
      this.commit("modificarDecorados", decoradosSeleccion);
      this.commit("modificarPedido", datos);
    }
  },
  modules: {
  }
})
