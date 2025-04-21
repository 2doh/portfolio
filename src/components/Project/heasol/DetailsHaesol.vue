<template>
  <ShortcutBtn v-for="(item, index) in BtnArr" :key="index" :data="item" />
</template>

<script>
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailsHaesol",
  components: { ShortcutBtn },
  setup() {
    const BtnArr = [
      {
        title: "2차 프로젝트 노션",
        icon: "mingcute:notion-fill",
        href: "https://www.notion.so/2-HAESOL-613a41f133324a2fa3f7a342110f0cfe",
      },
    ];
    return { BtnArr };
  },
});
</script>

<style lang="scss" scoped></style>
