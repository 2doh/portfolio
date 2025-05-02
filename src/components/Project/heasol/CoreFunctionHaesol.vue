<template>
  <div class="corefunction-container">
    <div class="corefunction-subtitle margin-top-10">
      {{ thisProjectTitle.charAt(0).toUpperCase() + thisProjectTitle.slice(1) }}
      주요기능
    </div>
    <div class="corefunction-card-wrap">
      <CoreFunctionCard />
    </div>
    <div class="corefunction-card-desc">
      <p>
        이외의 모든 이용자에게 공통으로 제공되는 기능으로
        <u>인증 기능</u>,
        <template v-if="thisProjectTitle === 'alot'">
          <u>내 정보 열람 및 수정 기능</u>
        </template>
        <template v-else> 내 정보 열람 및 수정 기능 </template>
        이 있습니다.
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
    <div
      class="corefunction-feature-container"
      v-for="(item, index) in initData"
      :key="index"
    >
      <div class="corefunction-subtitle margin-top-10">{{ item }}</div>
      <FeatureCard :currentTitle="item" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import CoreFunctionCard from "./CoreFunctionCard.vue";
import FeatureCard from "./FeatureCard.vue";
import haesol from "../../../apis/haesol.json";
import alot from "../../../apis/alot.json";
import { useStore } from "vuex";

export default defineComponent({
  name: "CoreFunctionHaesol",
  components: { CoreFunctionCard, FeatureCard },
  props: {},
  setup(props) {
    const store = useStore();
    const selected = computed(() => store.getters["featureCard/getSelected"]);
    const thisProjectTitle = selected;

    let initData = [];

    if (selected.value === "haesol") {
      initData = ["인증기능", "성적열람", "단어장", "공용 컴포넌트 및 기능"];
    }
    if (selected.value === "alot") {
      initData = ["체크리스트"];
    }

    return { initData, thisProjectTitle };
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
