<template>
  <div id="not-found">
    <main>
      <h1>404</h1>

      <p class="sub">This page doesn't exist.</p>

      <p>Try one of these instead:</p>

      <nav>
        <ul>
          <li class="colors"><router-link to="/">Color Converter</router-link></li>
          <li class="employees"><router-link to="/employees">Employees</router-link></li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'not-found',
  }
</script>

<style scoped lang="scss">
  #not-found {
    @apply m-0 p-0 min-h-screen bg-neutral-200 flex font-sans text-center text-lg;

    main {
      @apply container self-center mx-auto pb-32 lg:w-1/3;
    }

    h1 {
      @apply text-9xl font-bold mt-8 mb-4;
    }

    .sub {
      @apply text-2xl mb-8;
    }

    nav {
      @apply my-4;

      .colors {
        @apply font-display lowercase text-emerald-500 text-xl mb-1;

        a {
          @apply hover:underline hover:text-emerald-600;
        }
      }

      .employees {
        @apply font-serif text-stone-600;

        a {
          @apply hover:underline hover:text-stone-500;
        }
      }
    }
  }
</style>
