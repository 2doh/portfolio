<template>
  <div class="profile-skills-wrap">
    <div class="profile-skills-container">
      <div class="profile-skills-cate">
        <div class="profile-skills-cate-wrap">
          <div class="profile-skills-cate-icon"></div>
          <p class="profile-skills-cate-title"></p>
        </div>
      </div>
      <div class="profile-skills-desc"></div>
    </div>
    <!-- <Icon icon="flat-color-icons:idea" width="32" height="32" /> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import skills from "../../apis/skills.json";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: { Icon },
  setup() {
    return {};
  },
  mounted() {
    const iconArr = [
      { name: "skill-icons:react-dark" },
      { name: "devicon:javascript" },
      { name: "octicon:mark-github" },
      { name: "vvscode-icons:file-type-scss" },
      { name: "hugeicons:api" },
      { name: "devicon:html5-wordmark" },
      { name: "devicon:typescript" },
      { name: "flat-color-icons:idea" },
    ];
    // console.log(skills, iconArr);
  },
});
</script>

<style lang="scss" scoped>
.profile-skills-wrap {
  width: 100%;
  height: auto;
}
.profile-skills-container {
  display: flex;
}
</style>
