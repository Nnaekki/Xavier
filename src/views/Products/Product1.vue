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
  margin: 3rem auto;
padding: 2rem;
display: grid;
grid-column: inherit;
place-items: center;
gap: 20px;
padding: 5px;
border-radius: 10px;
}
.card{
  width: 500px;
  padding: 1rem 2rem;
text-align: center;
border-radius: 6px;
color: rgb(41, 42, 43);
background-color: white;
filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
}
</style>