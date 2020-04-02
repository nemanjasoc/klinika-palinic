<template>
    <section class="images-container">
        <h2>Laringoskop</h2>
 
        <div class="image-content">
            <img src="~/assets/images/aparati-i-uredjaji/laringoskop copy.jpg" alt="laringoskop copy">
            <span class="img-text">Laringoskop po MC Intosh-u sa 3, 4 ili 5 špatula.</span>
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
