<template>
  <BaseHeader></BaseHeader>
  <div>{{ getTitle }}</div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "./components/layout/BaseHeader.vue";

export default {
  name: "App",
  components: { BaseHeader },
  computed: {
    // state 읽기
    ...mapGetters(["getTitle"]),
  },
};
</script>

<style></style>
