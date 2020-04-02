<template>
    <section class="images-container">
        <h2>Autoklavi</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in autoklaviImages" v-bind:key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="image-title">{{ image.title }}</span> 
                <span class="img-text">{{ image.text }}</span>
                <span class="img-text">{{ image.text1 }}</span> 
                <span class="img-text">{{ image.text2 }}</span>  
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'autoklaviImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/aparati-i-uredjaji/autoklavi/'+pic)
        }
    }
}
</script>

<style lang="scss">
.image-title {
    font-weight: 600;
    font-size: 20px;
}
</style>
