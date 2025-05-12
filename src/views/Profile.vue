<template>
  <Spinner v-if="isLoading" class="spinner" />
  <div v-else class="profile-wrap">
    <ProfileCard></ProfileCard>
    <div class="profile-inner">
      <div class="profile-top">
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
            <span class="primary">아이디어를 자유롭게 구현</span>하고, 우리의
            일상과 밀접한 웹 환경을 만드는 프론트엔드 개발에 매력을 느껴 새로운
            길을 걷게 되었습니다.
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
            해결책을 찾고 <span class="highlight">탐구</span>하는
            개발자입니다.<br />
            - <span class="primary">새로운 기술과 시도</span>에 두려움 없이
            뛰어들고, 직접 부딪히며 배워 나가는
            <span class="highlight">도전</span>정신을 갖추고 있습니다.
            <br />
            - 하나의 컴포넌트를
            <span class="primary">다양한 방식으로 표현</span>하고, 기능을
            개선하며 더 나은 사용자 경험을 고민하는
            <span class="highlight">창의성</span>을 중요하게 생각합니다.
          </p>
          <ProfilePreference></ProfilePreference>
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
            v-for="item in history"
            :key="item.duration"
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
          <div class="skills-etc-wrap">
            <div class="skills-etc-inner">
              <p class="skills-etc-content">
                그 외에도 JWT, Custom Hook, React Hook Form 등 다양한 라이브러리
                및 기술에 대한 자세한 내용은
                <a
                  href="https://www.notion.so/08aa25a565ad4180a8fffd343a46d006"
                  target="_blank"
                  class="skills-to-notion"
                >
                  여기</a
                >에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="profile-bottom-shortcut-wrap">
          <ShortcutBtn
            v-for="(item, index) in BtnArr"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import ProfileCard from "@/components/profile/ProfileCard.vue";
import ProfileSkills from "@/components/profile/ProfileSkills.vue";
import ProfilePreference from "@/components/profile/ProfilePreference.vue";
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import Spinner from "@/components/common/Spinner.vue";
import notionIcon from "@/assets/icons/notion.svg";
import gitIcon from "@/assets/icons/github.svg";

export default defineComponent({
  name: "Profile",
  components: {
    ProfileCard,
    ProfileSkills,
    ProfilePreference,
    ShortcutBtn,
    Spinner,
  },
  setup(_, { emit }) {
    const BtnArr = [
      {
        title: "작업 깃 바로가기",
        icon: gitIcon,
        href: "https://github.com/2doh",
      },
      {
        title: "포트폴리오 제작기",
        icon: notionIcon,
        href: "https://www.notion.so/16c2d6fcc50080f386f5c2de5fc180ca",
      },
    ];

    const history = ref([
      {
        duration: "2024.03 ~ 2024.09",
        activity: "대구그린컴퓨터아트학원",
        description: "(KDT) React 개발자(Spring Back End 연동) 양성 과정 수료",
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
    ]);

    const isLoading = ref(true);
    onMounted(() => {
      isLoading.value = false;
    });

    return { BtnArr, history, isLoading };
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
  @include flex-center();
  flex-direction: column;
}
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
  margin-top: 30px;
  display: flex;
  gap: 20px;
}
.profile-bottom-github-shortcut {
  margin-bottom: 20px;
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
    align-items: center;
  }
  .profile-bottom-resume {
    gap: 10px;
  }
}
@media all and (max-width: 335px) {
  .intro-title {
    font-size: 1.5rem;
  }
}
.skills-etc-wrap {
  margin-top: 10px;
}
.skills-etc-content {
  font-size: 17px;
}
.skills-to-notion {
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s ease;
}
.skills-to-notion:hover {
  color: #007bff;
}
</style>
