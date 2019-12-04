<template>
  <div class="wrapper">
    <header-nav></header-nav>
    <header-slider></header-slider>
    <about></about>
    <spacer color="warning"></spacer>
    <contact></contact>
    <bottom-footer></bottom-footer>
    <site-footer></site-footer>
  </div>
</template>

<script>
import HeaderNav from "@/views/components/HeaderNav";
import HeaderSlider from "@/views/components/HeaderSlider";
import About from "@/views/components/About";
import Spacer from "@/views/components/Spacer";
import Contact from "@/views/components/Contact";
import BottomFooter from "@/views/components/Bottom";
import SiteFooter from "@/views/components/Footer";
export default {
  name: "landing",
  components: {
    HeaderNav,
    HeaderSlider,
    About,
    Spacer,
    Contact,
    BottomFooter,
    SiteFooter
  }
};
</script>