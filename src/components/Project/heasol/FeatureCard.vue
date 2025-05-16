<template>
  <div class="card-wrap margin-top-10">
    <img
      :src="currentImage"
      alt="기능사진"
      class="feature-image"
      @click="ModalOpen"
    />
    <div class="feature-desc margin-top-10">
      <ul class="feature-list-wrap" :class="{ clamped: !isExpanded }">
        <li
          v-for="(feature, idx) in currentData.desc"
          :key="idx"
          class="feature-list"
        >
          <span v-for="(part, i) in feature.text || []" :key="i">
            <strong
              v-if="feature.strongIndex && feature.strongIndex.includes(i)"
              >{{ part }}</strong
            >
            <template v-else>{{ part }}</template>
          </span>
        </li>
      </ul>
      <div class="btn-wrap">
        <button @click="isExpanded = !isExpanded" class="toggle-btn">
          <span class="btn-label" v-if="isExpanded">▲ 접기</span>
          <span class="btn-label" v-else>▼ 더보기</span>
        </button>
        <button
          @click="nextImage"
          class="next-image-btn"
          v-if="currentData.subPic"
        >
          <span class="btn-label">다른 이미지 보기</span>
        </button>
      </div>
    </div>
  </div>
  <div v-if="isModalOpen" class="modal" @click="modalClose">
    <div class="modal-content" @click.stop>
      <img :src="currentImage" alt="기능사진" class="modal-image" />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import alot from "../../../apis/alot.json";
import haesol from "../../../apis/haesol.json";
import gv from "../../../apis/gv.json";
import { useStore } from "vuex";

export default defineComponent({
  name: "FeatureCard",
  props: { currentTitle: String },
  setup(props) {
    const store = useStore();
    const featureSelected = computed(
      () => store.getters["featureCard/getSelected"],
    );

    let initData = {};

    if (featureSelected.value === "haesol") {
      initData = haesol;
    }
    if (featureSelected.value === "alot") {
      initData = alot;
    }
    if (featureSelected.value === "gv") {
      initData = gv;
    }

    const featureData = computed(() => initData.feature);
    const currentIndex = ref(
      featureData.value.findIndex(item => item.title === props.currentTitle),
    );

    if (currentIndex.value === -1) {
      currentIndex.value = 0;
    }

    const currentData = computed(() => featureData.value[currentIndex.value]);

    const imageList = computed(() =>
      [
        require(`../../../assets/image/featurecard/${currentData.value.pic}`),
        currentData.value.subPic
          ? require(
              `../../../assets/image/featurecard/${currentData.value.subPic}`,
            )
          : null,
      ].filter(Boolean),
    );

    const isExpanded = ref(false);
    const isModalOpen = ref(false);

    const ModalOpen = () => {
      isModalOpen.value = true;
    };

    const modalClose = () => {
      isModalOpen.value = false;
    };

    const currentImageIndex = ref(0);
    const currentImage = computed(
      () => imageList.value[currentImageIndex.value],
    );

    const nextImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value + 1) % imageList.value.length;
    };

    return {
      isExpanded,
      isModalOpen,
      currentImage,
      currentData,
      ModalOpen,
      modalClose,
      nextImage,
    };
  },
});
</script>

<style scoped lang="scss">
.card-wrap {
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
  cursor: pointer;
}
.feature-desc {
  margin-right: 20px;
  padding: 10px 0 10px;
}
.clamped {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.feature-list-wrap {
  line-height: 1.8;
  font-size: 0.9rem;
}

.feature-list {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #444;
  font-size: 0.95rem;
  transition: background-color 0.2s ease;

  &::before {
    content: "✔";
    position: absolute;
    left: 0;
    top: 0.1rem;
    color: #5a9;
  }
}

.toggle-btn {
  cursor: pointer;
  font-size: 1rem;
}

.modal {
  position: absolute;
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
  font-size: 0.9rem;
  cursor: pointer;
  font-size: 1rem;
}
@media all and (max-width: 700px) {
  .card-wrap {
    display: block;
  }
  .feature-list-wrap {
    padding: 10px;
  }
  .feature-image {
    width: 100%;
  }
  .feature-desc {
    margin-right: 0;
  }
  .clamped {
    display: none;
  }
}
@media all and (max-width: 400px) {
  .btn-label {
    font-size: 12px;
  }
}
</style>
