<template>
    <section class="images-container">
        <h2>Instrumenti za ginekologiju</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in instrumentiZaGinekologijuImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
                <span class="img-text">{{ image.secondText }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'instrumentiZaGinekologijuImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-ginekologiju/'+pic)
        }
    }
}
</script>

<style>
</style>
