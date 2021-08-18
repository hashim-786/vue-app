import { createApp } from 'vue';

import App from './App.vue'
import BaseCard from './UI/BaseCard.vue'
import BaseButton from './UI/BaseButton.vue'
import TheError from './UI/TheError.vue'
const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('the-error', TheError)
app.mount('#app')
