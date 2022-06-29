import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import "../index.css"
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faRight } from "@fortawesome/free-solid-svg-icons";

// library.add(faRight);

const app = createApp(App)


app.use(router)
.mount('#app')
// .component("font-awesome-icon", FontAwesomeIcon)
