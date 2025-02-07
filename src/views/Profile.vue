<template>
  <div class="profile-wrap">
    <ProfileCard></ProfileCard>
    <div class="profile-inner">
      <div class="profile-top">
        <div class="profile-top-inner">
          <p class="profile-top-intro">
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
            구현했습니다.
            <br />
            또한, <span class="highlight">Web Speech API</span>를 활용해
            <span class="highlight">영어 단어 학습 기능</span>을 개발하여
            사용자들이 <span class="highlight">듣기 및 말하기 </span>연습을 할
            수 있도록 기능을 설계했습니다.
          </p>
          <br />
          <p class="profile-top-intro">
            <span class="intro-opening">그 외 기술 스택과 협업 경험 : </span>
            <br /><br />
            - <span class="highlight">Zustand, Recoil, Redux</span>를 사용한
            효율적인 상태 관리 <br />
            - <span class="highlight">TypeScript</span>와
            <span class="highlight">Custom Hooks</span>를 통한 에러 방지 및
            가독성 높은 코드 작성 <br />
            - <span class="highlight">Git과 REST API</span>를 활용한 팀 협업 및
            버전 관리<br />
            - <span class="highlight">React / Vue</span> 서로 다른 프레임워크
            사용 경험
          </p>
        </div>
      </div>
      <div class="profile-bottom">
        <div class="profile-bottom-container">
          <div class="profile-bottom-cate">
            <div class="emogi">📖</div>
            <div class="profile-bottom-title">학력 및 교육이력</div>
          </div>
          <div
            class="profile-bottom-resume"
            v-for="(item, index) in history"
            :key="index"
          >
            <div class="profile-bottom-resume-duration">
              {{ item.duration }}
            </div>
            <div class="profile-bottom-resume-descwrap">
              <div class="profile-bottom-resume-act">
                {{ item.activity }} ({{ item.region }})
              </div>
              <div class="profile-bottom-resume-desc">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
        <div class="profile-bottom-container">
          <div class="profile-bottom-cate">
            <div class="emogi">⚒️</div>
            <div class="profile-bottom-title">기술</div>
          </div>
          <ProfileSkills></ProfileSkills>
        </div>
        <div class="profile-bottom-shortcut-wrap">
          <a
            class="profile-bottom-github-shortcut"
            href="https://github.com/2doh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="octicon:mark-github" width="32" height="32" />
            <div class="profile-bottom-title">작업 깃 바로가기</div>
          </a>
          <a
            class="profile-bottom-github-shortcut"
            href="https://www.notion.so/16c2d6fcc50080f386f5c2de5fc180ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mingcute:notion-fill" width="32" height="32" />
            <div class="profile-bottom-title">포트폴리오 제작기</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import ProfileCard from "@/components/profile/ProfileCard.vue";
import ProfileSkills from "@/components/profile/ProfileSkills.vue";

export default defineComponent({
  name: "Profile",
  components: { ProfileCard, Icon, ProfileSkills },
  data() {
    return {
      history: [
        {
          duration: "2024.03 ~ 2024.09",
          activity: "대구그린컴퓨터아트학원",
          description:
            "(KDT) React 개발자(Spring Back End 연동) 양성 과정 수료",
          region: "대구",
        },
        {
          duration: "2019.03 ~ 2023.03",
          activity: "영남대학교",
          description: "기계공학부 졸업",
          region: "경북",
        },
        {
          duration: "2017.03 ~ 2019.02",
          activity: "영남이공대학교",
          description: "기계과 졸업",
          region: "대구",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.profile-wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.profile-inner {
  width: 100%;
}
.profile-top {
  width: 100%;
  display: flex;
}
.profile-top-inner {
  max-width: 900px;
  margin: 10px;
  min-height: 385px;
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
  font-weight: 600;
  color: $primary-color;
}
p,
span {
  color: $font-color;
}
.profile-bottom {
  margin: 10px;
  width: 100%;
}
.profile-bottom-container {
  margin-top: 15px;
}
.profile-bottom-cate {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}
.emogi {
  font-size: 25px;
}
.profile-bottom-title {
  font-weight: 700;
  font-size: 18px;
}
.profile-bottom-resume {
  display: flex;
  gap: 20px;
  line-height: 20px;
  margin-bottom: 10px;
}
.profile-bottom-resume-duration {
  font-weight: 400;
  color: #666;
  min-width: 132px;
}
.profile-bottom-resume-descwrap {
  line-height: 20px;
}
.profile-bottom-resume-act {
  font-weight: 400;
}
.profile-bottom-resume-desc {
  font-size: 15px;
  margin-top: 5px;
}
.profile-bottom-shortcut-wrap {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.profile-bottom-github-shortcut {
  gap: 10px;
  @include flex-center();
  width: 100%;
  max-width: 210px;
  padding: 10px;
  border: 1px solid #666;
  border-radius: 5px;
  background-color: white;
}
@media all and (max-width: 768px) {
  .profile-wrap {
    flex-direction: column;
  }
  .profile-bottom-resume {
    gap: 10px;
  }
}
@media all and (max-width: 335px) {
  .intro-title {
    font-size: 23px;
  }
}
</style>
