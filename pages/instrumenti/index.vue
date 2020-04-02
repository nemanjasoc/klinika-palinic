<template>
    <div>
        <div class="main-image">
            <h2 class="main-title">Instrumenti</h2>
        </div>

        <section class="items-container">
            <ul>
                <li>
                    <nuxt-link class="intrument-link" to='/instrumenti/instrumenti-za-opstu-namenu'>Instrumenti za opštu namenu</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="intrument-link" to='/instrumenti/instrumenti-za-ginekologiju'>Instrumenti za ginekologiju</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="intrument-link" to='/instrumenti/instrumenti-za-uho-grlo-nos'>Instrumenti za uho, grlo i nos</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="intrument-link" to='/instrumenti/instrumenti-ostali'>Instrumenti ostali</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="intrument-link" to='/instrumenti/dobosi-kasete-posude'>Doboši, kasete, posude</nuxt-link>
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

.intrument-link {
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
