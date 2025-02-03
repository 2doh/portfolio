<template>
  <div class="main-wrap">
    <ProfileCard></ProfileCard>
    <div class="inner"></div>
  </div>
</template>

<script>
import ProfileCard from "../profile/ProfileCard.vue";

export default {
  name: "App",
  components: { ProfileCard },
};
</script>

<style lang="scss" scoped></style>
