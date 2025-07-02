<template>
    <section class="navegacao-container p-3">
        <div class="navegacao">
            <h2>Arthur Vitor</h2>
            <button class="menu-btn d-md-none" @click="toggleMenu">
                ☰
            </button>
            <div class="list" :class="{ 'ativo': showMenu }">
                <nav class="navegacao-lista nav">
                    <ul class="nav justify-content-center flex-column flex-md-row text-center">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Início</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/projetos" class="nav-link active">Projetos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contato" class="nav-link active">Contato</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="download-cv text-center text-md-start">
                    <a href="/CURRICULO.pdf" download class="btn btn-outline-primary">Baixar CV</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

</script>

<style scoped>
.navegacao-container {
  background-color: #1a1a1a;

}

.navegacao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 90vw;
  max-width: 1200px;
  z-index: 10;
}

/* Nome */
.navegacao h2 {
  color: white;
}

.menu-btn {
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: block;
  z-index: 1001;
}

@media (min-width: 768px) {
  .menu-btn {
    display: none;
  }
}

.list {
  display: none;
}

@media (min-width: 768px) {
  .list {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    gap: 100px;
  }

  .list.ativo {
    position: static;
    background: none;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
  }
}

.list.ativo {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(10, 10, 10, 0.95);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  transition: all 0.3s ease-in-out;
}

.nav-link {
  color: white;
}

</style>