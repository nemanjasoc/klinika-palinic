<template>
    <div>
        <div class="main-image">
            <div>
                <h2 class="main-title">Oprema</h2>
            </div>
        </div>

        <section class="items-container">
            <ul>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/bolnicki-kreveti'>Bolnički kreveti</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/lezajevi-za-preglede-i-intervencije'>Ležajevi za preglede i intervencije</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/kolica-za-prevoz-lezecih-pacijenata'>Kolica za prevoz ležećih pacijenata</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/ginekoloski-stolovi'>Ginekološki stolovi</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/stocici'>Stočići - kolica za instrumente</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/ormani'>Ormani</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="equipment-link" to='/oprema/ostala-bolnicka-oprema'>Ostala bolnička oprema</nuxt-link>
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

.equipment-link {
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
