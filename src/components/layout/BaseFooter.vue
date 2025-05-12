<template>
  <div class="footer-wrap">
    <div class="inner">
      <div class="footer-left">
        <div class="footer-title">이메일</div>
        <div class="footer-content">ldh0973@naver.com</div>
        <a
          class="send-mail br20"
          href="mailto:ldh0973@naver.com"
          rel="noopener noreferrer"
        >
          메일보내기
        </a>
      </div>
      <div class="footer-middle">
        <div class="footer-title">GitHub</div>
        <a
          class="github-shortcut"
          href="https://github.com/2doh"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub 바로가기</a
        >
        <a
          class="github-protfolio-shortcut"
          href="https://github.com/2doh/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          >포트폴리오 GitHub</a
        >
      </div>
      <div class="footer-right">
        <div class="footer-title">Notion</div>
        <a
          class="github-shortcut"
          href="https://spotted-party-00f.notion.site/fd278b99c4874742907665ae140e68bc"
          target="_blank"
          rel="noopener noreferrer"
          >기존 포트폴리오</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  methods: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";
.footer-wrap {
  width: calc(100%);
  height: auto;
  background-color: #1e1e1e;
  padding: 30px 0;
  margin: 0 auto;
}
.footer-left {
  /* background-color: blue; */
}
.footer-title {
  font-weight: 700;
  font-size: 16px;
  color: white;
  display: block;
  margin-bottom: 20px;
}
.send-mail,
.footer-content {
  line-height: 1.5rem;
  font-size: 14px;
  font-weight: 400;
}
.footer-content {
  color: #999999;
  margin-bottom: 10px;
}
.send-mail {
  cursor: pointer;
  background-color: $primary-color;
  color: #1e1e1e;
  padding: 3px 20px;
}
.footer-middle,
.footer-right {
  height: 100px;
  /* background-color: aqua; */
}
.github-shortcut,
.github-protfolio-shortcut {
  cursor: pointer;
  display: block;
  line-height: 1.5rem;
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}
.github-shortcut {
  margin-bottom: 15px;
}
@media all and (max-width: 400px) {
  .inner {
    display: inline-block;
    margin-left: 10px;
  }
  .footer-middle,
  .footer-right {
    height: auto;
    margin-top: 25px;
  }
}
</style>
