<template>
  <div class="profile-skills-wrap">
    <div class="profile-skills-container">
      <div class="profile-skills-cate">
        <div
          v-for="(item, index) in iconArr"
          :key="index"
          class="profile-skills-cate-wrap"
          :class="{
            active: selectedIndex === index,
            faded: selectedIndex !== index && selectedIndex !== null,
          }"
          @click="handleClick(index)"
        >
          <Icon
            class="icon"
            :class="{
              active: selectedIndex === index,
              faded: selectedIndex !== index && selectedIndex !== null,
            }"
            :icon="item.name"
          />
          <p class="profile-skills-cate-title">{{ item.skill }}</p>
        </div>
      </div>
      <div class="profile-skills-desc"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import skills from "../../apis/skills.json";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: { Icon },
  setup() {
    const iconArr = [
      { name: "skill-icons:react-dark", skill: "ReactJS" },
      { name: "devicon:javascript", skill: "JavaScript (ES6)" },
      { name: "octicon:mark-github", skill: "Git / Github" },
      { name: "vscode-icons:file-type-styled", skill: "Style" },
      { name: "hugeicons:api", skill: "Rest API" },
      { name: "devicon:html5-wordmark", skill: "HTML5" },
      { name: "devicon:typescript", skill: "TypeScript" },
      { name: "flat-color-icons:idea", skill: "ETC" },
    ];
    const skill = ref(skills);
    const selectedIndex = ref(null);

    const handleClick = index => {
      selectedIndex.value = index;
    };
    return { iconArr, skill, selectedIndex, handleClick };
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
  /* flex-direction: column;
  align-items: center; */
}
.profile-skills-cate {
  display: flex;
  gap: 15px;
  min-width: 586px;
  /* justify-content: space-between; */
}
.profile-skills-cate-wrap {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.profile-skills-cate-wrap.faded {
  opacity: 0.5;
}
.profile-skills-cate-wrap.active {
  opacity: 1;
  font-weight: bold;
}
.profile-skills-cate-title {
  font-weight: 400;
  font-size: 14px;
}
.icon {
  width: 40px;
  height: 40px;
}
.icon.faded {
  width: 20px;
  height: 20px;
}
.icon.active {
  width: 50px;
  height: 50px;
}
</style>
