<template>
    <h1>Contact Us</h1>
    <form>
      <label>Email:</label>
      <input type="email" required v-model="email">

      <label>Username:</label>
      <input type="text" required v-model="username">

      <label>Message</label>
      <textarea required v-model="message" placeholder="Enter Message Here"></textarea>
      <div class="submit">
    <button>Submit Message </button>
   </div>
    </form>
  </template>

  <script>
  export default{
    data(){
      return{
        email:'',
        username:'',
        message: '',
      }
    },
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
    margin: 25px 0 15px;
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
  input,
  textarea{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
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

</style>