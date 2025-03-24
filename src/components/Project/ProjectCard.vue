<template>
  <div class="projectcard-wrap">
    <img class="projectcard-top" src="../../assets/image/haesolwordtest.png" />
    <div class="projectcard-bottom">
      <div class="projectcard-bottom-title">해솔</div>
      <div class="projectcard-bottom-tag-container"></div>
      <div class="projectcard-bottom-sub"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.projectcard-wrap {
  border-radius: 8px;
  overflow: hidden;
}
.projectcard-top {
  width: 100%;
  background: no-repeat center;
  background-size: cover;
  object-fit: cover;
}
.projectcard-bottom {
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  background-color: white;
}

.projectcard-bottom-title {
  font-size: 16px;
  font-weight: bold;
}

.projectcard-bottom-tag-container {
  margin-top: 5px;
}
</style>
