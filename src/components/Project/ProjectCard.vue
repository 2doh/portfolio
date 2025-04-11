<template>
  <div class="projectcard-wrap" @click="projectDescOpen(projects.name)">
    <div class="projectcard-inner">
      <img
        :src="
          projects.pic ? require(`../../assets/image/${projects.pic}`) : null
        "
        class="projectcard-top"
      />
      <div class="projectcard-bottom">
        <span class="projectcard-bottom-title">{{ projects?.title }}</span>
        <span class="projectcard-bottom-subtitle">{{ projects?.sub }}</span>
        <span class="projectcard-bottom-type">{{ projects?.type }}</span>
        <div class="projectcard-bottom-tag-container">
          <div
            v-for="(tag, index) in projects?.tag"
            :key="index"
            class="projectcard-bottom-tag"
            :style="{ backgroundColor: getTagColor(index) }"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import colorData from "../../apis/colors.json";
import Modal from "../common/Modal.vue";

export default defineComponent({
  name: "ProjectCard",
  components: { Modal },
  props: {
    projects: Object,
  },
  emits: [`projectDescOpen`],
  setup(props, { emit }) {
    const colors = ref(colorData.colors);
    // console.log(colorData.colors);
    const getTagColor = index => colors.value[index % colors.value.length];

    const projectDescOpen = value => {
      emit(`projectDescOpen`, value);
    };

    return {
      getTagColor,
      projectDescOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

span {
  display: block;
}
.projectcard-wrap {
  margin: 5px 0 5px;
  border: 1px solid $stroke-color;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}
.projectcard-inner {
}
.projectcard-top {
  width: 100%;
  background: no-repeat center;
  background-size: cover;
  object-fit: cover;
}
.projectcard-bottom {
  padding: 5px;
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  margin-top: 5px;
}
.projectcard-bottom-title {
  font-size: 16px;
  font-weight: 800;
}
.projectcard-bottom-subtitle {
  margin-top: 7px;
  font-size: 14px;
  font-weight: 500;
}
.projectcard-bottom-type {
  margin-top: 5px;
}
.projectcard-bottom-tag-container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.projectcard-bottom-type {
  font-size: 14px;
  font-weight: 400;
}
.projectcard-bottom-tag {
  font-size: 12px;
  font-weight: 400;
  padding: 5px 8px;
  border-radius: 3px;
  text-align: center;
}
</style>
