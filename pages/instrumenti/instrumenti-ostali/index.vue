<template>
    <section class="images-container">
        <h2>Instrumenti ostali</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in instrumentiOstaliImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'instrumentiOstaliImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-ostali/'+pic)
        }
    }
}
</script>

<style>
</style>
