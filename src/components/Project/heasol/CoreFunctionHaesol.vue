<template>
  <div class="corefunction-subtitle margin-top-10">Haesol 주요기능</div>
  <div class="corefunction-card-wrap">
    <CoreFunctionCard></CoreFunctionCard>
  </div>
  <span
    >이외의 모든 이용자에게 공통으로 제공되는 기능으로
    <strong>인증 기능</strong>, 내 정보 열람 및 수정 기능이 있습니다.</span
  ><br />
  <span
    >인증 기능에는 로그인, 소셜 로그인, 아이디·비밀번호 찾기, 회원가입이
    포함됩니다.</span
  ><br />
  <span
    >해당 프로젝트의 핵심 기능은 <strong>볼드체</strong>, 제가 담당한 기능은
    <u>밑줄</u> 처리하였습니다.</span
  >
  <div class="corefunction-subtitle margin-top-10">성적 열람</div>
</template>

<script>
import { defineComponent } from "vue";
import CoreFunctionCard from "./CoreFunctionCard.vue";

export default defineComponent({
  name: "CoreFunctionHaesol",
  components: { CoreFunctionCard },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.corefunction-subtitle {
  font-size: 20px;
  font-weight: 500;
}
.corefunction-card-wrap {
  margin: 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
}
</style>
