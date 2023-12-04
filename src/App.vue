<template>
<!--  componenty ktore su staticke sa prideluju podla umiestnenia-->
  <reg-sin> </reg-sin>

  <navbar-a></navbar-a>

<!--  element ktory je v -if sa zobrazi iba ak je true a plati-->
  <router-view/>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <footer-home></footer-home>
</template>

<!--//do scriptu sa prida novy komponent pomocou importu nazov komponentu,-->
<!--//dalej je from (v lavej tabulke ukazeme kde sa to nachadza takze components.NAZOV_KOMPONENTU)-->

<script>
import NavbarA from "@/components/Home/NavbarA.vue";
import RegSin from "@/components/Home/RegSin.vue";
import FooterHome from "@/components/Home/FooterHome.vue";

export default {
  name: 'App',
  components: {
    FooterHome,
    RegSin,
    NavbarA,
    //Tu treba novy komponent zaregistrovat iba jeho nazvom !! bez pripony
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
