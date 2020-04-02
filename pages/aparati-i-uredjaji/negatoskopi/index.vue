<template>
    <section class="images-container">
        <h2>Negatoskopi</h2>
 
        <div class="images-wrapper">
            <div class="image-content">
                <img src="~/assets/images/aparati-i-uredjaji/negatoskop.jpg" alt="negatoskop">
                <p class="negatoskop-dimension-title">
                    30 x 30 cm stomatološki<br>
                    36 x 44 cm za jedan snimak<br>
                    72 x 44 cm za dva snimka<br>
                    108 x 44 cm za tri snimka<br>
                    123 x 45D za mamografiju
                </p>
            </div>
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
}

.negatoskop-dimension-title {
    margin-top: 10px;
}

@media only screen and (max-width: 600px) {
    .image-content {
        img {
            max-width: 300px;
        }
    }
}
</style>
