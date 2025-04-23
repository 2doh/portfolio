<template>
  <span class="Title">{{ title[index] }}</span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectTitle",
  props: { title: Array, index: Number },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.Title {
  font-size: 30px;
  font-weight: 700;
}
</style>
