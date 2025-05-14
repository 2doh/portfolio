<template>
  <div class="header-wrap no-select" ref="headerWrap">
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
    showLine(scY) {
      const headerWrap = this.$refs.headerWrap;
      const headerActiveClass = "sticky";
      if (headerWrap) {
        if (scY > 0) {
          headerWrap.classList.add(headerActiveClass);
        } else {
          headerWrap.classList.remove(headerActiveClass);
        }
      }
    },
    handleScroll() {
      this.showLine(window.scrollY);
    },
  },
  data() {
    return {
      title: ["프로필", "프로젝트"],
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

    this.showLine(window.scrollY);

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
  background-color: white;
  transition: top 0.3s ease;
}
.header-wrap.sticky {
  position: fixed;
  border-bottom: 1px solid $stroke-color;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 990;
}
.header-title-wrap {
  width: 100%;
  height: 100%;
}
.user-icon {
  background-color: gray;
  width: 30px;
  height: 30px;
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
  font-size: 20px;
}
.header-title.active {
  color: $primary-color;
}
</style>
