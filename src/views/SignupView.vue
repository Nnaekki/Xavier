<template>
  <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>First Name:</label>
      <input type="text" required v-model="firstname">

      <label>Last Name:</label>
      <input type="text" required v-model="lastname">

      <label>Password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
   
      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
      </div>

      <div class="discount">
        <input type="checkbox" v-model="discount">
        <label>Get exclusive discounts</label>
        <p>Sign up for updates via email. Unsubscribe anytime</p>
      </div>
   
   <div class="submit">
    <button>Create Account </button>
   </div>
    </form>
  </template>

  <script>
  export default{
    data(){
      return{
        email:'',
        firstname:'',
        lastname:'',
        password:'',
        terms: false,
        discount: false,
        passwordError:''
      }
    },
    methods:{
      handleSubmit(){
        this.passwordError = this.password.length > 5 ? 
        '' : 'Password must be at least 6 characters long '
    // //  if(!this.passwordError){

    //  }
      }
    }
  }
</script>
<style lang="scss" scoped>
  form{
    max-width: 420px;
    margin: 10px auto 50px;
    background: black ;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label{
    color: #aaa;
    display: inline-block;
    margin: 10px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  p{
    color: #aaa;
    font-size: 0.6em;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
  }
  h1{
    color: black;
    text-align: center;
    margin-top: 80px;
    border: 20px;
  }
  input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type='checkbox']{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  button{
    background: #00afea;
    position: relative;
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
    top: 20px;
  }
  .submit{
    text-align: center;
  }

  .error{
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>
  