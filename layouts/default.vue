<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 8px;
}

.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;

  h2 {
    display: flex;
    text-align: center;
  }
}

.images-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
}

.images-content {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 10px 10px;

  img {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 5px 14px 5px 5px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 15px;
    max-width: 260px;
    min-height: 150px;
  }

}

.length-numbers {
  font-weight: 600;
  margin-top: 8px;
}

.img-text {
  margin-top: 8px;
}

.img-text-length {
  font-weight: 600;
  margin-top: 8px;
}

.item-title {
  font-weight: 600;
  line-height: 22px;
  text-align: center;
}

.item-description {
  width: 70%;
  line-height: 22px;
  text-align: left;

  li {
    font-weight: 500;
  }
}
</style>
