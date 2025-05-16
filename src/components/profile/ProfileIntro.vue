<template>
  <div class="profile-top" fetchpriority="high">
    <div class="profile-top-inner">
      <p class="profile-top-intro">
        <span class="intro-title">프론트엔드 개발자 이도현</span>
        <br /><br />
        <span class="intro-opening">
          안녕하세요, 프론트엔드 개발자로 성장해 나가고 있는 이도현입니다.
        </span>
        <br />
        <br />
        기계공학을 전공하며 엔지니어로서의 역량을 길렀지만 정형화된 학문적
        접근보다 더 창의적인 도전을 하고 싶었습니다.
        <span class="primary">아이디어를 자유롭게 구현</span>하고, 우리의 일상과
        밀접한 웹 환경을 만드는 프론트엔드 개발에 매력을 느껴 새로운 길을 걷게
        되었습니다.
      </p>
      <br />
      <p class="profile-top-intro">
        <span class="intro-opening">
          저를 세가지의 단어로 표현한다면
          <span class="highlight">탐구</span>,
          <span class="highlight">도전</span>,
          <span class="highlight">창의성</span>입니다.</span
        >
        <br /><br />
        - 문제의 <span class="primary">원인</span>을 분석하고
        <span class="primary">재발을 방지</span>하기위해 검증을 반복하며
        해결책을 찾고 <span class="highlight">탐구</span>하는 개발자입니다.<br />
        - <span class="primary">새로운 기술과 시도</span>에 두려움 없이
        뛰어들고, 직접 부딪히며 배워 나가는
        <span class="highlight">도전</span>정신을 갖추고 있습니다.
        <br />
        - 하나의 컴포넌트를
        <span class="primary">다양한 방식으로 표현</span>하고, 기능을 개선하며
        더 나은 사용자 경험을 고민하는 <span class="highlight">창의성</span>을
        중요하게 생각합니다.
      </p>
      <ProfilePreference />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProfilePreference from "./ProfilePreference.vue";

export default defineComponent({
  name: "ProfileIntro",
  components: {
    ProfilePreference,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.profile-top {
  width: 100%;
  display: flex;
}
.profile-top-inner {
  max-width: 900px;
  margin: 10px;
}
.profile-top-intro {
  word-spacing: 1px;
  line-height: 25px;
}
.intro-title {
  font-size: 25px;
  font-weight: 700;
}
.intro-opening {
  margin: 10px 0;
  font-size: 20px;
  font-weight: 500;
}
.highlight {
  font-weight: 900;
  color: $highlight-color;
}
.primary {
  font-weight: 700;
  color: $highlight-color;
}
p,
span {
  color: $font-color;
}
@media all and (max-width: 335px) {
  .intro-title {
    font-size: 1.5rem;
  }
}
</style>
