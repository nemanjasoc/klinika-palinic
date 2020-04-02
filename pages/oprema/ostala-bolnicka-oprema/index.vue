<template>
    <section class="images-container">
        <h2>Ostala bolnička oprema</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 10-slika 2 copy.jpg" alt="strana 10-slika 2 copy">
                    <span>Reflektor sa podešavanjem visine.</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 11-slika 1 copy.jpg" alt="strana 11-slika 1 copy">
                    <span>Paravan - jednodelni, dvodelni i trodelni sa platnom.</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 11-slika 2 copy.jpg" alt="strana 11-slika 2 copy">
                    <span>Stativi za infiziju sa točkovima i podešavanjem visine.</span>
                </div>        
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 11-slika 3 copy.jpg" alt="strana 11-slika 3 copy">
                    <span>Stativ za dezinfekciju sa dva lavora.</span>
                </div>  
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 12-slika 1 copy.jpg" alt="strana 12-slika 1 copy">
                    <span>Stolica za pacijenta na zavrtanj sa ili bez točkova.</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 12-slika 2 copy.jpg" alt="strana 12-slika 2 copy">
                    <span>Stepenik dvostepeni ili jednostepeni.</span>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 12-slika 3 copy.jpg" alt="strana 12-slika 3 copy">
                    <span>Klupa za čekaonice - broj sedišta prema zahtevu kupca.</span>
                </div> 
                <div class="content-image">
                    <img src="~/assets/images/oprema/ostala-bolnicka-oprema/strana 12-slika 4 copy.jpg" alt="strana 12-slika 4 copy">
                    <span> Čiviluk</span>
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
