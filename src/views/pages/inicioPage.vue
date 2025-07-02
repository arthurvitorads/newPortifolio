<template>
    <section class="principal-content">
        <div class="container text-center my-5">
            <img src="/img.png" alt="Arthur Vitor" class="rounded-circle mb-3 img-perfil" />
            <div>
                <div class="text-content">
                    <h1>Seja bem-vindo ao meu portfólio!</h1>
                    <p>Aqui compartilho algums projetos que fiz e minhas habilidades como programador!</p>
                </div>
                <div class="d-flex justify-content-center flex-wrap gap-4">
                    <img v-for="(url, nome) in icones" :key="nome" :src="url" :alt="nome" :title="nome.toUpperCase()"
                        width="35" height="35" />
                </div>
                <div>
                    <router-link to="/projetos"><button type="button" class="btn btn-outline-success">Saiba
                            mais</button></router-link>
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
    height: 65vh;
}

.img-perfil {
    width: 400px;
    height: 400px;
    object-fit: cover;
    transition: all .2s;
}

.img-perfil:hover {
    transform: scale(1.1);
}

.text-content {
    width: 500px;
}

.btn-outline-success {
    padding: 10px 30px 10px 30px;
    margin-top: 50px;
}

@media (max-width: 768px) {
    .principal-content {
        margin-bottom: 100px;
    }
    
    .img-perfil {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    .container {
        display: block;
    }

    .text-content {
        width: 100%;
    }
}
</style>