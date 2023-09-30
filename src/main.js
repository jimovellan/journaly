import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/styles/styles.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faRightFromBracket,faPlus,faTrashAlt,faUpload } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faRightFromBracket,faPlus,faTrashAlt,faUpload)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
