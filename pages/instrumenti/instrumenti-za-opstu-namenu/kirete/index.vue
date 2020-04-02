<template>
    <section class="images-container">
        <h2>Kirete</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in kireteImages" :key="image.img">
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
            'kireteImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/instrumenti-za-opstu-namenu/kirete/'+pic)
        }
    }
}
</script>

<style>
</style>
