<template>
  <div class="project-wrap">
    <ProjectCard
      v-for="item in team"
      :key="item.title"
      :projects="item"
      @projectDescOpen="handleOpenModal"
    />

    <ProjectCard
      v-for="item in solo"
      :key="item.title"
      :projects="item"
      @projectDescOpen="handleOpenModal"
    />

    <ProjectCard
      v-for="item in clone"
      :key="item.title"
      :projects="item"
      @projectDescOpen="handleOpenModal"
    />

    <Modal
      v-if="selectedProject"
      :modalData="selectedProject"
      @modalClose="modalClose"
    >
    </Modal>
  </div>
</template>

<script>
import ProjectCard from "@/components/Project/ProjectCard.vue";
import { defineComponent, ref } from "vue";
import projectList from "../apis/project.json";
import Modal from "@/components/common/Modal.vue";
import Haesol from "@/components/Project/Haesol/Haesol.vue";

export default defineComponent({
  name: "Project",
  components: { ProjectCard, Modal, Haesol },
  setup() {
    const projects = ref(projectList);
    const solo = projectList.filter(item => item.type === "개인 프로젝트");
    const team = projectList.filter(item => item.type === "팀 프로젝트");
    const clone = projectList.filter(item => item.type === "클론코딩");

    const selectedProject = ref(null);
    const handleOpenModal = data => {
      // console.log(data);
      selectedProject.value = data;
    };

    const modalClose = () => {
      selectedProject.value = null;
    };

    return {
      projects,
      team,
      solo,
      clone,
      handleOpenModal,
      selectedProject,
      modalClose,
    };
  },
});
</script>

<style lang="scss" scoped>
.project-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 15px;
  width: 100%;
  margin: 10px 0 10px;
}
@media all and (max-width: 450px) {
  .project-wrap {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
