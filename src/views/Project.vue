<template>
  <div class="aa">
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/Project/ProjectCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  components: { ProjectCard },
  setup() {
    return {};
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
