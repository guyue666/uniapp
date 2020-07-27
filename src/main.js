import Vue from 'vue'
import App from './App'
import {myRequest, log} from './pages/util/api.js'

Vue.filter("formatDate",(data)=>{
    let data_ = new Date(data)
    let year = data_.getFullYear();
    let month = data_.getMonth();
    let day = data_.getDay();
    return year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0)

})
Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest
Vue.prototype.$log = log
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
