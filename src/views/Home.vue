<template>
  <div>
    <Header/>
    <!--  FIXME: These are temp items  -->
    <MainPageItem/>
    <MainPageItem/>
    <MainPageItem/>
    <MainPageItem/>
    <MainPageItem/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import MainPageItem from "../components/MainPageItem";

  export default {
    components: {
      Header,
      Footer,
      MainPageItem
    }
  }
</script>
