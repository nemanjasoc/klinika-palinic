<template>
    <section class="images-container">
        <h2>Aparati za terapiju kiseonikom</h2>
 
        <div class="images-wrapper">
            <div class="image-content">
                <img src="~assets/images/aparati-i-uredjaji/aparati-za-terapiju-kiseonikom/aparati-za-terapiju-kiseonikom1.jpg" alt="aparati-za-terapiju-kiseonikom1">
                <div class="sterol">
                    <span>Maska za udisanje</span>
                    <span>Nosna kanila<br>Pribor za aparate za kiseonik</span>
                    <span>Ovlaživač</span>
                </div>
                <img src="~assets/images/aparati-i-uredjaji/aparati-za-terapiju-kiseonikom/koncentrator-kiseonika.jpg" alt="koncentrator-kiseonika">
                <span class="img-text">Uređaj koji prozvodi kiseonik iz okolnog vazduha. Koncetrator kiseonika</span>
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

.sterol {
    display: flex;
    margin-bottom: 20px;

    span {
        margin: 0 10px;
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
