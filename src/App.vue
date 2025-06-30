<template>
  <section class="header">
    <navComponent/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navComponent from './components/navComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    navComponent: navComponent
  }
});
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}

</style>
