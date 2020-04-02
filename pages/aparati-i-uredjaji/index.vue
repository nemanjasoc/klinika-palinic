<template>
    <div>
        <div class="main-image">            
            <h2 class="main-title">Aparati i uređaji</h2>           
        </div>

        <section class="items-container">
            <ul>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/autoklavi'>Autoklavi</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/suvi-sterilizatori'>Suvi sterilizatori</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/sterilizatori-uv-zracenjem'>Sterilizatori UV zračenjem</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/sterizol-uv-lampe'>Sterizol (germicidne) UV lampe</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/sterilizator-vazduha'>Sterilizator vazduha</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/aparati-za-terapiju-kiseonikom'>Aparati za terapiju kiseonikom</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/set-za-reanimaciju'>Set za reanimaciju</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/aspiratori'>Aspiratori</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/inhalatori'>Inhalatori</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/otoskopi-i-oftalmoskopi'>Otoskopi i oftalmoskopi</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/laringoskop'>Laringoskop</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/dermatoskop'>Dermatoskop</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/ogledala-ceona'>Ogledala čeona</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/lupe'>Lupe</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/stetoskopi'>Stetoskopi</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska'>Aparati za merenje krvnog pritiska</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/EKG-aparati'>EKG aparati</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="aparatus-link" to='/aparati-i-uredjaji/negatoskopi'>Negatoskopi</nuxt-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

</script>

<style lang="scss">
@import "~assets/scss/_mixins.scss";

.main-image {
    @include main-image;
}

.main-title {
    @include main-title;
}

.items-container {
    @include items;

    ul {
        @include items-ul;
        li {
            margin: 80px 20px 0 0;
            width: 20%;
            padding: 10px;
        }
    }
}

.aparatus-link {
    @include link;

    &:hover {
        color: #292770;
    }

    &:before {
        @include before-items-a;
    }
}

@media only screen and (max-width: 768px) {
    .items-container {
        ul {
            li {
                width: 40%;
            }
        }
    }
}

@media only screen and (max-width: 580px) {
    .items-container {
        ul {
            li {
                width: 80%;
            }
        }
    }
}
</style>
