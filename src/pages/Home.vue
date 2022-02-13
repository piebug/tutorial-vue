<template>
  <div id="home" class="page">
    <div id="circle" class="repeat-bg"></div>

    <main>
      <h1>color converter</h1>

      <color-converter @pin:color="pinColor" />
      <color-gallery :colors="colors" @remove:color="removeColor"  />
    </main>

    <div id="footer"><div id="circle-b" class="repeat-bg"></div></div>
  </div>

  <div id="home-footer">
    <footer>
      <a class="made-by" href="https://github.com/pies-n-loaf/tutorial-vue">made by sandy.</a>
      <router-link to="/employees">employees ></router-link>
    </footer>
  </div>
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

<style scoped lang="scss">
  #home {
    @apply m-0 p-0 min-h-screen flex flex-col;
    background-color: #CFF2D4;

    main {
      @apply container mx-auto px-4 lg:w-1/2 xl:w-1/3 grow;

      & > * {
        @apply mb-8;
      }

      h1 {
        @apply text-5xl text-emerald-500 text-center font-display mt-8;
      }
    }
  }

  #home-footer {
    @apply bg-cream;
    height: 101px;

    footer {
      @apply container mx-auto pt-8 px-4 lg:w-1/2 xl:w-1/3 flex flex-row justify-between content-center;

      & > a {
        @apply py-2 px-3 rounded-full font-display text-violet-400 hover:bg-violet-50;
      }

      .made-by {
        @apply text-xl text-emerald-500 hover:bg-emerald-50;
      }
    }
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
    clip-path: circle(50% at 50% -1px);
    background-color: #FCF6EE;
  }

  #circle-b {
    float: left;
    height: 50px;
    width: 50px;
    shape-outside: circle(100%);
    shape-margin: 1rem;
    clip-path: circle(50% at 50% 100%);
    background-color: #FCF6EE;
  }

  .page {
    background: -moz-element(#circle) repeat-x;
  }

  #footer {
    background: -moz-element(#circle-b) repeat-x;
    height: 50px;
    margin-bottom: -1px;
  }
</style>
