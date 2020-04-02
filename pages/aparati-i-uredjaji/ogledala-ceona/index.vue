<template>
    <section class="images-container">
        <h2>Ogledala čeona</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/ogledala-ceona/Ri-clar-N_small.jpg" alt="Ri-clar-N_small">
                    <h3>RI-CLAR </h3>
                    <span>Čeona lampa, prijatno za nošenje sa trakom za glavu lako podesivom.</span>
                    <ul class="item-description">
                        <li>- Sa lakopodesivom trekom za glavu</li>
                        <li>- Φ 55 mm i Φ 100mm, ogledalca</li>
                        <li>- Sa mogućnošću fokusiranja</li>
                        <li>- Sa transformatorom</li>
                    </ul>
                    <div class="small-display">
                        <img src="~/assets/images/aparati-i-uredjaji/ogledala-ceona/Zigler_small.jpg" alt="Zigler_small">
                        <h3>ZIEGLER</h3>
                        <span>Čeono ogledalo. Veoma prijatno za nošenje.</span>
                        <ul class="item-description">
                            <li>- Postoje dve verzije dijametra 90 mm ili 100 mm</li>
                            <li>- Ogledalo se može okretati u raznim pravcima</li>
                            <li>- Sa trakom za glavu, lako podesivom</li>
                        </ul>
                        <ul class="item-description">
                            <li>1. RI 6005ziegler Ø 90 mm in cardboard box</li>
                            <li>2. RI 6010ziegler Ø 100 mm in cardboard box</li>
                        </ul>
                    </div>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/ogledala-ceona/Ri-focus_led_small.jpg" alt="Ri-focus_led_small">
                    <h3>Ri-Focus LED </h3>
                    <p class="glass-text">Ri-focus LED proizvodi idealno osvetljenje na području od 40 cm distance,
                    mogućnost fokusa, belo i hladno svetlo sa 5500 Kelvina i 7100 luxa. LED lampa 
                    ima životni vek od 15,000 časova i radi na standardne komercijale baterije AAA, 
                    litijum ili NiMh punjive baterije sa punjačem, tako da Vam strujni kabel ne smeta 
                    tokom pregleda.</p>
                    <ul class="item-description">
                        <li>- Odeljak za baterije se nalazi na traci za glavu u odeljku se nalazi i punjač. 
                        U odeljak se može staviti 2 litijum baterije CR123 A, 4 baterije AAA ( alkalne) ili 4 
                        punjive baterije AAA (NimH).
                        </li>
                        <li>- Traka oko glave se lako pere i čisti</li>
                        <li>- Traka je podesiva</li>
                        <li>- On/off odeljak za baterije</li>
                        <li>- Punjač za baterije je integrisan u odeljak za baterije</li>
                        <li>- Fokusirajuća LED lampa na distanci 40 cm oko Ø 40 mm - Ø 200 mm</li>
                        <li>- Beli LED, 1 Watt sa Watt with 5.500° Kelvin, 6 V</li>
                        <li>- Izdržljivost baterija: oko 30 sati sa litijum baterijama, oko 90 minuta sa alkalnim baterijama tipa AAA</li>
                        <li>- Izdržljivost punjivih baterija: oko 90 minuta kada su potpuno napunjene </li>
                        <li>- Težina: 210 g bez baterija, 242 g sa CR 123 A litijum baterijama, 259 g sa punjivim baterijma AAA</li>
                    </ul>
                </div>
                <div class="content-image-show">
                    <img src="~/assets/images/aparati-i-uredjaji/ogledala-ceona/Zigler_small.jpg" alt="Zigler_small">
                    <h3>ZIEGLER</h3>
                    <span>Čeono ogledalo. Veoma prijatno za nošenje.</span>
                    <ul class="item-description">
                        <li>- Postoje dve verzije dijametra 90 mm ili 100 mm</li>
                        <li>- Ogledalo se može okretati u raznim pravcima</li>
                        <li>- Sa trakom za glavu, lako podesivom</li>
                    </ul>
                    <ul class="item-description">
                        <li>1. RI 6005ziegler Ø 90 mm in cardboard box</li>
                        <li>2. RI 6010ziegler Ø 100 mm in cardboard box</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss">
.images-inner {
    display: flex;
    margin: 10px 10px;
    flex-wrap: wrap;
}

.content-image {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;

    img {
        background: #fff;
        border: 1px solid #f0f0f0;
        padding: 5px 14px 5px 5px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        margin: 15px 15px;
        max-width: 260px;
        min-height: 150px;
    }

}

.glass-text {
    width: 50%;
}

.small-display {
    display: none;
}

@media only screen and (max-width: 1400px) {
    .content-image {
        width: 50%
    }

    .content-image-show {
        display: none;
    }

    .small-display {
        display: block;
        margin-top: 20px;
    }
}

@media only screen and (max-width: 992px) {
    .content-image {
        width: 100%;
    }
}
</style>
