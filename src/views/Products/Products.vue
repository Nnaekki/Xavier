<template>
  <div class="products">
<h1>Products</h1>
  </div>
<div class="container">
  <div class="items" v-for="product in products" :key="product.id">
   <RouterLink :to="{name: 'Product1', params: {id: product.id}}">
    <img class="img" :src="product.thumbnail" alt="product.title">
    <h3>{{ product.title }}</h3>
    <p>Category: {{ product.category }}</p>
    <p>Brand: {{ product.brand }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Rating: {{ product.rating }}</p>
  </RouterLink>
</div>

</div>
</template>
<script>
import axios from "axios";
  const API = 'https://dummyjson.com/products'
export default {
  data() {
    return {
      responsedata:{},
      products:[],
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
        this.products = response.data.products
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
  .products{
    margin-top: 80px;

  }
.container{
  margin: 3rem auto;
padding: 2rem;
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
place-items: center;
gap: 20px;
padding: 5px;
border-radius: 10px;
}
.items{
   padding: 1rem 2rem;
text-align: center;
border-radius: 6px;
color: rgb(41, 42, 43);
background-color: white;
filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));

}


       @media (min-width:280px) and (max-width:900px) {
        .container{
          grid-template-columns: repeat(1, minmax(0, 1fr));        }
      }

.img{
height: 500px;
width: 500px;

}
</style>