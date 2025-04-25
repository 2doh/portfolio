<template>
  <div class="Auth-card margin-top-10">
    <img :src="currentImage" class="feature-image" @click="ModalOpen" />

    <div class="auth-desc margin-top-10">
      <ul class="auth-feature-list" :class="{ clamped: !isExpanded }">
        <li>
          입력 형식이 지정된 양식을 따르지 않으면 <strong>유효성 검사</strong>를
          통해 에러 메시지가 표시됩니다.
        </li>
        <li>
          로그인 시 <strong>JWT 인증 방식을 사용</strong>해 토큰을 발급받으며,
          토큰이 갱신되지 않으면 자동으로 로그아웃됩니다.
        </li>
        <li>소셜 로그인은 각 제공업체로부터 토큰을 발급받아 인증합니다.</li>
        <li>
          <strong>React Hook Form</strong>을 활용해 코드의 가독성을 높이고,
          유효성 검사를 간편하게 처리했습니다.
        </li>
        <li>컴포넌트를 분리해 재사용성과 효율성을 높였습니다.</li>
      </ul>
      <div class="btn-wrap">
        <button @click="isExpanded = !isExpanded" class="toggle-btn">
          <span v-if="isExpanded">▲ 접기</span>
          <span v-else>▼ 더보기</span>
        </button>
        <button @click="nextImage" class="next-image-btn">
          다른 이미지 보기
        </button>
      </div>
    </div>
  </div>
  <div v-if="isModalOpen" class="modal" @click="modalClose">
    <div class="modal-content">
      <img :src="currentImage" class="modal-image" />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "GradeHaesol",
  setup() {
    const isExpanded = ref(false);
    const isModalOpen = ref(false);

    const ModalOpen = () => {
      isModalOpen.value = true;
    };

    const modalClose = () => {
      isModalOpen.value = false;
    };

    const imageList = [
      require("../../../assets/image/haesol/haesolLogin.png"),
      require("../../../assets/image/haesol/haesolSignup.png"),
    ];

    const currentImageIndex = ref(0);
    const currentImage = ref(imageList[currentImageIndex.value]);

    const nextImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value + 1) % imageList.length;
      currentImage.value = imageList[currentImageIndex.value];
    };

    return {
      isExpanded,
      isModalOpen,
      currentImage,
      ModalOpen,
      modalClose,
      nextImage,
    };
  },
});
</script>

<style scoped lang="scss">
.Auth-card {
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 2rem;
}
.feature-image {
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  /* aspect-ratio: 16 / 9; */
  cursor: pointer;
}
.auth-desc {
  margin-right: 20px;
}
.clamped {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.auth-feature-list {
  padding-left: 1.2rem;
  list-style-type: disc;
  line-height: 1.8;
  font-size: 0.9rem;
}

.toggle-btn {
  /* margin-top: 1rem; */
  cursor: pointer;
  font-size: 1rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-content {
  overflow: hidden;
  max-width: 90%;
  max-height: 90%;
}

.modal-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.btn-wrap {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.next-image-btn {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  /* background-color: #f0f0f0; */
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
