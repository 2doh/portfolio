<template>
  <div class="header-wrap">
    <div class="header-title-wrap">
      <ul class="list-wrap">
        <li
          class="header-title"
          v-for="(item, index) in title"
          v-on:click="handleTitleClick(index, item)"
          :key="index"
          :class="{ active: activeIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <div class="user-icon"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BaseHeader",
  methods: {
    ...mapMutations(["setTitle"]),
    handleTitleClick(index, item) {
      this.activeIndex = index;
      this.setTitle(item);
      console.log(item);
    },
  },
  data() {
    return {
      title: ["목록1", "목록2", "목록3", "목록4", "목록5"],
      activeIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.header-wrap {
  width: 100%;
  height: 80px;
  @include flex-center();
  border-bottom: 1px solid $stroke-color;
  z-index: 999999;
}
.header-title-wrap {
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
}
.user-icon {
  background-color: gray;
  width: 75px;
  height: 75px;
}
.list-wrap {
  display: flex;
  width: 100%;
}
.header-title {
  width: 100%;
  max-width: 140px;
  height: 80px;
  @include flex-center();
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.header-title.active {
  background-color: $primary-color;
}
</style>
