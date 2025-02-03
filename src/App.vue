<template>
  <BaseHeader></BaseHeader>
  <BaseMain></BaseMain>
  <BaseFooter></BaseFooter>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
import BaseMain from "./components/layout/BaseMain.vue";

export default {
  name: "App",
  components: { BaseHeader, BaseFooter, BaseMain },
  computed: {
    // state 읽기
    ...mapGetters(["getTitle"]),
  },
};
</script>

<style></style>
