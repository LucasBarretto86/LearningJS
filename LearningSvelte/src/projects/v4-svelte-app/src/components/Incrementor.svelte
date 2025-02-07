<script>
  import { count } from '../stores/countStore';
</script>

<button on:click={() => count.update((n) => n + 1)}>+</button>
