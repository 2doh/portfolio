<template>
  <div class="preference-wrap">
    <div class="preference-inner">
      <p class="preference-inner-content">
        "원활한 커뮤니케이션과 함께 성장하는 분위기를 지향합니다."
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfilePreference",
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.preference-wrap {
  margin: 20px auto 10px;
  width: 100%;
  padding: 20px;
  background-color: $stroke-color;
  border-radius: 10px;
}
.preference-inner {
  display: flex;
  justify-content: center;
}
.preference-inner-content {
  font-size: 17px;
  font-weight: 500;
}
</style>
