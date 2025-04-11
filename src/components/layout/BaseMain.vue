<template>
  <div class="main-wrap">
    <div class="main-side-left">
      <!-- <ProfileCard v-if="!isFullScreen"></ProfileCard> -->
    </div>
    <div class="inner">
      <Profile v-if="getTitle === '프로필'"></Profile>
      <Project v-if="getTitle === '프로젝트'"></Project>
      <!-- <Profile v-bind:isFullScreen="isFullScreen"></Profile> -->
    </div>
    <div class="main-side-right"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import ProfileCard from "../profile/ProfileCard.vue";
import Profile from "../../views/Profile.vue";
import { mapGetters } from "vuex";
import Project from "@/views/Project.vue";

export default {
  name: "App",
  components: { ProfileCard, Profile, Project },
  computed: {
    ...mapGetters(["getTitle"]),
  },
  // setup() {
  //   const isFullScreen = ref(window.innerWidth <= 1720);
  //   const handleResize = () => {
  //     isFullScreen.value = window.innerWidth <= 1720;
  //   };
  //   onMounted(() => {
  //     window.addEventListener("resize", handleResize);
  //   });
  //   onUnmounted(() => {
  //     window.removeEventListener("resize", handleResize);
  //   });
  //   return { isFullScreen };
  // },
};
</script>

<style lang="scss" scoped>
.main-wrap {
  display: flex;
  width: 100%;
}
.main-side-left,
.main-side-right {
  width: 100%;
  max-width: calc((100% - 1200px) / 2);
  /* background-color: red; */
  display: flex;
  justify-content: center;
}
</style>
