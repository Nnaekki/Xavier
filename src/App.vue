<template>
  <XavierHeader />
  <RouterView />
  <XavierFooter />
</template>

<script>
import { RouterView } from "vue-router";
import XavierHeader from "./components/XavierHeader.vue";
import XavierFooter from "./components/XavierFooter.vue";
export default{
  name:'App',
  components: { XavierHeader, XavierFooter },
}

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");
* {
  font-family: "Rubik", sans-serif;
  font-weight: 400;
 padding: 0;
 margin: 0;
  box-sizing: border-box;
}
.app{
  min-height: 100vh;
  position: relative;
    background-color: #aaa;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
