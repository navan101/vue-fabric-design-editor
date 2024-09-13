import { createApp } from 'vue'
import Editor from "@navasia/editor";
import "@navasia/editor/styles.css";

import App from './App.vue'

const app = createApp(App)

app.use(Editor, {
  name: "Editor"
})

app.mount('#app')
