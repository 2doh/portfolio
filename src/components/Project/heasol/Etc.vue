<template>
  <div class="shortcut-wrap">
    <ShortcutBtn :data="btnArr"></ShortcutBtn>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import clonekbb from "../../../apis/clonekbb.json";
import clonekgg from "../../../apis/clonekgg.json";
import { useStore } from "vuex";
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";

export default defineComponent({
  name: "Etc",
  components: { ShortcutBtn },
  setup() {
    const store = useStore();
    const featureSelected = computed(
      () => store.getters["featureCard/getSelected"],
    );

    let initData = {};

    if (featureSelected.value === "clonekgg") {
      initData = clonekgg;
    }
    if (featureSelected.value === "clonekbb") {
      initData = clonekbb;
    }

    const btnData = initData.etc[0];

    const btnArr = {
      title: btnData.title,
      icon: btnData.icon,
      href: btnData.original,
    };

    console.log(initData.etc[0].title);
    console.log(btnData);

    return { btnArr };
  },
});
</script>

<style lang="scss" scoped>
.shortcut-wrap {
  margin-top: 10px;
  display: flex;
  padding: 16px;
}
</style>
