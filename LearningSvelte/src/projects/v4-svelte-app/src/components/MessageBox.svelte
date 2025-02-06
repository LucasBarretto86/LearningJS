<script>
  import { createEventDispatcher } from 'svelte';

  let title = 'This is a default title';
  export let body = 'This is a default message';
</script>

<div>
  <h2>{title}</h2>

  <div>
    {body}
  </div>
</div>
