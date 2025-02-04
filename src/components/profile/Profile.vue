<template>
  <div class="profile-wrap">
    <div class="profile-container">
      <div class="profile-container-top">
        <ProfileCard></ProfileCard>
        <div class="profile-container-top-inner">
          <p class="profile-container-top-intro">
            <span class="intro-title">프론트엔드 개발자 이도현</span>
            <br /><br />
            <span class="intro-opening">
              안녕하세요, 저는 배움과 도전을 즐기며, 사용자 경험을 최우선으로
              생각하는 개발자입니다.
            </span>
            <br /><br />
            <span class="highlight">Canvas API</span>를 활용해
            <span class="highlight">실시간 화이트보드 플랫폼</span>을 개발하여
            여러 사용자가 한 화면에서
            <span class="highlight">동시에 그리기</span> 등의 기능을
            구현했습니다. <br /><br />
            또한, <span class="highlight">Web Speech API</span>를 활용해
            <span class="highlight">영어 단어 학습 앱</span>을 개발하여
            사용자들이 <span class="highlight">듣기 및 말하기 연습</span>을 할
            수 있도록 기능을 설계했습니다.
          </p>
          <br />
          <p class="profile-container-top-intro">
            <span class="intro-opening">그 외 기술 스택과 협업 경험 : </span>
            <br /><br />
            - <span class="highlight">Zustand, Recoil, Redux</span>를 사용한
            효율적인 상태 관리 <br />
            - <span class="highlight">TypeScript</span>와
            <span class="highlight">Custom Hooks</span>를 통한 에러 방지 및
            가독성 높은 코드 작성 <br />
            - <span class="highlight">Git과 REST API</span>를 활용한 팀 협업 및
            버전 관리
          </p>
        </div>
      </div>
      <div class="profile-container-bottom">
        <div class="profile-container-bottom-inner">
          <div class="profile-container-bottom-title"></div>
          <div class="profile-container-bottom-content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";

export default {
  name: "Profile",
  components: { ProfileCard },
  data() {
    return {
      title: ["학력 및 교육이력", "기술 스택"],
      activeIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.profile-wrap {
  width: 100%;
  height: 100%;
}
.profile-container-top {
  width: 100%;
  display: flex;
}
.profile-container-top-inner {
  max-width: 900px;
}
.profile-container-top-intro {
  word-spacing: 1px;
  line-height: 20px;
  margin: 10px;
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
  font-weight: 600;
  color: $primary-color;
}
p,
span {
  color: $font-color;
}
</style>
