<template>
  <div class="modal-background" @click="handleModalClose">
    <div class="modal-wrap" @click.stop :class="{ fullscreen: isFullScreen }">
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
          ></div>
          <div class="modal-intro-wrap">
            <div class="modal-title">{{ modalData?.title }}</div>
            <div class="modal-sub">{{ modalData?.sub }}</div>
            <div class="modal-type">{{ modalData?.type }}</div>
          </div>
          <div class="modal-button-wrap">
            <Icon
              icon="line-md:arrows-diagonal-rotated"
              width="24"
              height="24"
              class="open-fullscreen"
              @click="handleExpansion"
            />
            <Icon
              icon="material-symbols:close"
              width="24"
              height="24"
              class="modal-close"
              @click="handleModalClose"
              >닫기</Icon
            >
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
import { Icon } from "@iconify/vue";
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
import { useStore } from "vuex";

export default defineComponent({
  name: "Modal",
  components: { Icon, Haesol, Alot, GV },
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

    return {
      handleExpansion,
      isFullScreen,
      handleModalClose,
      resolveDynamicComponent,
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
}
.modal-wrap {
  position: relative;
  width: 80%;
  max-width: 1080px;
  height: 95%;
  background: #ffffff;
  z-index: 999;
  /* overflow: hidden; */
  /* overflow-y: auto; */
  border-radius: 10px;
  overflow: hidden; // 스크롤 내용이 border-radius 넘지 않게
  position: relative;
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
  -webkit-mask-image: radial-gradient(white 99%, transparent 100%);
  mask-image: radial-gradient(white 99%, transparent 100%);
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
  font-size: 40px;
  color: #fff;
}
.modal-sub {
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
}
.modal-type {
  font-weight: 400;
  font-size: 14px;
  color: #fff;
}
.modal-button-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  /* justify-content: end; */
  align-items: center;
  padding: 10px;
}
.modal-content {
  padding: 20px;
  flex: 1;
  /* overflow-y: auto; */
}
.open-fullscreen,
.modal-close {
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  background-color: $stroke-color;
}
</style>
