<template>
  <div class="wrap">
    <div class="intro">
      <ProjectTitle :title="titleArr" :index="0" />
      <IntroHaesol />
    </div>
    <div class="corefunction margin-top-10">
      <ProjectTitle :title="titleArr" :index="1" />
      <CoreFunctionHaesol />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import CoreFunctionHaesol from "../heasol/CoreFunctionHaesol.vue";
import IntroHaesol from "../heasol/IntroHaesol.vue";

export default defineComponent({
  name: "GV",
  components: {
    ProjectTitle,
    IntroHaesol,
    CoreFunctionHaesol,
  },
  setup() {
    const titleArr = ["소개 및 기획의도", "핵심기능", "성과"];
    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
