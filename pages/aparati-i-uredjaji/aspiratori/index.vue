<template>
    <section class="images-container">
        <h2>Aspiratori</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/aspirator-1.jpg" alt="aspirator-1">
                    <span class="item-title">ASPIRATOR PORTABL NEW ASKIR 30</span>
                    <ul class="item-description">
                        <li>- maksimalni podešavajući vakuum -0,8 bara</li>
                        <li>- maksimalni protok 40 l/min.</li>
                        <li>- boca za sterilizaciju u autoklavu sa uređajem koji sprečava prelivanje i antibaktericidnim filterom 1 lit.</li>
                        <li>- težina 3,6 kg.</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/aspirator-2.jpg" alt="aspirator-2">
                    <span class="item-title">ASPIRATOR TERENSKI NEW ASKIR 30 12V</span>
                    <ul class="item-description">
                        <li>- maksimalni podešavajući vakuum -0,75 bara</li>
                        <li>- maksimalni protok 25 l/min.</li>
                        <li>- boca za sterilizaciju u autoklavu sa uređajem koji sprečava prelivanje i antibaktericidnim filterom 1 lit.</li>
                        <li>- težina 2,5 kg.</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/aspirator-3.jpg" alt="aspirator-3">
                    <span class="item-title">ASPIRATOR PORTABL ZA TEREN I ORDINACIJU NEW ASKIR 30 230/12V BR</span>
                    <ul class="item-description">
                        <li>- maksimalni podešavajući vakuum -0,75 bara</li>
                        <li>- maksimalni protok 16 l/min.</li>
                        <li>- boca za sterilizaciju u autoklavu sa uređajem koji sprečava prelivanje i antibaktericidnim filterom 1 lit.</li>
                        <li>- težina 4,9 kg.</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/aspirator-4.jpg" alt="aspirator-4">
                    <span class="item-title">ASPIRATOR KLINIČKI NEW HOSPIVAC 400</span>
                    <ul class="item-description">
                        <li>- maksimalni podešavajući vakuum -0,90 bara</li>
                        <li>- maksimalni protok 90 l/min.</li>
                        <li>- 2 boce za sterilizaciju u autoklavu sa uređajem koji sprečava prelivanje i antibaktericidnim filterom od 2 lit. ili 4 lit.</li>
                        <li>- sa ili bez nožnog prekidača</li>
                        <li>- težina 20,0 kg.</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/strana 2-slika 1.jpg" alt="strana 2-slika 1">
                    <span class="item-title">Model ASPEED 2 PROFESIONAL</span>
                    <ul class="item-description">
                        <li>- opremljen sa dve pumpe</li>
                        <li>- protok vazduha 22l/min</li>
                        <li>- Vakuum 0 - 0,85 bar</li>
                        <li>- Radni ciklus kontinuiran</li>
                        <li>- Nivo buke 55 dBA</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/strana 2-slika 2.jpg" alt="strana 2-slika 2">
                    <span class="item-title">Model SA01PT</span>
                    <ul class="item-description">
                        <li>- Bezuljna klipna pumpa</li>
                        <li>- Maks. protok 12l/min</li>
                        <li>- Maks. vakuum 550 mmHg</li>
                        <li>- Nivo buke 50 dB</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/strana 2-slika 3.jpg" alt="strana 2-slika 3">
                    <span class="item-title">Model SA02PT/SA03PT</span>
                    <ul class="item-description">
                        <li>- Bezuljna klipna pumpa</li>
                        <li>- Maks. protok 15/30 l/min</li>
                        <li>- Maks. vakuum 640 mmHg</li>
                        <li>- Nivo buke 50 dB</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aspiratori/strana 3-slika 1.jpg" alt="strana 3-slika 1">
                    <span class="item-title">Model SA01HT</span>
                    <ul class="item-description">
                        <li>- Maksimalni protok 60 ili 90 lit/min</li>
                        <li>- Maksimalni vakuum -0,9 bara</li>
                        <li>- Sa dve boce od 2,4 ili 5 litara</li>
                        <li>- Mogućnost isporuke sa nožnim prekidačem</li>
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

@media only screen and (max-width: 1400px) {
    .content-image {
        width: 50%
    }
}

@media only screen and (max-width: 992px) {
    .content-image {
        width: 100%;
    }
}
</style>
