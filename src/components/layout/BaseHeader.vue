<template>
  <div class="header-wrap">
    <div class="inner">
      <div class="header-title-wrap">
        <ul class="list-wrap">
          <li
            class="header-title"
            v-for="(item, index) in title"
            :key="index"
            v-on:click="handleTitleClick(index, item)"
            :class="{ active: activeIndex === index }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="user-menu-wrap">
        <div class="user-icon"></div>
        <div class="hbr-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from "@/utils/cookies";
import { mapMutations } from "vuex";

export default {
  name: "BaseHeader",
  methods: {
    ...mapMutations(["setTitle"]),
    handleTitleClick(index, item) {
      this.activeIndex = index;
      this.setTitle(item);
      setCookie("title", item);
    },
  },
  data() {
    return {
      title: ["목록1", "목록2", "목록3", "목록4", "목록5"],
      activeIndex: 0,
    };
  },
  mounted() {
    const activeTitle = getCookie("title");
    if (activeTitle) {
      const index = this.title.findIndex(item => item === activeTitle);
      if (index !== -1) {
        this.activeIndex = index;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.header-wrap {
  width: calc(100%);
  /* max-width: 1170px; */
  margin: 0 auto;
  height: 60px;
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
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50%;
}
.list-wrap {
  display: flex;
  width: 100%;
  gap: 20px;
}
.header-title {
  width: auto;
  /* max-width: 80px; */
  height: 60px;
  @include flex-center();
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-weight: 500;
}
.header-title.active {
  /* background-color: $primary-color; */
  color: $primary-color;
}
.user-menu-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* padding-right: 10px; */
}
.hbr-image {
  background: url("/src/assets/image/hbr_menu.png") no-repeat center;
  width: 30px;
  height: 30px;
  background-size: contain;
}
@media all and (max-width: 768px) {
  .user-icon {
    display: none;
  }
}
</style>
