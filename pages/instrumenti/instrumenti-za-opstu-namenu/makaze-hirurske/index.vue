<template>
    <section class="images-container">
        <h2>Makaze hirurške</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in makazeHirurskeImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
        </div>

        <span class="length-numbers">Dužine: 11,5; 14,5; 16,5; 18 i 20 cm</span>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'makazeHirurskeImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/makaze-hirurske/'+pic)
        }
    }
}
</script>

<style>
</style>
