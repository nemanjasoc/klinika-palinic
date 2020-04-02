<template>
    <section class="images-container">
        <h2>Instrumenti za ginekologiju</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in dobosiKasetePosudeImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
                <span class="img-text">{{ image.firstDimension }}</span>
                <span class="img-text">{{ image.secondDimension }}</span> 
                <span class="img-text">{{ image.thirdDimension }}</span> 
                <span class="img-text">{{ image.fourthDimension }}</span> 
                <span class="img-text">{{ image.fifthDimension }}</span>  
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'dobosiKasetePosudeImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/instrumenti/dobosi-kasete-posude/'+pic)
        }
    }
}
</script>

<style>
</style>
