<template>
  <Spinner v-if="isLoading" class="spinner" />
  <div v-else class="profile-wrap">
    <ProfileCard />
    <div class="profile-inner">
      <ProfileIntro />
      <div class="profile-bottom">
        <div class="profile-bottom-container">
          <div class="profile-bottom-cate">
            <div class="emogi" role="img">📖</div>
            <div class="profile-bottom-title">학력 및 교육이력</div>
          </div>
          <div
            class="profile-bottom-resume"
            v-for="item in history"
            :key="item.activity"
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
            <div class="emogi" role="img">⚒️</div>
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
import ShortcutBtn from "@/components/common/ShortcutBtn.vue";
import Spinner from "@/components/common/Spinner.vue";
import notionIcon from "@/assets/icons/notion.svg";
import gitIcon from "@/assets/icons/github.svg";
import ProfileIntro from "@/components/profile/ProfileIntro.vue";

export default defineComponent({
  name: "Profile",
  components: {
    ProfileCard,
    ProfileSkills,
    ShortcutBtn,
    Spinner,
    ProfileIntro,
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

    // onMounted(() => {
    //   isLoading.value = false;
    // });
    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    });

    return { BtnArr, history, isLoading };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
p,
span {
  color: $font-color;
}
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
.profile-bottom {
  padding: 10px;
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
