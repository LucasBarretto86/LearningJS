// @ts-ignore
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'Svelte'
  }
});

export default app;
