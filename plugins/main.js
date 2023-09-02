import Vue from 'vue'
import VueGtag from 'vue-gtag'
import router from '@/router'

Vue.use(VueGtag, {
    config: {
        id: 'G-37KS1X85N3',
        params: {
            send_page_view: false
        }
    }
}, router)