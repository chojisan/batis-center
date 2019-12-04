import BaseButton from "@/components/bootstrap/BaseButton";
import BaseNav from "@/components/bootstrap/BaseNav";
import BaseInput from "@/components/bootstrap/BaseInput";
import Card from "@/components/bootstrap/Card";
import Icon from "@/components/bootstrap/Icon";

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};