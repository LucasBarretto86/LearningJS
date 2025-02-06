<script>
  import { counter } from '../stores/counter';
</script>

<p>Count: {$counter}</p>

<button on:click={() => $counter.update((n) => n + 1)}> Increment </button>
