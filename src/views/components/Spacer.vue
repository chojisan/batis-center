<template>
  <section class="section section-lg section-shaped my-0 overflow-hidden pt-lg-0 banner-spacer">
    <div class="shape shape-style-1 shape-skew" :class="{[`bg-gradient-${color}`]: color} ">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "spacer",
  props: {
    color: {
      type: String,
      description: "Spacer background gradient type (warning,danger etc)"
    }
  }
};
</script>