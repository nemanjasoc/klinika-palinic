<template>
    <section class="images-container">
        <h2>Stočići - kolica za instrumente</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/oprema/stocici-kolica-za-instrumente/strana 8-slika 1 copy.jpg" alt="strana 8-slika 1 copy">
                    <p>Dimenzije 70 x 50 cm., konstrukcija od čeličnih plastificiranih cevi sa dve ili tri staklene ili plastične ploče</p>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/stocici-kolica-za-instrumente/strana 8-slika 2 copy.jpg" alt="strana 8-slika 2 copy">
                    <span class="image-text">Dimenzije 60 x 40 cm. od nerđajućih čelika sa dve ili tri ploče</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/stocici-kolica-za-instrumente/strana 8-slika 3 copy.jpg" alt="strana 8-slika 3 copy">
                    <p>Dimenzije 70 x 50 cm., konstrukcija od cevi od nerđajućeg čelika sa dve ili tri plastificirane ploče</p>
                </div>        
                <div class="content-image">
                    <img src="~/assets/images/oprema/stocici-kolica-za-instrumente/strana 8-slika 4 copy.jpg" alt="strana 8-slika 4 copy">
                    <span class="image-text">Sto po Zonenbergu sa točkićima i podešavanjem visine</span>
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

    p {
        width: 85%;
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
