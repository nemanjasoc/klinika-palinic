<template>
    <section class="images-container">
        <h2>Kolica za prevoz ležećih pacijenata</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/oprema/kolica-za-prevoz-lezecih-pacijenata/strana 5-slika 1 copy.jpg" alt="strana 5-slika 1 copy">
                    <p>Kolica za prevoz pacijenata sa mogućnošću montiranja ograda sa jedne ili obe strane.</p>
                </div>
                
                <div class="content-image">
                    <img src="~/assets/images/oprema/kolica-za-prevoz-lezecih-pacijenata/strana 5-slika 2-3 copy.jpg" alt="strana 5-slika 2-3 copy">
                    <span>Kolica sa nosilima za prevoz ležećih bolesnika.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.images-inner {
    display: flex;
    margin: 10px 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.content-image {
    display: flex;
    flex-direction: column;
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

    p {
        width: 85%;
        line-height: 22px;
    }

    ul {
        display: flex;
        flex-direction: column;
        line-height: 22px;
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
