<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Tailwind from './Tailwind.svelte';
</script>

<Tailwind />

<main class="text-center p-4 mx-0">
  <img src={logo} alt="Svelte Logo" class="w-64 h-64 inline-block" />
  <h1>Hello Vite!</h1>

  <Counter id="0" />

  <p class="max-w-xs my-4 mx-auto leading-5">
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p class="max-w-xs my-4 mx-auto leading-5">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  } */

  /* img {
    height: 16rem;
    width: 16rem;
  } */

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  /* p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  } */

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
