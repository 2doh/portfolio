<template>
  <ProjectCard></ProjectCard>
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

<style lang="scss" scoped></style>
