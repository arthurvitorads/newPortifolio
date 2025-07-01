<!-- SobrePage.vue -->
<template>
    <section class="projects-section">
        <div class="container text-center">
            <h2 class="mb-4">Meus Projetos</h2>
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
        nome: 'BusFinder',
        github: 'https://github.com/arthurvitorads/linhaDeOnibus',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://arthurvitorads.github.io/linhaDeOnibus/',
    },
    {
        nome: 'ToDo App',
        github: 'https://github.com/seuusuario/todo-app',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://todoapp.vercel.app',
    },
    {
        nome: 'Clone Netflix',
        github: 'https://github.com/seuusuario/netflix-clone',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://netflixclone.app',
    },
    {
        nome: 'Clone Netflix',
        github: 'https://github.com/seuusuario/netflix-clone',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://netflixclone.app',
    },
    {
        nome: 'Clone Netflix',
        github: 'https://github.com/seuusuario/netflix-clone',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://netflixclone.app',
    },
    {
        nome: 'Clone Netflix',
        github: 'https://github.com/seuusuario/netflix-clone',
        img: '/preview.png',
        sobre: 'Este projeto foi desenvolvido para auxiliar as pessoas da minha cidade, a localizarem as linhas e pontos desejados.',
        web: 'https://netflixclone.app',
    },
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
}
</style>
