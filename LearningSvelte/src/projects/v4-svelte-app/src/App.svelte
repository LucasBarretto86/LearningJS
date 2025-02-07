<script>
  import { count } from './stores/customCounterStore';

  const { increment, decrement, reset } = count;
</script>

<h1>The count is {$count}</h1>

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>
