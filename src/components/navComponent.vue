<template>
    <section class="navegacao-container p-3">
        <div class="navegacao">
            <h2>Arthur Vitor</h2>
            <div class="list">
                <nav class="navegacao-lista nav">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Início</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/sobre" class="nav-link active">Sobre</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contato" class="nav-link active">Contato</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="download-cv">
                    <a href="/CURRICULO.pdf" download class="btn btn-outline-primary">Baixar CV</a>

                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'navComponent'
})

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
    width: 70vw;
}

.navegacao h2 {
    color: white;
}

.list {
    display: flex;
    gap: 100px;

}

.navegacao-lista ul {
    gap: 20px;
}

.nav-link {
    color: white;
}
</style>