<template>
  <div class="frame-container">
    <div class="haesol-presentation-wrap margin-top-10">
      <div
        v-for="(item, index) in frameData"
        :key="index.youtube"
        style="margin-top: 10px"
      >
        <span class="haesol-subtitle">{{ item.title }}</span>
        <iframe
          v-if="item.youtube"
          class="youtube-frame"
          :src="item.youtube"
          frameborder="0"
          allowfullscreen
        />
        <iframe
          v-if="item.canva"
          class="canva-frame"
          :src="item.canva"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import haesol from "../../../apis/haesol.json";
import alot from "../../../apis/alot.json";
import { useStore } from "vuex";

export default defineComponent({
  name: "FrameHaesol",
  components: {},
  setup() {
    const store = useStore();
    const selected = computed(() => store.getters["featureCard/getSelected"]);
    let initData = {};

    if (selected.value === "haesol") {
      initData = haesol;
    }
    if (selected.value === "alot") {
      initData = alot;
    }
    const frameData = computed(() => initData.frame);

    return { frameData };
  },
});
</script>

<style lang="scss" scoped>
.frame-container {
  padding: 16px;
}
.youtube-frame,
.canva-frame {
  width: 100%;
  /* height: 50vh; */
  /* min-height: 720px; */
  aspect-ratio: 12 / 6;
}
.haesol-presentation-wrap {
}
.haesol-subtitle {
  font-size: 20px;
  font-weight: 500;
}
</style>
