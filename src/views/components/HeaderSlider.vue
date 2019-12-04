<template>
  <header
    id="carouselSlider"
    class="masthead text-center text-white d-flex carousel slide"
    data-ride="carousel"
  >
    <b-carousel id="carouselHeaderSlider" controls indicators>
      <!-- Text slides with image -->
      <b-carousel-slide v-for="slider in headerSliders" :key="slider.id" :img-src="slider.image"></b-carousel-slide>
    </b-carousel>
  </header>
</template>

<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      headerSliders: [
        {
          id: 1,
          image: "assets/img/slider/slider-01.jpg"
        },
        {
          id: 2,
          image: "assets/img/slider/slider-02.jpg"
        },
        {
          id: 3,
          image: "assets/img/slider/slider-03.jpg"
        },
        {
          id: 4,
          image: "assets/img/slider/slider-04.jpg"
        },
        {
          id: 5,
          image: "assets/img/slider/slider-05.jpg"
        },
        {
          id: 6,
          image: "assets/img/slider/slider-06.jpg"
        },
        {
          id: 7,
          image: "assets/img/slider/slider-07.jpg"
        },
        {
          id: 8,
          image: "assets/img/slider/slider-08.jpg"
        },
        {
          id: 9,
          image: "assets/img/slider/slider-09.jpg"
        },
        {
          id: 10,
          image: "assets/img/slider/slider-10.jpg"
        },
        {
          id: 11,
          image: "assets/img/slider/slider-11.jpg"
        },
        {
          id: 12,
          image: "assets/img/slider/slider-12.jpg"
        },
        {
          id: 13,
          image: "assets/img/slider/slider-13.jpg"
        },
        {
          id: 14,
          image: "assets/img/slider/slider-14.jpg"
        }
      ]
    };
  }
};
</script>