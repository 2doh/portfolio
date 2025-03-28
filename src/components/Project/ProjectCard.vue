<template>
  <div class="projectcard-wrap">
    <div class="projectcard-inner">
      <img
        :src="
          projects.pic ? require(`../../assets/image/${projects.pic}`) : null
        "
        class="projectcard-top"
      />
      <div class="projectcard-bottom">
        <div class="projectcard-bottom-title">{{ projects.title }}</div>
        <div class="projectcard-bottom-subtitle">{{ projects.sub }}</div>
        <div class="projectcard-bottom-tag-container">
          <div class="projectcard-bottom-tag-type">{{ projects.type }}</div>
          <div class="projectcard-bottom-tag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    projects: Object,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.projectcard-wrap {
}
.projectcard-inner {
}
.projectcard-top {
  border: 1px solid #000000;
  border-radius: 8px;
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
.projectcard-bottom-subtitle {
}
.projectcard-bottom-tag-container {
  margin-top: 5px;
}
.projectcard-bottom-tag-type {
}
.projectcard-bottom-tag {
}
</style>
