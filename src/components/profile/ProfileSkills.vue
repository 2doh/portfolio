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
      <div
        class="profile-skills-desc"
        v-if="selectedIndex !== null && skill[selectedIndex]"
      >
        <div v-if="selectedIndex !== null && skill[selectedIndex]">
          <p class="profile-skills-desc-title">
            {{ skill[selectedIndex].title }}
          </p>
          <ul class="profile-skills-desc-content">
            <li class="profile-skills-desc-content-li">
              {{ skill[selectedIndex].exp?.first }}
            </li>
            <li class="profile-skills-desc-content-li">
              {{ skill[selectedIndex].exp?.second }}
            </li>
            <li class="profile-skills-desc-content-li">
              {{ skill[selectedIndex].exp?.third }}
            </li>
          </ul>
        </div>
      </div>
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
      { name: "logos:redux", skill: "State" },
      { name: "flat-color-icons:idea", skill: "Idea" },
    ];
    const skill = ref(skills);
    const selectedIndex = ref(0);

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
  /* display: flex; */
  /* flex-direction: column;
  align-items: center; */
}
.profile-skills-cate {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  /* justify-content: space-between; */
}
.profile-skills-cate-wrap {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  min-width: 100px;
}
.profile-skills-cate-wrap {
  .icon {
    width: 40px;
    height: 40px;
    transition: width 0.3s ease;
  }

  @media (max-width: 1024px) {
    .icon {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 768px) {
    .icon {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    .icon {
      width: 25px;
      height: 25px;
    }
  }
}

.profile-skills-cate-wrap.faded {
  opacity: 0.5;
}
.profile-skills-cate-wrap.active {
  opacity: 1;
}
.profile-skills-cate-title {
  font-weight: 400;
  font-size: 14px;
}
.icon.faded {
  width: 20px;
  height: 20px;
}
.icon.active {
  width: 50px;
  height: 50px;
}
.profile-skills-desc {
  margin-top: 20px;
  min-height: 130px;
}
.profile-skills-desc-title {
  font-size: 21px;
  font-weight: 700;
}
.profile-skills-desc-content {
  margin-top: 10px;
}
.profile-skills-desc-content-li {
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
}
</style>
