<template>
    <section class="images-container">
        <h2>Iglodržači</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in iglodrzaciImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
                <span class="img-text-length">{{ image.secondText }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'iglodrzaciImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/iglodrzaci/'+pic)
        }
    }
}
</script>

<style>
</style>
