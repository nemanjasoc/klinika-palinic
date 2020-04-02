<template>
    <div>
        <div class="main-image">
            <h2 class="main-title">Kontakt</h2>
        </div>
        <div class="section-wrapper">
            <div class="frame-wrapper">
                <iframe src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=17%20oktobra%2059+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    <a href="https://www.maps.ie/coordinates.html">find my location</a>
                </iframe>
            </div>
            
            <section class="info-wrapper">
                <div class="info">
                    <h2>Email</h2>
                    <span class="contact-item">palinic@mts.rs</span>
                    <span class="contact-item">palinic41@gmail.com</span>
                    <span class="contact-item">bracapalinic@gmail.com</span>
                </div>
                <div class="info">
                    <h2>Adresa</h2>
                    <span class="contact-item"><span>Direkcija:</span> Sretena Mladenovića-Mike 23</span>
                    <span class="contact-item"><span>Prodaja:</span> 17. Oktobra 59</span>
                </div>
                <div class="info">
                    <h2>Telefon</h2>
                    <span class="contact-item">011/405-6762</span>
                    <span class="contact-item">011/405-8757</span>
                    <span class="contact-item">069/359-2982</span>
                    <span class="contact-item">064/3318-963</span>
                </div>
                <div class="info">
                    <h2>Radno vreme:</h2>
                    <div class="contact-item">ponedeljak - petak</div>
                    <div class="contact-item">od 07,30 do 15,30</div>
                </div>
                <div class="info">
                    <h2>Tekući račun:</h2>
                    <div class="contact-item">285-2331000000079-19 Sberbank</div>
                    <div class="contact-item">205-9986-06 Komercijalna banka</div>
                    <div class="contact-item">160-455457-47 Banka Intesa</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
@import "~assets/scss/_mixins.scss";

.main-image {
    @include main-image;
}

.main-title {
    @include main-title;
}

.main-page-link {
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
}

.frame-wrapper {
    width: 50%;
}

iframe {
    width: 100%; 
    height: 840px;
}

.section-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.info-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    width: 30%;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
    font-family: "Roboto", sans-serif;

    .fa-envelope,
    .fa-map-marker,
    .fa-mobile {
        font-size: 80px;
        color: #dc3545;
    }

}

.contact-item {
    line-height: 28px;

    span {
        font-weight: 600;
    }
}

@media only screen and (max-width: 992px) {
    .frame-wrapper {
        width: 100%;
    }

    .info-wrapper {
        width: 100%;
    }

    .info {
        width: 100%;
    }
}
</style>
