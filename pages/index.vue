<template>
  <div>
    <client-only>
      <carousel 
        :navigationEnabled="true" 
        :perPageCustom="[[200, 1]]" 
        paginationActiveColor="#000000" 
        paginationColor="#bababa" 
        :autoplay="true">
        <slide>
          <div class="carousel-container-background">
            <img src="~assets/images/palinic/palinicdoo-beograd.jpg" alt="palinic-slider">
          </div>
        </slide>
        <slide>
          <div class="carousel-container-background">
            <img src="~assets/images/palinic/palinicdoo-slajder.jpg" alt="palinic-slider">
          </div>
        </slide>
        <slide>
          <div class="carousel-container-background">
            <img src="~assets/images/palinic/palinicdoo-slajder1.jpg" alt="palinic-slider1">
          </div>
        </slide>
        <slide>
          <div class="carousel-container-background">
            <img src="~assets/images/palinic/palinicdoo-slajder2.jpg" alt="palinic-slider2">
          </div>
        </slide>
      </carousel>
    </client-only>
    <section class="container">
      <h2 class="title-about">O nama</h2>
      <p>Preduzeće "Palinić" d.o.o. je osnovano 1997. godine kao privatno društvo sa 
      ograničenom odgovornošću, za trgovinu na veliko medicinskim sredstvima. U 
      okviru svog poslovanja ima četiri grupe medicinskih sredstava i to :</p>      
      <div class="item">1. Hirurški instrumenti i kasete i doboši za sterilizaciju.</div>        
      <div class="item">2. Medicinski aparati i uređaji.</div> 
      <div class="item">3. Bolnička oprema i medicinski nameštaj.</div> 
      <div class="item">4. Medicinski potrošni materijal.</div>
      <h2 class="title-asortiman">Asortiman</h2>
      <div class="asortiman-cards">
        <div class="asortiman-item">
          <img src="~assets/images/asortiman-instrument.jpg" alt="instrumenti">
          <div class="card-body">
            <span class="asortiman-item-title">Instrumenti</span>
            <nuxt-link tag="button" class="link-button" to='/instrumenti'>
              <span>Detaljnije</span>
            </nuxt-link>
          </div>
        </div>
        <div class="asortiman-item">
            <img src="~assets/images/asortiman-aparati.jpg" alt="aparati">
            <div class="card-body">
              <span class="asortiman-item-title">Aparati i uređaji</span>
              <nuxt-link tag="button" class="link-button" to='/aparati-i-uredjaji'>
                <span>Detaljnije</span>
              </nuxt-link>
            </div>
        </div>
        <div class="asortiman-item">
            <img src="~assets/images/asortiman-oprema.jpg" alt="oprema">
            <div class="card-body">
              <span class="asortiman-item-title">Oprema</span>
              <nuxt-link tag="button" class="link-button" to='/oprema'>
                <span>Detaljnije</span>
              </nuxt-link>
            </div>
        </div>
        <div class="asortiman-item">
            <img src="~assets/images/asortiman-potrosni-materijal.jpg" alt="potrosni-materijal">
            <div class="card-body">
              <span class="asortiman-item-title">Potrošni materijal</span>
              <nuxt-link tag="button" class="link-button" to='/potrosni-materijal'>
                <span>Detaljnije</span>
              </nuxt-link>
            </div>    
        </div>
      </div>   
    </section>

    <section class="promo">
      <div class="promo-box">
        <h3>Zašto smo pravo rešenje za vas?</h3>
        <ul>
          <li>
            <span class="promo-box-text">Dugogodišnje iskustvo u oblasti trgovine medicinskom opremem</span>
          </li>
          <li>
            <span class="promo-box-text">Saradnja sa vodećim svetskim kompanijama </span>
          </li>
          <li>
            <span class="promo-box-text">Više od 20 godina prisustva na tržištu</span>
          </li>
          <li>
            <span class="promo-box-text">Hiljade uspešnih isporuka i zadovoljnih klijenata</span>
          </li>
        </ul>
      </div>
      <div class="promo-box"></div>
      <div class="promo-box">
        <p>
          Preduzeće PALINIĆ d.o.o. osnovano je juna meseca 1997. godine. Jedni smo  od pionira u oblasti trgovine medicinskom opremom.<br> 
          <span>Osnovna delatnost preduzeća je uvoz i trgovina na veliko  medicinskim aparatima, hirurškim instrumentima, medicinskom opremom.<br>  
          Jedan broj artikala iz ovog širokog asortimana preduzeće PALINIĆ ima na svom skladistu u Beogradu i može isporučiti promptno po narudžbini kupca.<br></span> 
          Artikle  kojih trenutno nema na skladištu, kad su u pitanju medicinski aparati, preduzeće uvozi po narudžbini kupca i rok isporuke je oko 30 dana. 
          Sva medicinska oprema se isporučuje ili promptno ili u roku od najviše 10 dana od dana porudžbine.
        </p>
        <nuxt-link tag="button" class="promo-button" to='/o-nama'>Detaljnije</nuxt-link>  
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss">
.carousel-container-background {
  position: relative;

  &:after {
    display: block;
    content: '';
    padding-bottom: 25%;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}

.VueCarousel {
  position: relative;

  .VueCarousel-pagination {
    position: absolute;
    bottom: 10%;
  }
}

.VueCarousel-navigation-prev[data-v-453ad8cd] {
  left: 100px !important;
  color: black;
  font-size: 20px;

  &:hover {
    opacity: 1;
  }
}

.VueCarousel-navigation-next[data-v-453ad8cd] {
  right: 100px !important;
  color: black;
  font-size: 20px;

  &:hover {
    opacity: 1;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1140px;
}

.title-about {
  margin: 25px auto;
}

.item {
  line-height: 30px;
}

.title-asortiman {
  margin-top: 70px;
}

.asortiman-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.asortiman-item {
  display: flex;
  flex-direction: column;
  width: 24%;
  border: 1px solid gray;
  margin-right: auto;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 4px;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.link-button {
  display: block;
  width: 120px;
  height: 40px;
  line-height: 20px;
  text-align: center;
  position: relative;
  transition: all .35s;
  font-size: 17px;
  border: 1px solid #000000;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  
  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #868585;
    transition: all .35s;
  }

  &:hover {
    color: #fff;

    &:after {
      width: 100%;
    }
  }
}

.asortiman-item-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 40px;
  text-align: center;
}

.promo {
  display: flex;
  flex-direction: row;
} 

.promo-box {
  width: 33.33%;

  h3 {
    padding: 50px 50px 0 50px;
    text-align: left;
  }

  &:nth-child(1) {
    ul {
      padding: 0 50px 50px 50px;
    }
  }

  &:nth-child(2) {
    background-image: url(~assets/images/palinic-appliances.jpg);
    background-size: cover;
    background-position: center;
  }

  &:nth-child(3) {
    background: #444343;
    color: #ffffff;

    p {
      padding: 50px 50px 30px 50px;
      line-height: 25px;
    }
  }

  img {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    line-height: 25px;
    margin: 0 10px 0 0;
  }

}

.promo-box-text {
  position: relative;
  margin: 0 0 0 20px;

  &:before {
    font-family: FontAwesome;
    content: "\f05d";
    position: absolute;
    top: -4px;
    left: -20px;
  }
}

.promo-button {
  margin: 0 0 50px 50px;
  padding: 10px 20px;
  font-size: 17px;
  border: 1px solid #000000;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
}

@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media only screen and (max-width: 1200px) {
  .promo {
    flex-direction: column;
  }

  .promo-box {
    width: 100%;

    &:nth-child(2) {
      height: 30vh;
    }
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
  .container {
    max-width: 960px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .container {
    max-width: 720px;
  }

  .asortiman-item {
    width: 46%;

    &:last-child {
      margin-right: auto;
    }
  }
}

@media only screen and (min-width: 580px) and (max-width: 767px) {
  .container {
    max-width: 540px;
  }

  .asortiman-item {
    width: 46%;

    &:last-child {
      margin-right: auto;
    }
  }
}

@media only screen and (max-width: 579px) {
  .container {
    width: 90%;
  }

  .asortiman-item {
    width: 100%;
  }
}
</style>
