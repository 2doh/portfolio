<template>
  <div class="intro-container">
    <div class="haesol-intro-content">
      <p>
        <strong>해솔(Haesol)</strong>은 KDT React 개발자 양성 과정 중 수행한 팀
        프로젝트입니다. <br />맞벌이 가정을 위한
        <strong>자녀의 학교생활 및 성적 관리 서비스</strong>로 기획되었으며,
        부모가 자녀의 학습 상황을 쉽고 체계적으로 파악할 수 있도록 돕는 것이
        목표입니다.<br />
        <br />
        <strong>2차 프로젝트</strong>에서는 전체 서비스의 구상 및 구조 설계와
        함께, 관리자(어드민) 역할을 포함한 기본 기능을 구현했습니다.<br />
        <strong>3차 프로젝트</strong>에서는 코드의 재사용성과 유지보수를
        고려하여 전반적인 <strong>컴포넌트화 작업</strong>을 진행하며 프로젝트를
        고도화했습니다.<br />
        <br />
        주요 기능으로는 <strong>과목별 오답 분석</strong>,
        <strong>영어 단어 반복 학습</strong> 등이 있으며, 이를 통해 자녀의
        <strong>학습 성취도 향상</strong>을 기대할 수 있습니다.
      </p>
    </div>
    <div class="shortcut-wrap">
      <ShortcutBtn v-for="(item, index) in BtnArr" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IntroHaesol",
  components: { ShortcutBtn },
  setup() {
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
    return { BtnArr };
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
