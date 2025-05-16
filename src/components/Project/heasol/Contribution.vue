<template>
  <div class="contribution-wrap">
    <div class="chart-container">
      <Doughnut :data="chartData" :options="chartOptions" />

      <div class="chart-center-text">{{ initData.percent }}%</div>
    </div>

    <div class="contribution-content">
      <h3>나의 기여도</h3>
      <ul>
        <li v-for="(item, index) in initData.text" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ArcElement, Legend, Title, Tooltip, Chart as ChartJS } from "chart.js";
import { computed, defineComponent } from "vue";
import { Doughnut } from "vue-chartjs";
import alot from "../../../apis/alot.json";
import haesol from "../../../apis/haesol.json";
import { useStore } from "vuex";

export default defineComponent({
  name: "Contribution",
  components: { Doughnut },
  setup() {
    const store = useStore();
    const featureSelected = computed(
      () => store.getters["featureCard/getSelected"],
    );

    let initData = {};

    if (featureSelected.value === "haesol") {
      initData = haesol.contribution[0];
    }
    if (featureSelected.value === "alot") {
      initData = alot.contribution[0];
    }

    ChartJS.register(Title, Tooltip, Legend, ArcElement);

    const chartData = {
      labels: ["기여도"],
      datasets: [
        {
          data: [initData.percent, 100 - initData.percent],
          backgroundColor: ["#a26b6b", "#e0e0e0"],
          borderWidth: 0,
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      cutout: "70%",
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
    return { chartOptions, chartData, initData };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.contribution-wrap {
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.chart-container {
  position: relative;
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.chart-center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: $highlight-color;
}

.contribution-content {
  flex: 1;
}

.contribution-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.contribution-content h3 span {
  font-weight: normal;
  color: #888;
}

.contribution-content ul {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 15px;
  color: #555;
}

.contribution-content li {
  margin-bottom: 6px;
}

.contribution-content strong {
  color: $highlight-color;
}

@media all and (max-width: 600px) {
  .contribution-wrap {
    display: block;
  }
  .chart-container {
    margin: 0 auto;
  }
  .contribution-content {
    margin-top: 20px;
  }
}
</style>
