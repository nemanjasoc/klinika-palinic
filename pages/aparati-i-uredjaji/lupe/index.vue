<template>
    <section class="lupe-container">
        <h2>Lupe</h2>
        <div class="lupe-wrapper">
            <div class="lupe-content">
                <img src="~/assets/images/aparati-i-uredjaji/lupe/stojeca.jpg" alt="stojeca">
                <span>Lupa sa kružnim svetlom stojeća, mobilna</span>
            </div>

            <div class="lupe-content">
                <img src="~/assets/images/aparati-i-uredjaji/lupe/mala.jpg" alt="mala">
                <span>Lupa sa kružnim svetlom za montažu na sto</span>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss">
.lupe-container {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 10px 10px;
    align-items: center;
}

.lupe-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.lupe-content {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

@media only screen and (max-width: 600px) {
    .lupe-content {
        img {
            max-width: 300px;
        }
    }
}
</style>
