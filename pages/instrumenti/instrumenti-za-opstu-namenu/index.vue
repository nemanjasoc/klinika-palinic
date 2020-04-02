<template>
    <div class="links-container">
        <h2>Instrumenti za opštu namenu</h2>
        
        <section class="items-container">
            <ul>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/makaze-hirurske'>Makaze Hirurške</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/makaze-za-prepariranje'>Makaze za prepariranje po Metzenbaum-u</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/makaze-za-iris'>Makaze za iris</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/makaze-za-skidanje-konaca'>Makaze za skidanje konaca</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/makaze-za-gazu'>Makaze za gazu</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/hvatalice'>Hvatalice</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/pincete'>Pincete</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/iglodrzaci'>Iglodržaci</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/cekic-neuroloski'>Čekić neurološki</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/kirete'>Kirete</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/drzaci-skalpela'>Držači skalpela</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="instrument-opsti-link" to='/instrumenti/instrumenti-za-opstu-namenu/skalpel-nozici'>Skalpel-nožići</nuxt-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

</script>

<style lang="scss">
@import "~assets/scss/_mixins.scss";

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

.instrument-opsti-link {

    @include link;

    &:hover {
        color: #292770;
    }

    &:before {
        @include before-items-a;
    }
}

.links-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
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
