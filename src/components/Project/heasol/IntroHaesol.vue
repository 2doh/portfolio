<template>
  <div class="intro-container">
    <div class="haesol-intro-content">
      <p v-for="(feature, index) in descData" :key="index">
        <span v-for="(part, i) in feature.text" :key="i">
          <strong v-if="feature.strongIndex && feature.strongIndex.includes(i)">
            {{ part }}
          </strong>
          <template v-else>{{ part }}</template>
        </span>
      </p>
    </div>
    <div class="shortcut-wrap">
      <ShortcutBtn v-for="(item, index) in btnArr" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import { computed, defineComponent } from "vue";
import alot from "../../../apis/alot.json";
import haesol from "../../../apis/haesol.json";
import gv from "../../../apis/gv.json";
import clonekbb from "../../../apis/clonekbb.json";
import clonekgg from "../../../apis/clonekgg.json";
import portfolio from "../../../apis/portfolio.json";
import { useStore } from "vuex";
import notionIcon from "@/assets/icons/notion.svg";
import gitIcon from "@/assets/icons/github.svg";

export default defineComponent({
  name: "IntroHaesol",
  components: { ShortcutBtn },
  setup() {
    const store = useStore();
    const featureSelected = computed(
      () => store.getters["featureCard/getSelected"],
    );

    let initData = {};

    if (featureSelected.value === "haesol") {
      initData = haesol;
    }
    if (featureSelected.value === "alot") {
      initData = alot;
    }
    if (featureSelected.value === "gv") {
      initData = gv;
    }
    if (featureSelected.value === "clonekgg") {
      initData = clonekgg;
    }
    if (featureSelected.value === "clonekbb") {
      initData = clonekbb;
    }
    if (featureSelected.value === "portfolio") {
      initData = portfolio;
    }

    const descData = computed(() => initData.intro[0].desc);
    const btnData = computed(() => initData.intro[0].shortcut);
    const btnArr = [
      {
        title: btnData.value[1].title,
        icon: gitIcon,
        href: btnData.value[1].href,
      },
      {
        title: btnData.value[1].title,
        icon: notionIcon,
        href: btnData.value[1].href,
      },
    ];

    return { btnArr, descData };
  },
});
</script>

<style lang="scss" scoped>
.intro-container {
  padding: 16px;
}
.haesol-intro-content {
  /* font-size: 14px; */
  margin-top: 10px;
  line-height: 20px;
}
.haesol-intro-content p {
  margin-bottom: 1.5rem;
}
strong {
  font-weight: 500;
}
.shortcut-wrap {
  margin-top: 10px;
  display: flex;
  gap: 20px;
}
</style>
