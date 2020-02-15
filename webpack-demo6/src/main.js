import App from './App.vue'
// import Vue from 'vue/dist/vue'

//使用webpack配置完整版vue.js
import Vue from 'vue'
// new Vue({
//     el: '#app',
//     //完整写法
//     // render:function(h){
//     //     return h(App)}
//     //简写2
//     render: h => h(App)
//     //简写1
//     // render:h=>{return h(App)}
//     // }
//     // template: '<App/>',
//     // ,
//     // components: {
//     //     App
//     // }
// })


new Vue({render:h=>h(App)}).$mount('#app')