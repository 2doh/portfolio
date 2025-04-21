<template>
  <div class="haesol-wrap">
    <div class="haesol-intro">
      <ProjectTitle :title="titleArr" :index="0" class="title" />
      <div class="haesol-intro-content">
        <p>
          <strong>해솔(Haesol)</strong>은 KDT React 개발자 양성 과정 중 수행한
          팀 프로젝트입니다. <br />맞벌이 가정을 위한
          <strong>자녀의 학교생활 및 성적 관리 서비스</strong>로 기획되었으며,
          부모가 자녀의 학습 상황을 쉽고 체계적으로 파악할 수 있도록 돕는 것이
          목표입니다.<br />
          <br />
          <strong>2차 프로젝트</strong>에서는 전체 서비스의 구상 및 구조 설계와
          함께, 관리자(어드민) 역할을 포함한 기본 기능을 구현했습니다.<br />
          <strong>3차 프로젝트</strong>에서는 코드의 재사용성과 유지보수를
          고려하여 전반적인 <strong>컴포넌트화 작업</strong>을 진행하며
          프로젝트를 고도화했습니다.<br />
          <br />
          주요 기능으로는 <strong>과목별 오답 분석</strong>,
          <strong>영어 단어 반복 학습</strong> 등이 있으며, 이를 통해 자녀의
          <strong>학습 성취도 향상</strong>을 기대할 수 있습니다.
        </p>
      </div>
    </div>
    <div class="haesol-presentation">
      <ProjectTitle :title="titleArr" :index="1" />
      <div class="haesol-presentation-wrap">
        <span class="haesol-subtitle">2차 프로젝트</span>
        <iframe
          class="youtube-frame"
          src="https://www.youtube.com/embed/N55OhCdAAVY?start=2978"
          frameborder="0"
          allowfullscreen
        />
        <iframe
          class="canva-frame"
          src="https://www.canva.com/design/DAGLc84_U6U/qqmmJjp2m1D3bmpUgXUbQg/view?embed"
          frameborder="0"
          allowfullscreen
        />
      </div>
      <div class="haesol-presentation-wrap">
        <span class="haesol-subtitle">3차 프로젝트</span>
        <iframe
          class="youtube-frame"
          src="https://www.youtube.com/embed/6fogD8UH548?si=xDz27JJ93gmnFGDe&amp;start=837"
          frameborder="0"
          allowfullscreen
        />
        <iframe
          class="canva-frame"
          src="https://www.canva.com/design/DAGOX-BUZVo/vMcPP8M-POpddSFY8bdD_w/view?embed"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
    <div class="haesol-process">
      <ProjectTitle :title="titleArr" :index="2" />
      <DetailsHaesol></DetailsHaesol>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectTitle from "../ProjectTitle.vue";
import DetailsHaesol from "../heasol/DetailsHaesol.vue";

export default defineComponent({
  name: "Haesol",
  components: { ProjectTitle, DetailsHaesol },
  setup() {
    const titleArr = [
      "소개 및 기획의도",
      "발표",
      "상세내용",
      "핵심기능",
      "기술스택",
      "성과 및 기여도",
    ];

    return { titleArr };
  },
});
</script>

<style lang="scss" scoped>
strong {
  font-weight: 500;
}
.haesol-subtitle {
  font-size: 17px;
  font-weight: 500;
}
.haesol-intro-content,
.youtube-frame {
  margin-top: 10px;
}
.haesol-intro-content {
  /* font-size: 14px; */
  line-height: 20px;
}
.haesol-presentation {
  margin-top: 20px;
}
.haesol-presentation-wrap {
  margin-top: 20px;
}
.youtube-frame,
.canva-frame {
  width: 100%;
  /* height: 50vh; */
  /* min-height: 720px; */
  aspect-ratio: 12 / 6;
}
.haesol-process {
  margin-top: 20px;
}
</style>
