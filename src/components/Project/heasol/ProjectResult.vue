<template></template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Portfolio from "../Projects/Portfolio.vue";

export default defineComponent({
  name: "ProjectResult",
  components: {},
  setup() {
    const store = useStore();
    const featureSelected = computed(
      () => store.getters["featureCard/getSelected"],
    );

    let initData = {};

    if (featureSelected.value === "portfolio") {
      initData = Portfolio;
    }
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
