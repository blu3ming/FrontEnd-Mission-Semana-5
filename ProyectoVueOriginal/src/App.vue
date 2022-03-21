<template>
  <Cabecera/>
  <router-view/>
  <FooterDatos/>
</template>

<script>
import FooterDatos from "./components/Footer.vue";
import Cabecera from "./components/Cabecera.vue";

export default {
    name: "App",
    components: {
    FooterDatos,
    Cabecera
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.enlaces{
  float: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f79054;
}

.datos{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.terminos {
  width: 100%;
  margin: 40px;
}

.terminos a{
  text-align: right;
  text-decoration: none;
}

.terminos a:hover{
  text-decoration: underline;
}

@media (min-width: 48em) {
  .datos {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }
}

</style>
