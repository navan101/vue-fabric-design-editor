import { createApp } from 'vue'
import Editor from "@navasia/editor";
import "@navasia/editor/styles.css";
import router from './router';

import App from './App.vue'

const app = createApp(App)

app.use(Editor, {
  name: "Editor"
});
app.use(router as any);
app.mount('#app');
