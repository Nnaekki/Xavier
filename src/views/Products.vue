<template>
<h1>Products</h1>
{{ products }}
</template>
<script>
import axios from "axios";
export default{
    data (){
        return{
            info: 'Hello {{username}}, welcome! You have been logged in and this is the Products Page',
        products: [],
        }
    },
    

    mounted(){
    axios
    .get("https://dummyjson.com/products")
    .then(response => (
        
    this.products = response.data))
    .catch(error => console.log(error))
  },
  methods:{
    setUser(Sandra){
        this.$store.commit('setUser', Sandra)
    }

  },
  computed:{
  user(){
    console.log('store.state.user')
    return this.$store.state.user
  }
}
  
}
</script>
<style lang="scss" scoped>
*{
    margin-top: 80px;
}
</style>