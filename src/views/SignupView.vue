<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Username:</label>
    <input type="text" required v-model="username">

    <label>Password:</label>
    <input type="password" required v-model="password">

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
    <div v-if="error">{{ error }}</div>
  </form>
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
    const terms = ref(false)
    const discount = ref(false)
    const error = ref(null)



    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
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
      terms,
      discount,
      handleSubmit,
      error
    }
  },

}
</script>
<style lang="scss" scoped>
form {
  max-width: 420px;
  margin: 10px auto 50px;
  background: black;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 10px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

p {
  color: #aaa;
  font-size: 0.6em;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
}

h1 {
  color: black;
  text-align: center;
  margin-top: 80px;
  border: 20px;
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

input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

button {
  background: #00afea;
  position: relative;
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  top: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
  