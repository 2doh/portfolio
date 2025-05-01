<template>
  <div class="haesol-wrap">
    <div class="haesol-intro">
      <ProjectTitle :title="titleArr" :index="0" class="title" />
      <IntroHaesol />
    </div>
    <div class="haesol-presentation margin-top-10">
      <ProjectTitle :title="titleArr" :index="1" />
      <FrameHaesol />
    </div>
    <div class="haesol-corefunction margin-top-10">
      <ProjectTitle :title="titleArr" :index="2" />
      <CoreFunctionHaesol />
    </div>
    <div class="haesol-corefunction margin-top-10">
      <ProjectTitle :title="titleArr" :index="3" />
      <Contribution />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import IntroHaesol from "../heasol/IntroHaesol.vue";
import FrameHaesol from "../heasol/FrameHaesol.vue";
import CoreFunctionHaesol from "../heasol/CoreFunctionHaesol.vue";
import Contribution from "../heasol/Contribution.vue";

export default defineComponent({
  name: "Alot",
  components: {
    ProjectTitle,
    IntroHaesol,
    FrameHaesol,
    CoreFunctionHaesol,
    Contribution,
  },
  setup() {
    const titleArr = ["소개 및 기획의도", "발표", "담당기능", "기여도"];

    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
