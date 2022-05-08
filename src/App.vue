<template>
  <div class="slideArea">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <div class="ctrlArea">
      <button @click="lastPage" class="control">
        <div class="arrow arrow-left">
        </div>
      </button>
      <button @click="nextPage" class="control">
        <div class="arrow arrow-right">
        </div>
      </button>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/page2">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/page3">Link</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      pageIndex: 0,
      enter: "",
      leave: ""
    }
  },
  methods: {
    nextPage() {
      // console.log(this.$router, this.$route);
      let routes = this.$router.getRoutes();
      if (this.pageIndex < routes.length-1) {
        this.pageIndex++;
      } else {
        this.pageIndex = 0
      }
      this.$router.push(routes[this.pageIndex]);
      this.enter = "300px";
      this.leave = "-300px";
    },
    lastPage() {
      let routes = this.$router.getRoutes();
      if (this.pageIndex > 0) {
        this.pageIndex--;
      } else {
        this.pageIndex = routes.length-1
      }
      this.$router.push(routes[this.pageIndex]);
      this.enter = "-300px";
      this.leave = "300px";
    }
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
::-webkit-scrollbar{
  width: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.dropdown:hover .dropdown-menu {
  display: block;
}

.page-enter-from{
  opacity: 0;
  transform: translateX(v-bind(enter));
}
.page-enter-to{
  opacity: 1;
  transform: translateX(0);
}
.page-enter-active{
  transition: all 0.2s ease;
}
.page-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.page-leave-to{
  opacity: 0;
  transform: translateX(v-bind(leave));
}
.page-leave-active{
  transition: all 0.2s ease;
}
</style>
