<template>
    <section class="images-container">
        <h2>Makaze za skidanje konaca</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in makazeZaSkidanjeKonacaImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
        </div>

        <span class="length-numbers">Dužine: 10,5; 12 i 14 cm</span>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'makazeZaSkidanjeKonacaImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/makaze-za-skidanje-konaca/'+pic)
        }
    }
}
</script>

<style>
</style>
