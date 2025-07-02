<template>
  <div class="layout">
    <section class="header">
      <navComponent />
    </section>
    <section class="main">
      <router-view />
    </section>
    <section class="footer">
      <footerComponent />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navComponent from '@/components/navComponent.vue'
import footerComponent from '@/components/footerComponent.vue'

export default defineComponent({
  name: 'MainApp',
  components: {
    navComponent: navComponent,
    footerComponent: footerComponent
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

@media (max-width: 768px) {
  .layout {
    display: flex;
    flex-direction: column;

  }
}
</style>
