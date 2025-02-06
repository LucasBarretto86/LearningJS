<script>
  import { count } from '../stores/counter';
</script>

<button on:click={() => count.update((n) => n + 1)}>+</button>
