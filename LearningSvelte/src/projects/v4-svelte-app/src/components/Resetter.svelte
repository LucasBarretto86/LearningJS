<script>
  import { count } from '../stores/countStore';
</script>

<button on:click={() => count.set(0)}>Reset</button>
