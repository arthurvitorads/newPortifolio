<template>
  <section class="header">
    <navComponent/>
  </section>
  <section class="main">
    <inicioComponent id="#incio"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navComponent from './components/navComponent.vue'
import inicioComponent from './components/inicioComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    navComponent: navComponent,
    inicioComponent: inicioComponent
  }
});
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}

</style>
