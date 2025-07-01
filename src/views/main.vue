<template>
  <section class="header">
    <navComponent />
  </section>
  <section class="main">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navComponent from '@/components/navComponent.vue'

export default defineComponent({
  name: 'MainApp',
  components: {
    navComponent: navComponent,
  }
});
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: #f9f9f9;
}
</style>
