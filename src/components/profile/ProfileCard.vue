<template>
  <div class="card-wrap">
    <div class="card-inner">
      <div class="card-top">
        <picture>
          <img
            src="/image/idphoto-300.webp"
            alt="기본 이미지"
            fetchpriority="high"
            class="card-idphoto"
            loading="eager"
          />
        </picture>
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
              <a
                class="card-content send-mail"
                href="mailto:ldh0973@naver.com"
                rel="noopener noreferrer"
              >
                {{ profileData.email }}
              </a>
            </li>
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">전화번호</div>
              <a class="card-content" href="tel:01067922898" title="전화걸기">
                {{ profileData.phone }}
              </a>
            </li>
            <li class="card-bottom-profile-list">
              <div class="card-subtitle">주소</div>
              <div class="card-content">{{ profileData.home }}</div>
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
  setup() {
    const profileData = {
      email: "ldh0973@naver.com",
      phone: "010-6792-2898",
      home: "대구 달서구 조암남로10길 21",
    };
    return { profileData };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/mixin";

.card-wrap {
  margin: 10px;
  min-width: 250px;
  height: auto;
}
.card-inner {
  padding: 3px;
  width: 100%;
  height: 100%;
}
.card-top {
  @include flex-center();
  aspect-ratio: 5 / 6;
  width: 100%;
  max-height: 350px;
}
.card-idphoto {
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: cover;
  object-fit: cover;
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
@media all and (max-width: 768px) {
  .card-inner {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }
  .card-idphoto {
    max-height: 350px;
  }
  .card-bottom {
    min-width: 235px;
    min-height: 172px;
  }
}
@media all and (max-width: 500px) {
  .card-inner {
    display: block;
  }
  .card-top {
    max-height: 350px;
  }
  .card-wrap {
    width: 100%;
  }
}
</style>
