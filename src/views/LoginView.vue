<template>
  <h4>Welcome</h4>
  <h6>Please log in to your account below</h6>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">

    <div class="submit">
      <button>Submit</button>
    </div>
    <div class="signup">
      <label>Don't have an account yet? <RouterLink to="/signup">Sign up here</RouterLink></label>
      <p><a href="#">Forgot your password?</a></p>
    </div>
  </form>
  <div v-if="error">{{ error }}</div>

</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const error = ref(null)



    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          username: username.value,
          password: password.value
        })
        router.push('/')

      } catch (err) {
        error.value = err.message

      }


    }

    return {
      email,
      username,
      password,
      handleSubmit,
      error
    }
  },

}
</script>

<style lang="scss" scoped>
form {
  max-width: 300px;
  margin: 20px auto;
  background: black;
  text-align: left;
  padding: 20px 40px;
  border-radius: 10px;
  padding-top: 20px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 35px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;

}

p {
  color: #aaa;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
}

h4 {
  color: black;
  text-align: center;
  margin-top: 80px;
}

h6 {
  color: black;
  text-align: center;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  width: 100px;
  position: relative;
  top: 20px;
  background: #00afea;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}</style>
  