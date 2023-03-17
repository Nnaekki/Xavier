<template>
    <div class="dashboard">
      <h1>Hello</h1>
      <span v-if="user">{{ user.email }}</span>
      <p> This is your dashboard</p>
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
}
</script>

<style lang="scss" scoped>
*{
  margin-top: 80px;
}

.dashboard{
  padding: 10px;
  justify-content: center;
  text-align: center;
}
</style>
  