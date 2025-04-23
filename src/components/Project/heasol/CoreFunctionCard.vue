<template>
  <div
    class="core-function-card-wrap"
    v-for="(item, index) in userFunctionArr"
    :key="index"
  >
    <h2 class="core-function-card-title">{{ item.usertype }}</h2>
    <ul>
      <li v-for="(feature, idx) in item.userspecificfeatures" :key="idx">
        {{ feature }}
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
        userspecificfeatures: [
          "자녀 성적 열람",
          "전자 서명",
          "채팅",
          "자녀 정보 관리",
        ],
      },
      {
        usertype: "teacher",
        userspecificfeatures: [
          "학생 정보 관리",
          "성적 입력 및 수정",
          "알림장 작성",
          "문제 출제",
          "채팅",
        ],
      },
      {
        usertype: "admin",
        userspecificfeatures: ["인증 승인 및 반려", "유저 정보 수정"],
      },
      {
        usertype: "student",
        userspecificfeatures: ["온라인 학습", "오답 노트", "영어 단어장"],
      },
    ];
    return { userFunctionArr };
  },
});
</script>

<style lang="scss" scoped>
.core-function-card-wrap {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.core-function-card-wrap:hover {
  transform: translateY(-5px);
}
</style>
