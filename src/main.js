import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/*
import 'font-awesome/css/font-awesome.min.css'
*/

Vue.config.productionTip = false;

router.beforeEach ( ( to , from , next ) => {
    document.title ="软件 "+" | "+ to.name;
    next ()
} );
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue ( {
  el : '#app' ,
  router ,
  template : '<App/>' ,
  components : { App }
} )
