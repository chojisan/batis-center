import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/main.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import NotificationPlugin from "@/components/bootstrap/NotificationPlugin/index";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(NotificationPlugin);
  }
};