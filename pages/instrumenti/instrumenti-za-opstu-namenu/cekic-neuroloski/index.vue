<template>
    <section class="images-container">
        <h2>Čekić neurološki</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in cekicNeuroloskiImages" :key="image.img">
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
            'cekicNeuroloskiImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/cekic-neuroloski/'+pic)
        }
    }
}
</script>

<style>
</style>
