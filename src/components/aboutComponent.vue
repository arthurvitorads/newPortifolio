<template>
  <section class="content">
    <div>
      <h2 class="mb-4">Sobre </h2>
    </div>
    <div class="project-card">
      <img class="card-img-top card" src="../../public/sobreImg.png" alt="">
      <div class="text">
        <h5 class="card-title">Um pouco sobre mim:</h5>
        <p class="card-text">Olá! Me chamo Arthur Vitor, tenho 18 anos e sou estudante de Análise e Desenvolvimento de
          Sistemas. Desde cedo descobri minha paixão pela programação e venho me dedicando a aprender e crescer na área
          da tecnologia.</p>
        <p>Sou uma pessoa proativa, com facilidade de adaptação e gosto de aprender por conta própria.
          Tenho experiência com desenvolvimento web, testes automatizados com Cypress e já atuei em suporte técnico e
          rotinas administrativas. </p>
        <p>Atualmente, busco oportunidades que me desafiem e me ajudem a evoluir como
          desenvolvedor. Meu objetivo é me especializar na área de desenvolvimento de sistemas e construir uma carreira
          sólida, sempre contribuindo com soluções criativas e eficientes.</p>

        <router-link to="/projetos"><button type="button" class="btn btn-outline-success">Conheça meus projetos</button></router-link>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'aboutComponent'
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

h2 {
  font-weight: bold;
}

.project-card {
  background-color: white;
  border-radius: 20px;
  padding: 25px;
  width: 90vw;
  height: 60vh;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform .2s ease-in-out;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
}

.text {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.btn-outline-success {
  margin: auto
}

img {
  width: 600px;
  border-radius: 10px;
}
</style>