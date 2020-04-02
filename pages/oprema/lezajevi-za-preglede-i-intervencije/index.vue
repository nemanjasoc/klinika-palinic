<template>
    <section class="images-container">
        <h2>Ležajevi za preglede i intervencije</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 3-slika 3 copy.jpg" alt="strana 3-slika 3 copy">
                    <p>Ležaj za preglede sa podesivim uzglavljem, visoki (75 cm) ili niski (55 cm).</p>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 3-slika 4 copy.jpg" alt="strana 3-slika 4 copy">
                    <span>Ležaj za kardiološke preglede.</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 4-slika 1 copy.jpg" alt="strana 4-slika 1 copy">
                    <span>Ležaj za ultrazvuk preglede u ginekologiji.</span>
                </div>        
                <div class="content-image">
                    <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 4-slika 2 copy.jpg" alt="strana 4-slika 2 copy">
                    <p>Ležaj za preglede sa električnom komandom za podizanje i spuštanje i mehaničkom komandom za podešavanje uzglavlja.</p>
                </div>  
                <div class="content-image">
                    <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 4-slika 3 copy.jpg" alt="strana 4-slika 3 copy">
                    <span>Ležaj za masažu i preglede sklopivi za rad na terenu.</span>
                </div>
                <div class="content-image">
                   <img src="~/assets/images/oprema/lezajevi-za-preglede-i-intervencije/strana 4-slika 4 copy.jpg" alt="strana 4-slika 4 copy">
                    <span>Sto za povijanje beba.</span>
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
