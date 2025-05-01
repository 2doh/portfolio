<template>
  <div class="contribution-wrap">
    <div class="chart-container">
      <Doughnut :data="chartData" :options="chartOptions" />

      <div class="chart-center-text">35%</div>
    </div>

    <div class="contribution-content">
      <h3>나의 기여도 <span>(35%)</span></h3>
      <ul>
        <li>전체 Git 관리 및 코딩 컨벤션, 프로젝트 구조 확립</li>
        <li>사용자 정보를 바탕으로 한 상태 관리</li>
        <li>
          핵심 기능 중 하나인 <strong>단어장</strong> (말하기, 듣기, 쓰기)
          페이지 제작
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ArcElement, Legend, Title, Tooltip, Chart as ChartJS } from "chart.js";
import { defineComponent } from "vue";
import { Doughnut } from "vue-chartjs";

export default defineComponent({
  name: "Contribution",
  components: { Doughnut },
  setup() {
    ChartJS.register(Title, Tooltip, Legend, ArcElement);

    const chartData = {
      labels: ["기여도"],
      datasets: [
        {
          data: [35, 65],
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
    return { chartOptions, chartData };
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
  color: $primary-color;
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
  color: $primary-color;
}
</style>
