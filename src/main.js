import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import App from './App.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  hash: false,
  mode: 'history',
  //scrollBehavior (to, from, savedPosition) {
    // return {x: 0, y: 200}
    // return { selector: '.btn' }
    /*if(savedPosition){
      return savedPosition;
    } else {
      return {x: 0, y: 0}
    }*/
  //   if(to.hash){
  //     return{
  //       selector: to.hash
  //     }
  //   }
  // }
});

// router.beforeEach((to, from, next)  => {
//   // console.log(to);
//   // console.log(from);
//   // next();
//   if(to.path === "/menu"){
//     next();
//   } else {
//     next(false);
//   }
// });
// router.afterEach((to, from)  => {
    // alert("After each");
// });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
