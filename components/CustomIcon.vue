<script>
import { h } from "vue";
import { NIcon } from "naive-ui";

export default {
  setup(props) {
   console.log(props);
   console.log((() => import("naive-ui")));
    return () => {
      h(NIcon, null, { default: () => h((() => import("naive-ui"))[props.iconName]) });
    };
  },
};
</script>

<style lang="scss" scoped></style>
