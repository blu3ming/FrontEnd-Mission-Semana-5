<template>
<h1 id="pastelero">Bienvenido ADMIN!</h1>
  <h2 id="pasteleroInventario">Inventario</h2>
  <TablaSabores/>
  <TablaDecorados/>
  <h2 id="pasteleroInventario">Pedidos</h2>
  <Pedido/>
</template>

<script>
import TablaSabores from "../components/TablaSabores.vue";
import TablaDecorados from "../components/TablaDecorados.vue";
import Pedido from "../components/Pedido.vue";

export default {
    name: "Pastelero",
    components: {
      TablaSabores,
      TablaDecorados,
      Pedido
    }
}
</script>

<style>
#pastelero{
  margin-left: 50px;
  font-size: 30px;
}
  
#pasteleroInventario{
  font-size: 25px;
  margin-left: 50px;
  margin-top: 45px;
}

#pasteleroTablas{
  font-size: 20px;
  margin-left: 50px;
}

.table{
   margin: 20px;
   margin-left: 50px;
}
</style>