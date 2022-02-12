<template>
  <div id="circle" class="repeat-bg"></div>
  <div id="home" class="element">
    <!-- <div id="circle"></div> -->
    <!-- <div id="circle" class="repeat-bg"></div> -->

    <!-- <header class="element"> -->
      <!-- <header>
        <h1>color converter</h1>
      </header> -->

    <main>
      <header>
        <h1>color converter</h1>
      </header>

      <color-converter @pin:color="pinColor" />
      <color-gallery :colors="colors" @remove:color="removeColor"  />

      <router-link to="/employees">Go to About</router-link>

    </main>
  
  </div>
  <!-- <div id="circle" class="repeat-bg"></div> -->
</template>

<script>
  import ColorConverter from '../components/ColorConverter.vue'
  import ColorGallery from '../components/ColorGallery.vue'

  export default {
    name: 'home',
    components: {
      ColorConverter,
      ColorGallery,
    },
    data() {
      return {
        colors: [],
      }
    },
    methods: {
      pinColor(color) {
        if (!this.colors.find(c => c.hex === color.hex || c.rgb === color.rgb)) {
          this.colors.push({...color})
        }
      },
      removeColor(color) {
        this.colors = this.colors.filter(c => !(c.hex === color.hex || c.rgb === color.rgb))
      },
    },
  }
</script>

<style scoped>
  #home {
    @apply m-0 p-0 h-screen;
    background-color: #CFF2D4;
  }

  main {
    @apply container mx-auto pt-8 px-4 lg:w-1/2 xl:w-1/3 font-serif;
  }

  header {
    padding: 1rem;
    padding-top: 0;
  }

  header h1 {
    @apply text-5xl text-emerald-500;
    font-family: 'Potta One', cursive;
    /* color: #8C5F95; */
    /* color: #2fa781; */
    margin: 0;
    padding: 0;
  }

  .small-container {
    max-width: 680px;
  }

  .repeat-bg {
    height: 0;
    overflow: hidden;
  }

  #circle {
    float: left;
    height: 50px;
    width: 50px;
    shape-outside: circle(100%);
    shape-margin: 1rem;
    clip-path: circle(50% at 50% -4px);
    /* shape-outside: ellipse(50px 35px);
    clip-path: ellipse(50px 35px at 50% 0); */
    /* background: linear-gradient(to top right, #FDB171, #FD987D); */
    /* background-color: #f36f63; */
    /* background-color: #9FE5A9; */
    background-color: #FCF6EE;
  
    /* float: left;
    height: 50px;
    width: 50px;
    shape-outside: circle(100%);
    shape-margin: 1rem;
    clip-path: circle(100% at 50% 0);
    background: linear-gradient(to top right, #FDB171, #FD987D); */
  }
  .element {
    background: -moz-element(#circle) repeat-x;
    /* background-image: -moz-element(#circle);
    background-repeat: repeat-x; */
    /* height: 50px; */
  }
</style>
