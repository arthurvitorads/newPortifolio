<template>
    <section class="principal-content">
        <AboutComponent/>
    </section>
</template>

<script lang="ts">
import AboutComponent from '@/components/aboutComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sobrePage',
    components: {
        AboutComponent: AboutComponent
    }
})
</script>

<style scoped>
</style>
