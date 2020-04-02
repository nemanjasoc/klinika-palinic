<template>
    <section class="images-container">
        <h2>Inhalatori</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/inhalatori/inhalator-2.jpg" alt="inhalator-2">
                    <span class="item-title">PARI BOY</span>
                    <ul class="item-description">
                        <li>- radni pritisak 1,5 bara</li>
                        <li>- korišćenje 14 inhalacija dnevno</li>
                        <li>- prosečan prečnik čestica 2,9 mm</li>
                        <li>- procenat čestica manjih od 5mm 75%-89%</li>
                        <li>- težina 1,7 kg.</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/inhalatori/strana 3-slika 2.jpg" alt="strana 3-slika 2">
                    <span class="item-title">Profesionalni kompresorski inhalator model C 900</span>
                    <ul class="item-description">
                        <li>- posuda za lek 2 - 7 ml</li>
                        <li>- veličina čestice 3,00 mMMD</li>
                        <li>- brzina inhaliranja 0,4 ml/min</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/inhalatori/strana 3-slika 3.jpg" alt="strana 3-slika 3">
                    <span class="item-title">Kompresorski inhalator model C 28 P</span>
                    <ul class="item-description">
                        <li>- posuda za lek do 7 ml</li>
                        <li>- veličina čestice 3,00 m MMD</li>
                        <li>- brzina inhaliranja 5 ml/min</li>
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
        width: 50%;
    }
}

@media only screen and (max-width: 992px) {
    .content-image {
        width: 100%;
    }
}
</style>
