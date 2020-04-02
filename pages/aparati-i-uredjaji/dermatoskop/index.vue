<template>
    <section class="images-container">
        <h2>Dermatoskop</h2>
 
        <div class="image-content">
            <img class="dermatosko-image" src="~/assets/images/aparati-i-uredjaji/mini 3000 copy.jpg" alt="mini 3000 copy">
            <h3>Piccolight</h3>
            <ul class="item-description">
                <li>- uvećanje 10 puta</li>
                <li>- podešavanje fokusa od -6 do + 3,5 dpt.</li>
                <li>- halogeno svetlo</li>
                <li>- veliki kontakt disk (25 mm prečnika)</li>
                <li>- ugrađena skala u mm za merenje pigmentacije</li>
            </ul>
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

.dermatosko-image {
    max-width: 400px;
    max-height: 500px;
}

@media only screen and (max-width: 600px) {
    .image-content {
        img {
            max-width: 300px;
        }
    }
}

.dermatoskop-list {
    display: flex;
    flex-direction: column;
    line-height: 22px;
    text-align: left;
}
</style>
