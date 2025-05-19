<template>
  <div class="modal-background" @click="handleModalClose">
    <div
      class="modal-wrap"
      @click.stop
      ref="scrollContainer"
      :class="{ fullscreen: isFullScreen }"
    >
      <ModalHeader
        @toggleFullscreen="handleExpansion"
        @modalClose="handleModalClose"
        :scrollTarget="scrollContainer"
      />
      <div class="modal-inner">
        <div class="modal-top">
          <div
            class="modal-image"
            :style="{
              backgroundImage: modalData.pic
                ? `url(${require(`../../assets/image/${modalData.pic}`)})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          />
          <div class="modal-intro-wrap">
            <div class="modal-title">{{ modalData?.title }}</div>
            <div class="modal-sub">{{ modalData?.sub }}</div>
            <div class="modal-type">{{ modalData?.type }}</div>
          </div>
        </div>
        <div class="modal-content">
          <component
            v-if="modalData"
            :is="resolveDynamicComponent(modalData.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  resolveDynamicComponent,
} from "vue";
import Haesol from "../Project/Projects/Haesol.vue";
import Alot from "../Project/Projects/Alot.vue";
import GV from "../Project/Projects/GV.vue";
import Clonekbb from "../Project/Projects/Clonekbb.vue";
import Clonekgg from "../Project/Projects/Clonekgg.vue";
import Portfolio from "../Project/Projects/Portfolio.vue";
import { useStore } from "vuex";
import ModalHeader from "./ModalHeader.vue";

export default defineComponent({
  name: "Modal",
  components: {
    Haesol,
    Alot,
    GV,
    Clonekgg,
    Clonekbb,
    ModalHeader,
    Portfolio,
  },
  props: { modalData: Object },
  emits: [`modalClose`],
  setup(props, { emit }) {
    const isFullScreen = ref(false);

    const handleExpansion = () => {
      isFullScreen.value = !isFullScreen.value;
    };

    const handleModalClose = () => {
      emit(`modalClose`);
    };

    // const resolveDynamicComponent = name => {
    //   const componentsMap = {
    //     Haesol: Haesol,
    //     Alot: Alot,
    //   };
    //   return componentsMap[name] || null;
    // };

    onMounted(() => {
      document.documentElement.style.overflowY = "hidden";
    });
    onUnmounted(() => {
      document.documentElement.style.overflowY = "auto";
    });

    const lowerProjectName = computed(() => props.modalData.name.toLowerCase());
    const store = useStore();
    if (props.modalData?.name) {
      store.commit("featureCard/setSelected", lowerProjectName.value);
    }

    const scrollContainer = ref(null);

    return {
      handleExpansion,
      isFullScreen,
      handleModalClose,
      resolveDynamicComponent,
      scrollContainer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
.modal-wrap {
  position: relative;
  width: 80%;
  max-width: 1080px;
  height: 95%;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden; // 스크롤 내용이 border-radius 넘지 않게
  padding: 0 0 50px;
}
.modal-wrap.fullscreen {
  width: 100% !important;
  max-width: 1440px;
  height: 100% !important;
  border-radius: 0;
}
.modal-inner {
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  /* min-height: 100%; */
  height: 100%;
  overflow-y: scroll;
}
.modal-inner::-webkit-scrollbar {
  /* display: none; */
}
.modal-top {
  background-color: rgb(0, 0, 0);
  /* height: 50vh; */
  aspect-ratio: 16 / 9;
  position: relative;
  top: 0;
  z-index: 10;
}
.modal-image {
  height: 100%;
  opacity: 0.5;
}
.modal-intro-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
}
.modal-title {
  font-weight: bold;
  font-size: 80px;
  color: #fff;
}
.modal-sub {
  margin-top: 10px;
  font-size: 24px;
  color: #fff;
}
.modal-type {
  margin-top: 5px;
  font-weight: 400;
  font-size: 22px;
  color: #fff;
}

.modal-content {
  padding: 20px;
  flex: 1;
  /* overflow-y: auto; */
}
@media all and (max-width: 950px) {
  .modal-title {
    font-size: 60px;
  }
  .modal-sub {
    font-size: 20px;
  }
  .modal-type {
    font-size: 18px;
  }
}
@media all and (max-width: 750px) {
  .modal-title {
    font-size: 45px;
  }
  .modal-sub {
    font-size: 15px;
  }
  .modal-type {
    font-size: 13px;
  }
}
@media all and (max-width: 520px) {
  .modal-title {
    font-size: 30px;
  }
  .modal-sub {
    font-size: 10px;
  }
  .modal-type {
    font-size: 8px;
  }
}
</style>
