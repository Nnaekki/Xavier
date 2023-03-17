<template>
  <div class="body">
  <div class="search">

    <input 
    type="text" class="searchbar" 
    placeholder="Search for Products">
   <button class="button">Search</button>
  </div>
    <div class="text">
      <h1>Welcome to Xavier</h1>
      <h3>Your one-stop shop for all your needs!</h3>
      <span v-if="user">Logged in as {{ user.email }}</span>
    </div>
  <div class="but">
  <RouterLink class="link" to="/login">
    
      <button class="but2">Shop Now</button>
</RouterLink>
</div>
</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default{
  setup(){
const store = useStore()
return{
  user: computed(()=> store.state.user),

}
  },

data (){
  return{
    data:"",
  }
  
 },
 methods:{},

  }




</script>
<style lang="scss" scoped>

.body{
  padding-top: 80px;
  height: 100vh;
  background-image: url('../assets/background.jpg') ;
  background-size: cover;

}

.search {
  display: flex;
  padding: 8px;
  height: 58px;
  width: 100%;
  justify-content: center;
  
}

.searchbar {
  border-radius: 5px;
  background-color: white;
  border-color: #aaa;
  width: 100%;
  padding: 10px; 

}

.button{
  width: 80px;
  border-radius: 5px;
  border-color: #aaa;
  height: 42px;

}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 150px 0 0;
}

.but{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}
.but2{
  
  width: 100px;
  height: 40px;
  border-radius: 5px;
}
</style>