<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <h1>Xavier</h1>
      </div>
      <ul v-show="!mobile" class="nav-routes">
       <template v-if="authIsReady">
        <div>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        </div>     
        <!-- logged in users -->
        <div v-if="user">
        <RouterLink class="link" to="/products">Shop</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
        <RouterLink class="link" to="/dashboard">Dashboard</RouterLink>
        <RouterLink class="link" to="/logout" @click="handleClick">Logout</RouterLink>
        </div>
        <!-- logged out users -->
        <div v-if="!user">
<RouterLink class="link" to="/login">Login</RouterLink>
          <RouterLink class="link" to="/signup">Signup</RouterLink>
      </div>
      </template>
        </ul>
      <div class="icon" :class="{ 'icon-active': mobileNav }">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" @click="toggleMobileNav" v-show="mobile" />
      </div>
      <Transition name="slide">
        <ul v-show="mobileNav" class="dropdown-nav">
          <template v-if="authIsReady">
        <!-- <div class="dropdown-nav">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        </div>      -->
        <!-- logged in users -->
        <div v-if="user" class="dropdown-nav">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/products">Shop</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
        <RouterLink class="link" to="/dashboard">Dashboard</RouterLink>
        <RouterLink class="link" to="/logout" @click="handleClick">Logout</RouterLink>
        </div>
        <!-- logged out users -->
        <div v-if="!user" class="dropdown-nav">
          <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
          <RouterLink class="link" to="/signup">Signup</RouterLink>
      </div>
      </template>

        </ul>
      </Transition>
    </nav>
  </header>
</template>

<script>
import { Transition } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "header",
  setup (){
const store = useStore()

const handleClick = () =>{
store.dispatch('logout')
}
return{
  handleClick,
user: computed(()=> store.state.user),
authIsReady: computed(() => store.state.authIsReady)
}
  },
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

  },
 
  components: { Transition }
};
</script>


<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;
  top: 0;


  nav {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1100px) {
      max-width: 1100px;
    }


    ul,
    .link {
      font-weight: 500;
      color: white;
      text-decoration: none;
      list-style: none;

    }

    a {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }


    .branding {
      display: flex;
      align-items: center;

      h1 {
        font-size: 30px;
        transition: .5s ease all;
        cursor: pointer;
      }

    }

    .nav-routes {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
    }

    .icon {
      display: flex;
      position: absolute;
      top: 0;
      align-items: center;
      right: 24px;
      height: 100%;
      cursor: pointer;
      font-size: 20px;
      transition: .8s ease all;

    }

    .icon-active {
      transform: rotate(180deg);
    }


    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;
      gap: 20px;


      a {
        margin-left: 0;
        color: black;
        font-size: 18px;

        .link {
          color: black;
        }
      }
    }

    .slide-enter-from {
      transform: translateX(-250px);
    }

    .slide-enter-to {
      transform: translateX(0);
    }

    .slide-enter-active {
      transition: 1s ease all;

    }

    .slide-leave-from {
      transform: translateX(0);

    }

    .slide-leave-to {
      transform: translate(-250px);
    }

    .slide-leave-active {
      transition: 1s ease all;

    }

  }
}


.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 8px 0;

    .branding {
      h1 {
        font-size: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}</style>