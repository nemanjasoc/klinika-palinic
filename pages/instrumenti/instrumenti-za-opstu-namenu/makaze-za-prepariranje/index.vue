<template>
    <section class="images-container">
        <h2>Makaze za prepariranje po Metzenbaum-u</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in makazeZaPrepariranjeImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
        </div>

        <span class="length-numbers">Dužine: 11,5; 15; 18; 20 i 23 cm</span>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'makazeZaPrepariranjeImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/makaze-za-prepariranje/'+pic)
        }
    }
}
</script>

<style>
</style>
