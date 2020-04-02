<template>
    <section class="images-container">
        <h2>Sterilizator vazduha</h2>
 
        <div class="image-content">
            <img src="~/assets/images/aparati-i-uredjaji/strana 8-slika 3.jpg" alt="strana 8-slika 3">
            <span class="img-text">Sterilizator vazduha UV zračenjem koji se može koristiti u prisustvu ljudi.</span>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss">
.image-content {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 10px 10px;
    align-items: center;

    img {
        max-width: 400px;
    }
}

@media only screen and (max-width: 600px) {
    .image-content {
        img {
            max-width: 300px;
        }
    }
}
</style>
