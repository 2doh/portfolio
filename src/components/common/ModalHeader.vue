<template>
  <div>
    <div class="modal-button-wrap" ref="headerWrap">
      <img
        class="open-fullscreen"
        :src="btnArr.expanded"
        @click="handleExpansion"
      />
      <img :src="btnArr.close" class="modal-close" @click="handleModalClose" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import close from "@/assets/icons/close.svg";
import expanded from "@/assets/icons/expanded.svg";

export default defineComponent({
  name: "ModalHeader",
  components: {},
  props: {
    scrollTarget: Object,
  },
  emits: ["toggleFullscreen", "modalClose"],
  setup(props, { emit }) {
    const btnArr = { close, expanded };

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

    return { headerWrap, handleExpansion, handleModalClose, btnArr };
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
  z-index: 99;
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
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  background-color: $stroke-color;
}
</style>
