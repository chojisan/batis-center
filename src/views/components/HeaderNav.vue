<template>
  <base-nav
    :class="{'navbar-transparent': scrollPosition < 1, 'bg-gradient-danger shadow-bottom': scrollPosition > 1}"
    class="navbar-main navbar-top navbar-horizontal fixed-top py-2"
    type
    effect="dark"
    expand
  >
    <router-link slot="brand" class="navbar-brand" to="/">
      <img src="assets/img/logo/batis.png" />
    </router-link>

    <div class="row" slot="content-header" slot-scope="{closeMenu}">
      <div class="col-6 collapse-brand">
        <a href="#">
          <img src="assets/img/logo/batis.png" />
        </a>
      </div>
      <div class="col-6 collapse-close">
        <close-button @click="closeMenu"></close-button>
      </div>
    </div>

    <ul class="nav navbar-nav navbar-nav-hover align-items-lg-center ml-auto">
      <li class="nav-item px-2">
        <router-link to="/" class="nav-link">HOME</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#about-us" class="nav-link">ABOUT US</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#what-we-do" class="nav-link">WHAT WE DO</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#activities" class="nav-link">NEWS &amp; ARTICLES</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#officers" class="nav-link">OFFICERS</router-link>
      </li>
      <li class="nav-item px-2">
        <router-link to="#contact" class="nav-link">CONTACT</router-link>
      </li>
    </ul>
  </base-nav>
</template>

<script>
import CloseButton from "@/components/bootstrap/CloseButton";

export default {
  name: "navigation",
  components: {
    CloseButton
  },
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>