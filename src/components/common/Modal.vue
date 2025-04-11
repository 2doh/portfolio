<template>
  <div class="modal-background" @click="handleModalClose">
    <div class="modal-wrap" @click.stop :class="{ fullscreen: isFullScreen }">
      <div class="modal-inner">
        <div class="modal-header">
          <Icon
            icon="line-md:arrows-diagonal-rotated"
            width="16"
            height="16"
            class="open-fullscreen"
            @click="handleExpansion"
          />
          <Icon
            icon="material-symbols:close"
            width="20"
            height="20"
            class="modal-close"
            @click="handleModalClose"
            >닫기</Icon
          >
        </div>
        <div class="modal-content">{{ selectedProject }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Modal",
  components: { Icon },
  props: { selectedProject: Object },
  emits: [`modalClose`],
  setup(props, { emit }) {
    const isFullScreen = ref(false);

    const handleExpansion = () => {
      isFullScreen.value = !isFullScreen.value;
    };

    const handleModalClose = () => {
      emit(`modalClose`);
    };

    return { handleExpansion, isFullScreen, handleModalClose };
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
  width: 85%;
  height: 90%;
  background: #ffffff;
  border-radius: 10px;
  z-index: 99999999999;
  overflow: hidden;
}
.modal-wrap.fullscreen {
  width: 100% !important;
  height: 100% !important;
  border-radius: 0;
}
.modal-inner {
  display: block;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.modal-content {
  padding: 30px;
}
.open-fullscreen {
  cursor: pointer;
}
.modal-close {
  cursor: pointer;
}
</style>
