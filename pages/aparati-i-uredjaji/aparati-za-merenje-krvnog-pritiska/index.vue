<template>
    <section class="images-container">
        <h2>Aparati za merenje krvnog pritiska</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/riester-precisa copy.jpg" alt="riester-precisa copy">
                    <h3>precisa</h3>
                    <span>Manometarski merač krvnog pritiska.</span>
                    <ul class="item-description">
                        <li>- Pumpica od latexa</li>
                        <li>- Metalni ventil</li>
                        <li>- Ergonomski dizajnirana pumpica</li>
                        <li>- Manžentna sa jednim crevom</li>
                        <li>- Maksimalni opseg merenja od 0 do 300 mmHg</li>
                        <li>- Maksimalna mogućnost greške +/- 3 mmHg</li>
                        <li>- Mogućnost montiranja različitih veličina manžetni</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/riester-e mega copy.jpg" alt="riester-e mega copy">
                    <h3>e-mega</h3>
                    <span>Manometarski merač krvnog pritiska</span>
                    <ul class="item-description">
                        <li>- Veliki manometar (Φ 63mm.) koji Vam omogućava jednostavniju čitljivost</li>
                        <li>- Površina manometra jednostavna za dezinfekciju</li>
                        <li>- Maksimalna mogućnost greške +/- 3 mmHg</li>
                        <li>- Mikrofilter štiti ventil i merni sistem od prašine i ostalih čestica</li>
                        <li>- Proizod je u celosti izrađen od materijala bez lateksa sa polikarbonatnim kućištem</li>
                        <li>- Sa njim dobijate menžetnu i tašnicu</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/riester-sanaphon copy.jpg" alt="riester-sanaphon copy">
                    <span>Manometarski samomomerač krvnog prtiska sa integrisanim stetoskopom. 
                    SANAPHON Vam garantuje precizno merenje čak i kod pacijenata sa srčanom ritmijom</span>
                    <ul class="item-description">
                        <li>- Manometar presvučen aluminijumom, otpornim na koroziju</li>
                        <li>- Pumpica od lateksa</li>
                        <li>- Maksimalni opseg merenja od 0 do 300 mmHg</li>
                        <li>- Maksimalna mogućnost greške +/- 3 mmHg</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/inmarc medizin copy.jpg" alt="inmarc medizin copy">
                    <h3>inmarc medizin</h3>
                    <span>Manometarski merač krvnog pritiska</span>
                    <ul class="item-description">
                        <li>- Manometar prečnika 65 mm</li>
                        <li>- Velika i lako čitljiva skala</li>
                        <li>- Gumena zaštita manometra</li>
                        <li>- Manžetna najlonska</li>
                        <li>- Precizan ventil za ispuštanje vazduha</li>
                        <li>- Kućište od plastike</li>
                        <li>- Pumpica od gume</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/microlife copy.jpg" alt="microlife copy">
                    <h3>microlife</h3>
                    <span>Aneroidni merač krvnog pritiska sa stetoskopom</span>
                    <ul class="item-description">
                        <li>- Visoka preciznost</li>
                        <li>- Kompletno rešenje</li>
                        <li>- Jednostavan za upotrebu</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~assets/images/aparati-i-uredjaji/aparati-za-merenje-krvnog-pritiska/riester-big ben copy.jpg" alt="riester-big ben copy">
                    <h3>big ben</h3>
                    <span>Manometarski merač krvnog pritiska sa velikim manometrom. Prikladan za ordinacije i bolnice</span>
                    <ul class="item-description">
                        <li>- Maksimalni opseg merenja od 0 do 300 mmHg</li>
                        <li>- Lateks pumpica</li>
                        <li>- Sa preciznim mehanizmom za merenje</li>
                        <li>- Maksimalna mogućnost greške +/- 3 mmHg</li>
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
