<template>
  <section class="header">
    <navComponent/>
  </section>
  <section class="main">
    <inicioComponent/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navComponent from '@/components/navComponent.vue'
import inicioComponent from '@/components/inicioComponent.vue'

export default defineComponent({
  name: 'MainApp',
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
