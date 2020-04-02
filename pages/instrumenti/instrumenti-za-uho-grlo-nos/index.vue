<template>
    <section class="images-container">
        <h2>Instrumenti za uho, grlo, nos</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in instrumentiZaUhoGrloNosImages" :key="image.img">
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
            'instrumentiZaUhoGrloNosImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-uho-grlo-nos/'+pic)
        }
    }
}
</script>

<style>
</style>
