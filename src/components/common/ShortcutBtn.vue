<template>
  <a
    class="shortcut"
    :href="data.href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="data.icon" width="32" height="32" />
    <div class="title">{{ data?.title }}</div>
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShortcutBtn",
  components: {},
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.shortcut {
  margin-bottom: 20px;
  gap: 10px;
  @include flex-center();
  width: 100%;
  /* max-width: 210px; */
  padding: 10px;
  border: 1px solid #666;
  border-radius: 5px;
  background-color: white;
}
</style>
