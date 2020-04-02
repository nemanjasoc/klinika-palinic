<template>
    <footer>
        <div class="footer-container">
            <div class="footer-box">
                <h1>O nama</h1>
                <p>Preduzeće "Palinić" je privatno društvo sa ograničenom odgovornošću, za trgovinu na veliko medicinskim sredstvima. 
                </p>
            </div>
            
            <div class="footer-box">
                <h2>Asortiman</h2>
                <ul class="footer-asortiman-list">
                    <li>
                        <nuxt-link class="footer-link" to='/instrumenti'>Instrumenti</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="footer-link" to='/aparati-i-uredjaji'>Aparati i uređaji</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="footer-link" to='/oprema'>Oprema</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="footer-link" to='/potrosni-materijal'>Potrošni materijal</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="footer-box">
                <h2>Kontakt</h2>
                <div class="footer-info-address">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Direkcija:</span> Sretena Mladenovića-Mike 23
                </div>
                <div class="footer-info">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Prodaja:</span> 17. Oktobra 59a
                </div>      
                <div class="footer-info">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    069/359-2892; 064/3318-963
                </div>
                <div class="footer-info">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    011/405-6762; 011/405-8757
                </div>
            </div>

            <div class="footer-box">
                <h2>Radno vreme</h2>
                <div class="footer-work-time">
                    ponedeljak - petak<br>
                    od 07,30 do 15,30 
                </div>
            </div>
        </div>

        <div class="copyright">
            <i class="fa fa-copyright" aria-hidden="true"></i>
            2019. All Rights Reserved.
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss">
footer {
    background: #333e48;
    color: #ffffff;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}

.footer-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 25px auto;
}

.footer-box {
    width: 16.5%;
    margin-top: 62px;
    

    h1,h2 {
        font-weight: 500;
    }

    p {
        color: rgba(255,255,255,.5);
        line-height: 24px;
    }
}

.footer-asortiman-list {
    margin-left: 6px;

    li {
        display: block;
        position: relative;

        &:before {
            font-family: FontAwesome;
            content: "\f0da";
            position: absolute;
            left: -14px;
            top: 7px;
        }

        a {
            color: #ffffff;
            line-height: 32px;
            text-decoration: none;
            
            &:hover {
                color: #007bff;
            }
            
        }
    }
}

.footer-info-address {
    line-height: 20px;

    span {
        font-weight: 700;
    }
    
}

.office-address {
    position: relative;
}

.footer-info {
    line-height: 40px;

    span {
        font-weight: 700;
    }

}

.fa-map-marker,
.fa-mobile,
.fa-phone {
    margin-right: 10px;
}

.footer-work-time {
    line-height: 25px;
    position: relative;
}

.copyright {
    margin: 4% 10%;
    border-top: 1px solid rgba(255,255,255,.5);
    padding-top: 6px;
    color: rgba(255,255,255,.5);
}

@media only screen and (max-width: 992px) {
    .footer-box {
        width: 80%;
        margin-top: 15px;
    }
}
</style>
