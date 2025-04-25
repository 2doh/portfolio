<template>
  <div class="corefunction-container">
    <div class="corefunction-subtitle margin-top-10">Haesol 주요기능</div>
    <div class="corefunction-card-wrap">
      <CoreFunctionCard />
    </div>
    <div class="corefunction-card-desc">
      <p>
        이외의 모든 이용자에게 공통으로 제공되는 기능으로
        <u>인증 기능</u>, 내 정보 열람 및 수정 기능이 있습니다.
      </p>
      <p>
        인증 기능에는 로그인, 소셜 로그인, 아이디·비밀번호 찾기, 회원가입이
        포함됩니다.
      </p>
      <p>
        해당 프로젝트의 핵심 기능은 <strong>볼드체</strong>, 제가 담당한 기능은
        <u>밑줄</u> 처리하였습니다.
      </p>
    </div>
    <div class="corefunction-subtitle margin-top-10">인증 기능</div>
    <AuthHaesol />
    <div class="corefunction-subtitle margin-top-10">성적 열람</div>
    <GradeHaesol />
    <div class="corefunction-subtitle margin-top-10">영어 단어장</div>
    <AuthHaesol />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CoreFunctionCard from "./CoreFunctionCard.vue";
import AuthHaesol from "./AuthHaesol.vue";
import GradeHaesol from "./GradeHaesol.vue";

export default defineComponent({
  name: "CoreFunctionHaesol",
  components: { CoreFunctionCard, AuthHaesol, GradeHaesol },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.corefunction-container {
  padding: 16px;
}

.corefunction-subtitle {
  font-size: 22px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}

.corefunction-card-wrap {
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  width: 100%;
}

.corefunction-card-desc {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  p {
    line-height: 1.6;
    color: #555;
  }

  strong {
    font-weight: bold;
    color: #222;
  }

  u {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
