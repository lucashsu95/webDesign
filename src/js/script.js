const { ref, createApp } = Vue
import { main_data } from './data.js';

const app = createApp({
  setup() {
    const navToggleFlag = ref(false)
    const main = ref(main_data)
    
    return {
      navToggleFlag,
      main
    }
  }
});

app.mount("#app");
