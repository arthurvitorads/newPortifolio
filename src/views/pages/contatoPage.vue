<template>
  <section class="contact-section">
    <RedesComponent />
  </section>
</template>

<script lang="ts">
import RedesComponent from '@/components/redesComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'contatoTela',
  components: {
    RedesComponent: RedesComponent
  }
})

</script>

<style scoped>

.contact-section {
  margin-top: 100px;
}

</style>