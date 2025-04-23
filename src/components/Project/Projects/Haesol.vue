<template>
  <div class="haesol-wrap">
    <div class="haesol-intro">
      <ProjectTitle :title="titleArr" :index="0" class="title" />
      <IntroHaesol />
    </div>
    <div class="haesol-presentation margin-top-20">
      <ProjectTitle :title="titleArr" :index="1" />
      <FrameHaesol />
    </div>
    <div class="haesol-corefunction margin-top-20">
      <ProjectTitle :title="titleArr" :index="2" />
      <CoreFunctionHaesol />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import IntroHaesol from "../heasol/IntroHaesol.vue";
import FrameHaesol from "../heasol/FrameHaesol.vue";
import CoreFunctionHaesol from "../heasol/CoreFunctionHaesol.vue";

export default defineComponent({
  name: "Haesol",
  components: { ProjectTitle, IntroHaesol, FrameHaesol, CoreFunctionHaesol },
  setup() {
    const titleArr = [
      "소개 및 기획의도",
      "발표",
      "담당기능",
      "기여도",
      "기술스택",
      "성과",
    ];

    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
