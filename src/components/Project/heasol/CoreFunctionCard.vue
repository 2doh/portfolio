<template>
  <div
    class="core-function-card-wrap"
    v-for="(item, index) in userFunctionArr"
    :key="index"
    :class="item.usertype"
  >
    <h2 class="core-function-card-title">
      <span class="usertype-icon">{{ userIcons[item.usertype] }}</span>
      {{ userTypeLabels[item.usertype] }}
    </h2>
    <ul>
      <li v-for="(feature, idx) in item.userspecificfeatures" :key="idx">
        <span>
          <span
            :class="{
              strong: highlightedFeatures.includes(feature),
              underline: underlinedFeatures.includes(feature),
            }"
            >{{ feature }}</span
          >
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoreFunctionCard",
  props: {},
  setup() {
    const userFunctionArr = [
      {
        usertype: "parent",
        userspecificfeatures: ["성적 열람", "전자 서명", "자녀 정보 관리"],
      },
      {
        usertype: "teacher",
        userspecificfeatures: [
          "학생 정보 관리",
          "성적 입력 및 수정",
          "알림장 작성",
          "문제 출제",
        ],
      },
      {
        usertype: "admin",
        userspecificfeatures: ["인증 승인 및 반려", "유저 정보 수정"],
      },
      {
        usertype: "student",
        userspecificfeatures: [
          "온라인 학습",
          "오답 노트",
          "영어 단어장",
          "성적 열람",
        ],
      },
    ];
    const userIcons = {
      parent: "👨‍👩‍👧‍👦",
      teacher: "👩‍🏫",
      admin: "🛠️",
      student: "🎓",
    };

    const userTypeLabels = {
      parent: "학부모",
      teacher: "교사",
      admin: "관리자",
      student: "학생",
    };

    const highlightedFeatures = [
      "성적 열람",
      "영어 단어장",
      "인증 승인 및 반려",
      "오답 노트",
      "전자 서명",
      "온라인 학습",
    ];

    const underlinedFeatures = ["성적 열람", "영어 단어장"];

    return {
      userFunctionArr,
      userIcons,
      userTypeLabels,
      highlightedFeatures,
      underlinedFeatures,
    };
  },
});
</script>

<style lang="scss" scoped>
.core-function-card-wrap {
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-left: 6px solid;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  ul {
    margin-top: 1rem;
    padding-left: 1rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
    }
  }
  .strong {
    font-weight: 700;
  }
  .underline {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

.core-function-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.usertype-icon {
  font-size: 1.5rem;
}

.check-icon {
  color: #2ecc71;
  margin-right: 0.5rem;
}

.core-function-card-wrap.parent {
  border-left-color: #3498db;
}
.core-function-card-wrap.teacher {
  border-left-color: #9b59b6;
}
.core-function-card-wrap.admin {
  border-left-color: #e67e22;
}
.core-function-card-wrap.student {
  border-left-color: #2ecc71;
}
</style>
