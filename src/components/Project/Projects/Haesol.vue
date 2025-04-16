<template>
  <div class="haesol-wrap">
    <div class="haesol-intro">
      <ProjectTitle :title="titleArr" :index="0" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectTitle from "../ProjectTitle.vue";

export default defineComponent({
  name: "Haesol",
  components: { ProjectTitle },
  setup() {
    const titleArr = [
      "소개 및 기획의도",
      "발표",
      "상세내용",
      "핵심기능",
      "기술스택",
      "성과 및 기여도",
    ];

    return { titleArr };
  },
});
</script>

<style lang="scss" scoped></style>
