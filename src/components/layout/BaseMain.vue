<template>
  <div class="main-wrap">
    <div class="inner">
      <Profile v-if="getTitle === '프로필'"></Profile>
      <Project v-if="getTitle === '프로젝트'"></Project>
    </div>
  </div>
</template>

<script>
import Profile from "../../views/Profile.vue";
import { mapGetters } from "vuex";
import Project from "@/views/Project.vue";

export default {
  name: "App",
  components: { Profile, Project },
  computed: {
    ...mapGetters(["getTitle"]),
  },
};
</script>

<style lang="scss" scoped>
.main-wrap {
  display: flex;
  width: 100%;
}
</style>
