<template>
  <div>
    <div class="modal-button-wrap" ref="headerWrap">
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
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

export default defineComponent({
  name: "ModalHeader",
  components: { Icon },
  props: {
    scrollTarget: Object,
  },
  emits: ["toggleFullscreen", "modalClose"],
  setup(props, { emit }) {
    const headerWrap = ref(null);

    const handleExpansion = () => emit("toggleFullscreen");
    const handleModalClose = () => emit("modalClose");

    const showLine = scY => {
      const header = headerWrap.value;
      if (!header) return;

      if (scY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    const handleScroll = () => {
      if (props.scrollTarget) {
        showLine(props.scrollTarget.scrollTop);
      }
    };

    onMounted(() => {
      if (props.scrollTarget) {
        props.scrollTarget.addEventListener("scroll", handleScroll);
      }
    });

    onBeforeUnmount(() => {
      if (props.scrollTarget) {
        props.scrollTarget.removeEventListener("scroll", handleScroll);
      }
    });

    return { headerWrap, handleExpansion, handleModalClose };
  },
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.modal-button-wrap {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 99999;
}
.modal-button-wrap.sticky {
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 990;
  transition: all 0.3s ease;
}
.open-fullscreen,
.modal-close {
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  background-color: $stroke-color;
}
</style>
