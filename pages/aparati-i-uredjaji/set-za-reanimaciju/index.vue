<template>
    <section class="images-container">
        <h2>Set za reanimaciju</h2>
 
        <div class="images-wrapper">
            <div class="image-content">
                <img src="~/assets/images/aparati-i-uredjaji/setovi-za-reanimaciju-mali.jpg" alt="setovi-za-reanimaciju-mali">             
                <span class="img-text">1. Balon za reanimaciju</span>
                <span class="img-text">2. Dve silikonske maske</span>             
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

@media only screen and (max-width: 600px) {
    .image-content {
        img {
            max-width: 300px;
        }
    }
}
</style>
