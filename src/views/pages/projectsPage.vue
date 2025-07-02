<!-- SobrePage.vue -->
<template>
    <section class="projects-section">
        <div class="container text-center">
            <h2 class="title">Meus Projetos</h2>
            <div class="projects-grid">
                <ProjectCard v-for="(projeto, index) in projetos" :key="index" :nome="projeto.nome"
                    :imagem="projeto.img" :sobre="projeto.sobre" :github="projeto.github" :web="projeto.web" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/utils/cardsComponents.vue'

const projetos = [
    {
        nome: 'PostGerence',
        github: 'https://github.com/arthurvitorads/postGerence',
        img: '/preview3.png',
        sobre: 'Este projeto foi desenvolvido para aplicar meus conhecimentos em VueJS, Vuetify, Laravel PHP.',
        web: '',
    },
    {
        nome: 'BusFinder',
        github: 'https://github.com/arthurvitorads/linhaDeOnibus',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://arthurvitorads.github.io/linhaDeOnibus/',
    },
    {
        nome: 'NutriPro',
        github: 'https://github.com/arthurvitorads/NutriPro',
        img: '/preview2.png',
        sobre: 'Este projeto foi desenvolvido para aplicar meus conhecimentos em HTML, CSS e JavaScript.',
        web: 'https://arthurvitorads.github.io/NutriPro/',
    }
]
</script>

<style scoped>
.projects-section {
    padding: 60px 0;
}

.projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

h2 {
    font-weight: bold;
    margin-bottom: 60px;
}
</style>