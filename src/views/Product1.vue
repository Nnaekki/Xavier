<template>
<div class="container">
  <div class="card">
    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="card-img-top" alt="{{ title }}">
    <div class="card-body">
      <h4 class="card-text"> {{ title }}</h4>
      <p class="card-text"> {{ description }}</p>
      <p class="card-text"> Price: {{ price }}</p>
      <p class="card-text"> Discount: {{ discountPercentage }}</p>
      <p class="card-text"> Rating: {{ rating }} </p>
      <p class="card-text">In stock: {{ stock }}</p>


      <a href="#" class="btn">Add to cart</a>
    </div>
  </div>
  <div>
  <RouterLink class="link" to="/login"><button>Sign Out</button></RouterLink>
</div>
  </div>
  <div class="container">
  <div class="card">
    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" class="card-img-top" alt="{{ title }}">
    <div class="card-body">
      <h4 class="card-text"> {{ title }}</h4>
      <p class="card-text"> {{ description }}</p>
      <p class="card-text"> Price: {{ price }}</p>
      <p class="card-text"> Discount: {{ discountPercentage }}</p>
      <p class="card-text"> Rating: {{ rating }} </p>
      <p class="card-text">In stock: {{ stock }}</p>


      <a href="/cart" class="btn">Add to cart</a>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
  const API = 'https://dummyjson.com/products/1'
export default {
 
  data() {
    return {
      responsedata:{},
      id: '',
      title: '',
      description: '',
      price: '',
      discountPercentage: '',
      rating: '',
      stock: '',
      brand: '',
      category:'',
      thumbnail:'',
    }
  },
  methods: {
    async fetchApi(){
      await axios.get(API)
      .then ((response) => {
        this.responsedata = response.data,
        this.id = response.data.id,
        this.description = response.data.description,
        this.title = response.data.title,
        this.price = response.data.price,
        this.discountPercentage = response.data.discountPercentage
        this.rating = response.data.rating,
        this.stock = response.data.stock

      })
      .catch ((error)=>{
        console.log(error)
      })
    }
  },
  mounted(){
    this.fetchApi()
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
}
</style>