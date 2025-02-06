<script>
  import { count } from '../stores/counter';
</script>

<button on:click={() => count.set(0)}>Reset</button>
