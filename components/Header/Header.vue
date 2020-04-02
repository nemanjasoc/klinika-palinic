<template>
    <header>
        <div class="top-header">
            <ul class="top-links">
                <li>                   
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span class="top-header-text">Sretena Mladenovića-Mike 22a, Beograd</span>                  
                </li>
                <li>                  
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span class="top-header-text">011/405-6762; 011/405-8757</span>                   
                </li> 
                <li>                 
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    <span class="top-header-text">069/359-2892</span>                  
                </li>
            </ul>  
        </div>

        <div class="main-header">
            <nuxt-link class="link" to='/'>  
                <img src="~assets/images/palinic-klinika-logo.png" alt="logo">
            </nuxt-link>
            
            <div class="menu">
                <ul class="menu-text">
                    <li>
                        <nuxt-link class="link" to='/'>Početna</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="link" to='/instrumenti'>Instrumenti</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="link" to='/aparati-i-uredjaji'>Aparati i uređaji</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="link" to='/oprema'>Oprema</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="link" to='/potrosni-materijal'>Potrošni materijal</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="link" to='/kontakt'>Kontakt</nuxt-link>   
                    </li>
                </ul>

                <div class="menu-bar">
                    <div class="dropbtn">
                        <i class="fa fa-bars" aria-hidden="true" @click="dropdownMenu = !dropdownMenu"></i>  
                    </div>
                </div>
            </div>
        </div>
        
        <div class="dropdown-content" :class="{ inactive: !dropdownMenu }">
            <ul class="dropdown-menu">
                <li>
                    <nuxt-link class="link" to='/'>Početna</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link" to='/instrumenti'>Instrumenti</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link" to='/aparati-i-uredjaji'>Aparati i uređaji</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link" to='/oprema'>Oprema</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link" to='/potrosni-materijal'>Potrošni materijal</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="link" to='/kontakt'>Kontakt</nuxt-link>   
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            dropdownMenu: false
        }
    }
}
</script>

<style lang="scss">
header {
    background-color: #333e48;
}

.top-header {
    height: 50px;
    width: 100%;
    background-color: #868585;
    display: flex;
    align-items: center;
}

.top-links {
    margin-left: 5%;

    li {
        color: #ffffff;

        &:nth-child(1) {
            margin-left: 0;
        }
    }
}

.main-header {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 240px;
        margin-left: 5%;
    }
}

.menu {
    margin-right: 5%;
}

.menu-text {
    li {
        margin: 0;
    }

    a {
        color: rgba(255,255,255,.5);
        text-decoration: none;

        &:hover {
            color: #ffffff;
        }
    }
}

.link {
    padding: 10px 0;
    margin: 0 8px;
}

.menu-bar {
    display: none;
}

.dropdown-content {
    display: none;
}

@media only screen and (max-width: 992px) {
    .menu-text {
        display: none;
    }

    .menu-bar {
        display: block;
        color: rgba(255,255,255,.5);
        font-size: 30px;
        cursor: pointer;
    }

    .dropdown-content {
        display: block;
        margin-top: -19px;
        margin-bottom: -16px;

        &.inactive {
            display: none;
        }
    }
    
    .dropdown-menu {
        display: flex;
        flex-direction: column;
        padding: 5px 0 5px 0;
        background-color: rgba(255,255,255,0);
        margin-left: 5%;

        li {
            padding: 10px 0;
            margin: 0;  
        }

        a {
            color: rgba(255,255,255,.5);
            text-decoration: none;

            &:hover {
                color: #ffffff;
            }
        }
    }

    .link {
        margin: 0;
    }
}

@media only screen and (max-width: 768px) {
    .top-header {
        display: none;
    }
}
</style>
