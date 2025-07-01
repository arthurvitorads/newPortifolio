<template>
    <div class="container text-center">
          <h2 class="mb-4">Entre em Contato</h2>
          <p>Você pode falar comigo pelas redes sociais ou por e-mail/telefone abaixo:</p>
    
          <div class="contact-grid">
            <a href="https://www.instagram.com/arthurvitorgtr" target="_blank" class="contact-card">
              <img src="/instagram.svg" alt="Instagram" />
              <span>@arthurvitorgtr</span>
            </a>
    
            <a href="https://www.linkedin.com/in/arthur-vitor-356084245/" target="_blank" class="contact-card">
              <img src="/linkedin.svg" alt="LinkedIn" />
              <span>Arthur Vitor</span>
            </a>
    
            <a href="https://github.com/arthurvitorads" target="_blank" class="contact-card">
              <img src="/github.svg" alt="GitHub" />
              <span>/arthurvitorads</span>
            </a>
    
            <div class="contact-card">
              <img src="/email.svg" alt="Email" />
              <span>arhturvitorsilvio@gmail.com</span>
            </div>
    
            <div class="contact-card">
              <img src="/phone.svg" alt="Telefone" />
              <span>(44) 99720-0378</span>
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'redesComponent'
})

</script>

<style scoped>
.contact-section {
  padding: 60px 0;
}

h2 {
  font-weight: bold;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.contact-card {
  width: 200px;
  height: 120px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-card:hover {
  transform: scale(1.05);
}

.contact-card img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}

</style>
