<template>
  <div class="profile-skills-wrap">
    <div class="profile-skills-container">
      <div class="profile-skills-cate">
        <div
          v-for="(item, index) in iconArr"
          :key="item.name"
          class="profile-skills-cate-wrap"
          :class="{
            active: selectedIndex === index,
            faded: selectedIndex !== index && selectedIndex !== null,
          }"
          @click="handleClick(index)"
        >
          <img
            class="icon"
            :class="{
              active: selectedIndex === index,
              faded: selectedIndex !== index && selectedIndex !== null,
            }"
            :src="item.icon"
            loading="lazy"
          />
          <p class="profile-skills-cate-title">{{ item.skill }}</p>
        </div>
      </div>
      <div class="profile-skills-desc" v-if="selectedSkill">
        <div>
          <p class="profile-skills-desc-title">
            {{ skill[selectedIndex]?.title }}
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
import { computed, defineComponent, ref } from "vue";
import skills from "../../apis/skills.json";
import reactIcon from "@/assets/icons/react.svg";
import jsIcon from "@/assets/icons/js.svg";
import gitIcon from "@/assets/icons/github.svg";
import styledIcon from "@/assets/icons/styled.svg";
import apiIcon from "@/assets/icons/api.svg";
import htmlIcon from "@/assets/icons/html.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import stateIcon from "@/assets/icons/redux.svg";
import ideaIcon from "@/assets/icons/idea.svg";

export default defineComponent({
  setup() {
    const iconArr = [
      { icon: reactIcon, skill: "ReactJS" },
      { icon: jsIcon, skill: "JavaScript (ES6)" },
      { icon: gitIcon, skill: "Git / Github" },
      { icon: styledIcon, skill: "Style" },
      { icon: apiIcon, skill: "Rest API" },
      { icon: htmlIcon, skill: "HTML5" },
      { icon: typescriptIcon, skill: "TypeScript" },
      { icon: stateIcon, skill: "State" },
      { icon: ideaIcon, skill: "Idea" },
    ];
    const skill = ref(skills);
    const selectedIndex = ref(0);
    const selectedSkill = computed(() => skill.value[selectedIndex.value]);
    const handleClick = index => {
      selectedIndex.value = index;
    };
    return { iconArr, skill, selectedIndex, handleClick, selectedSkill };
  },
});
</script>

<style lang="scss" scoped>
.profile-skills-wrap {
  width: 100%;
  height: auto;
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
  justify-content: center;
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
}

.profile-skills-cate-wrap.faded {
  opacity: 0.5;
  height: 64px;
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
  transition: all 0.3s ease;
  min-height: 130px;
  overflow-y: auto;
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
  .profile-skills-cate {
    gap: 15px;
  }
}
</style>
