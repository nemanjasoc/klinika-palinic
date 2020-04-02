<template>
    <section class="images-container">
        <h2>Bolnički kreveti</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/oprema/bolnicki-kreveti/strana 2-slika 1.jpg" alt="strana 2-slika 1">
                    <p>Funkcije kreveta su mehaničko ili električno podizanje uzglavlja, 
                    mehaničko ili električno podizanje uzglavlja i nogu i električno podizanje i spuštanje ležaja.</p>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/bolnicki-kreveti/strana 2-slika 2 copy.jpg" alt="strana 2-slika 2 copy">
                    <span>Dodatna oprema za krevet:</span>
                    <ul>
                        <li>- Ograde</li>
                        <li>- Trapez</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/bolnicki-kreveti/strana 2-slika 3 copy.jpg" alt="strana 2-slika 3 copy">
                    <p>Izrađeni od čeličnih profila, završno plasticifirani sa univer pločama kod uzglavlja i nogu. 
                    Boja univer ploča prema prema zahtevu kupca.</p>
                </div>        
                <div class="content-image">
                    <img src="~/assets/images/oprema/bolnicki-kreveti/strana 2-slika 4 copy.jpg" alt="strana 2-slika 4 copy">
                    <p>Dečiji krevet sa ili bez točkova i sa podizanjem i spuštanjem jedne ili obe stranice.</p>
                </div>  
                <div class="content-image">
                    <img src="~/assets/images/oprema/bolnicki-kreveti/strana 2-slika 5 copy.jpg" alt="strana 2-slika 5 copy">
                    <span>Trapez samostojeći</span>
                </div>
                <div class="content-image">
                   <img src="~/assets/images/oprema/bolnicki-kreveti/strana 3-slika 1 copy.jpg" alt="strana 3-slika 1 copy">
                    <p>Sto za prenos hrane je izrađen od čeličnih profila završno plasticifiran. Ploča od univera, po obodu ojačana.
                    Visina se podešava - mobilan (sa točkovima).
                    </p>
                </div>
                <div class="content-image">
                   <img src="~/assets/images/oprema/bolnicki-kreveti/strana 3-slika 2 copy.jpg" alt="strana 3-slika 2 copy">
                    <p>Noćni ormarići izrađeni od univera - boja po zahtevu kupca sa metalnim ojačanjem sa strane.</p>
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

    p {
        width: 85%;
        line-height: 22px;
    }

    ul {
        display: flex;
        flex-direction: column;
        line-height: 22px;

        li {
            font-weight: 500;
        }
        
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