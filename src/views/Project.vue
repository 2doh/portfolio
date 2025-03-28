<template>
  <div class="aa">
    <ProjectCard
      v-for="item in team"
      :key="item.title"
      :projects="item"
    ></ProjectCard>

    <ProjectCard
      v-for="item in solo"
      :key="item.title"
      :projects="item"
    ></ProjectCard>

    <ProjectCard
      v-for="item in clone"
      :key="item.title"
      :projects="item"
    ></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/Project/ProjectCard.vue";
import { defineComponent, ref } from "vue";
import projectList from "../apis/project.json";

export default defineComponent({
  name: "Project",
  components: { ProjectCard },
  setup() {
    const projects = ref(projectList);
    const solo = projectList.filter(
      project => project.type === "개인 프로젝트",
    );
    const team = projectList.filter(project => project.type === "팀 프로젝트");
    const clone = projectList.filter(project => project.type === "클론코딩");

    return { projects, team, solo, clone };
  },
});
</script>

<style lang="scss" scoped>
.aa {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  width: 100%;
}
</style>
