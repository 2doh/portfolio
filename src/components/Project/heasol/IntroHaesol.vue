<template>
  <div class="intro-container">
    <div class="haesol-intro-content">
      <span v-for="(feature, index) in descData" :key="index">
        <span v-for="(part, i) in feature.text" :key="i">
          <strong v-if="feature.strongIndex && feature.strongIndex.includes(i)">
            {{ part }}
          </strong>
          <template v-else>{{ part }}</template>
        </span>
      </span>
    </div>
    <div class="shortcut-wrap">
      <ShortcutBtn v-for="(item, index) in BtnArr" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import { computed, defineComponent } from "vue";
import alot from "../../../apis/alot.json";
import haesol from "../../../apis/haesol.json";
import { useStore } from "vuex";

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

    const descData = computed(() => initData.intro[0].desc);
    console.log(descData.value);

    const BtnArr = [
      {
        title: "프로젝트 깃허브",
        icon: "octicon:mark-github",
        href: "https://github.com/2doh/haesol",
      },
      {
        title: "프로젝트 노션",
        icon: "mingcute:notion-fill",
        href: "https://www.notion.so/2-HAESOL-613a41f133324a2fa3f7a342110f0cfe",
      },
    ];
    return { BtnArr, descData };
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
strong {
  font-weight: 500;
}
.shortcut-wrap {
  margin-top: 10px;
  display: flex;
  gap: 20px;
}
</style>
