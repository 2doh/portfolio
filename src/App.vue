<template>
  <BaseHeader></BaseHeader>
  <inner>
    <ProfileCard></ProfileCard>
  </inner>
  <BaseFooter></BaseFooter>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
import ProfileCard from "./components/profile/ProfileCard.vue";

export default {
  name: "App",
  components: { BaseHeader, BaseFooter, ProfileCard },
  computed: {
    // state 읽기
    ...mapGetters(["getTitle"]),
  },
};
</script>

<style></style>
