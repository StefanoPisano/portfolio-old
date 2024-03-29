import routes from './router/routes'
import App from './App.vue'
import {createApp} from "vue";

import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faHeadphones, faLink, faPlus, faRotateLeft, faTimes} from '@fortawesome/free-solid-svg-icons'

import './registerServiceWorker'

/* add icons to the library */
library.add(faHeadphones, faRotateLeft, faTimes, faLink, faPlus)


const app = createApp(App);
app.config.globalProperties.$theme = 'default'
app.config.globalProperties.$routes = routes

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');