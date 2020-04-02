<template>
    <section class="images-container">
        <h2>Ginekološki stolovi</h2>
        <h3>Ginekološki stolovi sa električnim komandama</h3>
        <div class="table">
            <div class="content-image">
                <img src="~/assets/images/oprema/ginekoloski-stolovi/strana 7-slika 1 copy.jpg" alt="strana 7-slika 1 copy">
                <h3>Model BS-E.</h3>
            </div>
            <div class="content-image">
                <img src="~/assets/images/oprema/ginekoloski-stolovi/strana 7-slika 2 copy.jpg" alt="strana 7-slika 2 copy">
                <h3>Model MP-E.</h3>
            </div>
        </div>

        <h3>Ginekološki stolovi sa mehaničkim komandama</h3>
        <div class="table"> 
            <div class="content-image">
                <img src="~/assets/images/oprema/ginekoloski-stolovi/strana 6-slika 1 copy.jpg" alt="strana 6-slika 1 copy">
                <h3>Model MP1.</h3>
            </div> 
            <div class="content-image">
                <img src="~/assets/images/oprema/ginekoloski-stolovi/strana 6-slika 2 copy.jpg" alt="strana 6-slika 2 copy">
                <h3>Model MP2.</h3>
            </div>
            <div class="content-image">
                <img src="~/assets/images/oprema/ginekoloski-stolovi/strana 6-slika 3 copy.jpg" alt="strana 6-slika 3 copy">
                <h3>Model SP.</h3>
            </div>
        </div> 
    </section>
</template>

<style lang="scss">
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

}

h3 {
    text-align: center;
}

.table {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
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
