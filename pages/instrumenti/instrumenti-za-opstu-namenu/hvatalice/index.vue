<template>
    <section class="images-container">
        <h2>Hvatalice</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in hvataliceImages" :key="image.img">
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
            'hvataliceImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/hvatalice/'+pic)
        }
    }
}
</script>

<style>
</style>
