<template>
  <div class="wrap">
    <div class="intro">
      <ProjectTitle :title="titleArr" :index="0" />
      <IntroHaesol />
    </div>
    <!-- <div class="result">
      <ProjectTitle :title="titleArr" :index="1" />
      <ProjectResult />
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import IntroHaesol from "../heasol/IntroHaesol.vue";
import ProjectResult from "../heasol/ProjectResult.vue";

export default defineComponent({
  name: "Portfolio",
  components: {
    ProjectTitle,
    IntroHaesol,
  },
  setup() {
    const titleArr = ["소개 및 기획의도", "성과"];
    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
