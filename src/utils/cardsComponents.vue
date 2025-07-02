<template>
    <div class="project-card">
        <h4>{{ nome }}</h4>
        <div class="conteudo">
            <img :src="imagem" alt="">
            <span>{{ sobre }}</span>
        </div>
        <div class="btn-group">
            <a :href="github" target="_blank" class="btn btn-outline-primary">GitHub</a>
            <a v-if="web == ''" disabeld class="btn btn-secondary">Ver Online</a>
            <a v-else :href="web" target="_blank" class="btn btn-outline-success">Ver Online</a>

        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    nome: string
    github: string
    imagem?: string
    sobre?: string
    web?: string
}>()
</script>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 20px;
    padding: 25px;
    width: 400px;
    height: 500px; /* ou defina uma altura fixa se quiser */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform .2s ease-in-out;
}

.project-card:hover {
    transform: translateY(-5px);
}

.conteudo {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
}

.btn-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.btn-secondary {
    cursor: not-allowed;
}

img {
    width: 300px;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
</style>
