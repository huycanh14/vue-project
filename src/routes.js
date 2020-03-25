import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
    { 
      path: "/",
      name: "homeLink",
      components: {
        default: Home,
        "ordering-guide": OrderingGuide,
        "delivery": Delivery,
        "history": History,
      }
    },
    { path: "/menu", component:  Menu, name: "menuLink" },
    { path: "/admin", component:  Admin, name: "adminLink", beforeEnter: (to, from, next) => {
      alert('This area is for authorised users only, please login to continuse.');
      next();
    } },
    { path:"/about", component: About, children:[
      { path:'/contact', component: Contact, name: "contactLink" },
      { path:'/history', component: History, name: "historyLink" },
      { path:'/delivery', component: Delivery, name: "deliveryLink" },
      { path:'/ordering-guide', component: OrderingGuide, name: "orderingGuideLink" },
    ], name: "aboutLink"},
    { path: "*", redirect: "/" },
];
