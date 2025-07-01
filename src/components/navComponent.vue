<template>
    <section class="navegacao-container p-3">
        <div class="navegacao">
            <h2>Arthur Vitor</h2>
            <div class="list">
                <nav class="navegacao-lista nav">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#inicio">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
                <div class="download-cv">
                    <a href="/CURRICULO.pdf" download class="btn btn-primary">Baixar CV</a>

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