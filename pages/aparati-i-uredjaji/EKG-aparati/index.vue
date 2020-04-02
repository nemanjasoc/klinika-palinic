<template>
    <section class="images-container">
        <h2>EKG aparati</h2>
 
        <div class="images-wrapper">
            <div class="image-content">
                <img src="~/assets/images/aparati-i-uredjaji/EKG-aparati/EKG-2.jpg" alt="stojeca">
                <span class="item-title">Heart Screen 60G</span>
                <img src="~/assets/images/aparati-i-uredjaji/EKG-aparati/EKG-3.jpg" alt="mala">
                <span class="item-title">Heart Screen 80G-L</span>
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
