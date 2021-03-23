<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Tailwind from './Tailwind.svelte';
</script>

<Tailwind />

<main class="text-center p-4 mx-0">
  <img width="100" height="100" src={logo} alt="Svelte Logo" class="inline-block" />
  <h1 class="text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs">Hello Vite!</h1>

  <Counter id="0" />

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    --svelte-rgb: 255, 62, 0;
  }

  h1 {
    color: rgb(var(--svelte-rgb));
  }
</style>