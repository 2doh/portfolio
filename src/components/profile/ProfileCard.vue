<template>
  <div class="card-wrap">
    <div class="card-inner">
      <div class="card-top">
        <div class="card-idphoto"></div>
      </div>
      <div class="card-bottom">
        <div class="card-title">INFO</div>
        <div class="card-bottom-inner">
          <ul class="card-bottom-profile-wrap">
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">이름</div>
              <div class="card-content">이도현</div>
            </li>
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">이메일</div>
              <div class="card-content send-mail" @click="SendMailClick">
                ldh0973@naver.com
              </div>
            </li>
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">전화번호</div>
              <div class="card-content">010-6792-2898</div>
            </li>
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">주소</div>
              <div class="card-content">대구 달서구 조암남로10길 21</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  methods: {
    SendMailClick(e) {
      e.preventDefault();
      const email = "ldh0973@naver.com";
      window.location.href = `mailto:${email}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.card-wrap {
  @include box-stroke();
  margin: 10px;
  min-width: 250px;
  height: auto;
  max-height: 385px;
  /* position: absolute; */
}
.card-inner {
  padding: 3px;
  width: 100%;
  height: 100%;
}
.card-top {
  @include flex-center();
}
.card-idphoto {
  @include box-stroke();
  width: 150px;
  height: 200px;
  background: url("/src/assets/image/130.jpg") no-repeat center;
  background-size: cover;
}
.card-bottom {
  margin-top: 5px;

  @include flex-center();
  flex-direction: column;
}
.card-title {
  font-weight: 600;
  font-size: 18px;
  margin-top: 6px;
}
.card-bottom-profile-wrap {
  max-width: 250px;
  width: 100%;
}
.card-bottom-profile-list {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid $stroke-color;
}
.card-subtitle {
  flex: 0 0 70px;
  font-weight: 500;
  color: #333;
}
.card-content {
  flex: 1;
  font-weight: 400;
  color: #666;
  word-break: break-word;
}
.send-mail {
  cursor: pointer;
}
</style>
