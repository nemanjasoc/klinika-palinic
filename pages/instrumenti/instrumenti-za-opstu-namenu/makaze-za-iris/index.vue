<template>
    <section class="images-container">
        <h2>Makaze za iris</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in makazeZaIrisImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
        </div>

        <span class="length-numbers">Dužine: 11,5 i 14 cm</span>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'makazeZaIrisImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/makaze-za-iris/'+pic)
        }
    }
}
</script>

<style>
</style>
