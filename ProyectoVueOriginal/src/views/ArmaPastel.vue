<template>
    <img src="../assets/portada2.png" alt="" style="width: 100%;">
    <Nosotros/>
    <Sabores/>
    <Decorados/>
    <Formulario/>
</template>

<script>
import Nosotros from "../components/Nosotros.vue";
import Sabores from "../components/Sabores.vue";
import Decorados from "../components/Decorados.vue";
import Formulario from "../components/Formulario.vue";

export default {
    name: "ArmaPastel",
    components: {
      Nosotros,
      Sabores,
      Decorados,
      Formulario
  }
}
</script>

<style>
.contador{
  font-size: 80px;
}

.botones button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.cuadrado{
  font-size: 50px;
}

.nosotros{
  margin-block: 60px;
  margin: auto;
  text-align: center;
  width: 75%;
  margin-top: 50px;
  font-size: 18px;
}

.fila{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.about{
  font-size: 30px;
}

.linea{
    margin: auto;
    width: 40%;
}

.column {
  width: 100%;
  margin: 40px;
}

@media (min-width: 48em) {
  .fila {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }

  .about{
    text-align:center;
    font-size: 300%;
    margin-block: 30px;
    }
}
</style>