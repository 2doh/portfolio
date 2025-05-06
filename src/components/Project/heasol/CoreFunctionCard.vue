<template>
  <div
    class="core-function-card-wrap"
    v-for="(item, index) in initData"
    :key="index"
    :class="item.type"
  >
    <h2 class="core-function-card-title">
      <span class="usertype-icon">{{ item.icon }}</span>
      {{ item.label }}
    </h2>
    <ul>
      <li v-for="(feat, idx) in item.features" :key="idx">
        <span
          :class="{
            strong: item.strongIndex?.includes(idx),
            underline: item.underlineIndex?.includes(idx),
          }"
        >
          {{ feat }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import alot from "../../../apis/alot.json";
import haesol from "../../../apis/haesol.json";
import gv from "../../../apis/gv.json";

export default defineComponent({
  name: "CoreFunctionCard",
  props: {},
  setup() {
    const store = useStore();
    const selected = computed(() => store.getters["featureCard/getSelected"]);
    let initData = {};

    if (selected.value === "haesol") {
      initData = haesol.core;
    }
    if (selected.value === "alot") {
      initData = alot.core;
    }
    if (selected.value === "gv") {
      initData = gv.core;
    }

    return {
      initData,
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
