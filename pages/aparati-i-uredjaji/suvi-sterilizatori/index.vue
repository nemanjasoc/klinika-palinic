<template>
    <section class="images-container">
        <h2>Suvi sterilizatori</h2>
 
        <div class="images-wrapper">
            <div class="images-content" v-for="image in suviSterilizatoriImages" :key="image.img">
                <img :src="getImgUrl(image.img)" :alt="image.img">
                <span class="img-text">{{ image.text }}</span>
            </div>
            <div class="image-description-wrapper">
                <span>Mikroprocesorska kontrola temperature i programiranje rada.</span>
                <span>Dimenzije radnog prostora:</span>
                <p class="dimension-title">
                    355 x 180 x 100 mm  6 litara<br>
                    370 x 310 x 265 mm  30 litara<br>
                    400 x 430 x 355 mm  60 litara<br>
                    480 x 430 x 435 mm  90 litara<br>
                    480 x 520 x 485 mm  120 litara
                </p>
            </div>  
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'suviSterilizatoriImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('~/assets/images/aparati-i-uredjaji/suvi-sterilizatori/'+pic)
        }
    }
}
</script>

<style lang="scss">
.dimension-title {
    margin-top: 8px;
}

.image-description-wrapper {
    display: flex;
    flex-direction: column; 
    margin-top: 10px;
}
</style>
