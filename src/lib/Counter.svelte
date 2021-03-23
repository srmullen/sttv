<script lang="ts">
  import { count } from './stores';

  export let id: string;

  const increment = () => {
    $count += 1
  }
</script>

<button 
  {id} 
  on:click={increment}
  data-testid={id}
  class="text-[#ff3e00] bg-[#ff3e00] bg-opacity-10 rounded-full py-4 px-8 border-2 border-transparent outline-none w-48 tabular-nums active:bg-[#ff3e00] active:bg-opacity-20 focus:border-opacity-100"
>
  Clicks: {$count}
</button>