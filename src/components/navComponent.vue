<template>
    <div class="navegacao">
        <a href="">Arthur Vitor</a>
        <div class="list">
            <nav class="navegacao-lista">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
            <div class="download-cv">
                <a href="">Baixar CV</a>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'navComponent'
})

</script>

<style>
.navegacao {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ccc;
}
</style>