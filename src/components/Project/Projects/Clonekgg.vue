<template>
  <div class="wrap">
    <div class="intro">
      <ProjectTitle :title="titleArr" :index="0" />
      <IntroHaesol />
    </div>
    <!-- <div class="etc">
      <ProjectTitle :title="titleArr" :index="1" />
      <Etc />
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import IntroHaesol from "../heasol/IntroHaesol.vue";
import Etc from "../heasol/Etc.vue";

export default defineComponent({
  name: "Clonekgg",
  components: {
    ProjectTitle,
    IntroHaesol,
    Etc,
  },
  setup() {
    const titleArr = ["상세", "원본 사이트"];
    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
