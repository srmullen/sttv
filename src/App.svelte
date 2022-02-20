<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
</script>

<main class="text-center p-4 mx-0">
  <img width="100" height="100" src={logo} alt="Svelte Logo" class="inline-block" />
  <h1 class="text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs">Hello Vite!</h1>

  <Counter id="0" />

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Visit <a class="text-red-600 hover:underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p class="max-w-xs sm:max-w-none my-4 mx-auto leading-5">
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>

  <div class="text-red-500 p-2">
    <a href="https://svelte.dev/" target="_blank" class="p-2 hover:underline">Svelte</a> +
    <a href="https://tailwindcss.com/" target="_blank" class="p-2 hover:underline">Tailwind CSS</a> +
    <a href="https://www.typescriptlang.org/" target="_blank" class="p-2 hover:underline">TypeScript</a> +
    <a href="https://vitejs.dev/" target="_blank" class="p-2 hover:underline">Vite</a>
  </div>
</main>

<style>
  :root {
    --svelte-rgb: 255, 62, 0;
  }

  h1 {
    color: rgb(var(--svelte-rgb));
  }
</style>

<!-- <style global style lang="postcss">
  
</style> -->