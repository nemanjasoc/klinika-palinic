<template>
    <section class="images-container">
        <h2>Otoskopi i oftalmoskopi</h2>
        <div class="images-wrapper">
            <div class="images-inner">
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/otoskopi-i-oftalmoskopi/riester-uni copy.jpg" alt="riester-uni copy">
                    <h3>uni</h3>
                    <span>Otoskop sa standardnim svetlom</span>
                    <ul class="item-description">
                        <li>- glava otoskopa je hromirana</li>
                        <li>- sa plug-in konektorom</li>
                        <li>- mogućnost skidanja zaštitnog stakla</li>
                        <li>- sa konekcijom za pneumatski test</li>
                        <li>- sa uveličavajućom lupom 4x uveličanja</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/otoskopi-i-oftalmoskopi/riester-e scope copy.jpg" alt="riester-e scope copy">
                    <h3>e-scope</h3>
                    <span>Ovaj otoskop se proizvodi u 3 varijante:</span>
                    <ul class="item-description">
                        <li>- sa običnim svetlom</li>
                        <li>- sa halogenim svetlom</li>
                        <li>- sa LED svetlom</li>
                    </ul>
                </div>
                <div class="content-image">
                    <img src="~/assets/images/aparati-i-uredjaji/otoskopi-i-oftalmoskopi/riester-ri mini copy.jpg" alt="riester-ri mini copy">
                    <h3>e-scope oftalmoskop</h3>
                    <ul class="item-description">
                        <li>- halogeni svetlo</li>
                        <li>- disk sa 18 korektivnih sočiva (+/- 1 - 20 dioptrija)</li>
                        <li>- šest različitih blendi (fiksna zvezda, veliki krug, mali krug, crveni filter, plavi filter, polu-krug)</li>
                        <li>- paralelna optička putanja</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss">
.images-inner {
    display: flex;
    margin: 10px 10px;
    flex-wrap: wrap;
}

.content-image {
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

@media only screen and (max-width: 1400px) {
    .content-image {
        width: 50%
    }
}

@media only screen and (max-width: 992px) {
    .content-image {
        width: 100%;
    }
}
</style>
