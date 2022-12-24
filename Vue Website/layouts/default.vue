<template>
  <div class="app-container">
     <Header /> 
    <div class="app-content">
      
      <nuxt />
      <Footer />
    </div>
   
  </div>
</template>

<script>
import Fotter from "../components/Footer/Footer.vue";
import Header from "../components/Header/Header.vue";
 
 

export default {
  name: "default",
  components: { Header, Fotter },
};
</script>
<style></style>
