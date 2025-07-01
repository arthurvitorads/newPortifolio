<template>
    <section class="principal-content">
        <div class="container text-center my-5">
            <img src="/img.png" alt="Arthur Vitor" class="rounded-circle mb-3 img-perfil"
                style="width: 300px; height: 300px; object-fit: cover" />
            <div>
                <div class="text-content">
                    <h3>Seja bem-vindo ao meu portfólio!</h3>
                    <p>Aqui compartilho algums projetos que fiz e minhas habilidades como programador!</p>
                </div>
                <div class="d-flex justify-content-center flex-wrap gap-4">
                    <img v-for="(url, nome) in icones" :key="nome" :src="url" :alt="nome" :title="nome.toUpperCase()"
                        width="50" height="50" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const icones = {
    html5: '/html5.svg',
    css3: '/css.svg',
    javascript: '/javascript.svg',
    typescript: '/typescript.svg',
    vue: '/vuedotjs.svg',
    php: '/php.svg'
}
</script>

<style scoped>

.principal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
}

.text-content {
    width: 500px;
}
</style>
