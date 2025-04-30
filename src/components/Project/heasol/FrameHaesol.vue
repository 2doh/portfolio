<template>
  <div class="frame-container">
    <div class="haesol-presentation-wrap margin-top-10">
      <div
        v-for="(item, index) in tempData"
        :key="index.youtube"
        style="margin-top: 10px"
      >
        <span class="haesol-subtitle">{{ item.title }}</span>
        <iframe
          class="youtube-frame"
          :src="item.youtube"
          frameborder="0"
          allowfullscreen
        />
        <iframe
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
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "FrameHaesol",
  components: {},
  setup() {
    const tempData = reactive([
      {
        title: "2차 프로젝트",
        youtube: "https://www.youtube.com/embed/N55OhCdAAVY?start=2978",
        canva:
          "https://www.canva.com/design/DAGLc84_U6U/qqmmJjp2m1D3bmpUgXUbQg/view?embed",
      },
      {
        title: "3차 프로젝트",
        youtube:
          "https://www.youtube.com/embed/6fogD8UH548?si=xDz27JJ93gmnFGDe&amp;start=837",
        canva:
          "https://www.canva.com/design/DAGOX-BUZVo/vMcPP8M-POpddSFY8bdD_w/view?embed",
      },
    ]);
    return { tempData };
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
