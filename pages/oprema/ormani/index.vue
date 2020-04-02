<template>
    <section class="images-container">
        <h2>Ormani</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <span>Ormani za lekove jednokrilni i dvokrilni sa zastakljenim gornjim delom.</span>
                    <img src="~/assets/images/oprema/ormani/strana 9-slika 1 copy.jpg" alt="strana 9-slika 1 copy">
                    <img src="~/assets/images/oprema/ormani/strana 9-slika 2 copy.jpg" alt="strana 9-slika 2 copy">
                </div>
                <div class="content-image">
                    <img src="~/assets/images/oprema/ormani/strana 9-slika 3 copy.jpg" alt="strana 9-slika 3 copy">
                    <span>Ormani za kartoteku predviđeni za veličinu zdravstvenog kartona. Centralno zaključavanje.</span>
                    <div class="small-display">
                        <img src="~/assets/images/oprema/ormani/strana 9-slika 4 copy.jpg" alt="strana 9-slika 4 copy">
                        <span>Garderobni ormani, metalni sa cilindar bravom.</span>
                    </div>
                </div>        
                <div class="content-image-show">
                    <img src="~/assets/images/oprema/ormani/strana 9-slika 4 copy.jpg" alt="strana 9-slika 4 copy">
                    <span>Garderobni ormani, metalni sa cilindar bravom.</span>
                </div>  
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.images-inner {
    display: flex;
    margin: 10px 10px;
    flex-wrap: wrap;
}

.content-image,
.content-image-show {
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
    
}

.small-display {
    display: none;
}

@media only screen and (max-width: 1400px) {
    .content-image {
        width: 50%;
    }

    .content-image-show {
        display: none;
    }

    .small-display {
        display: block;
        margin-top: 20px;
    }
}

@media only screen and (max-width: 992px) {
    .content-image {
        width: 100%;
    }
}
</style>
