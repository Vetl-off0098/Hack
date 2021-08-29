<template>
  <div class="info">
    <div class="info__header header">
      <div
        class="info__svgAndTitle"
        @click="back"
      >
        <div class="info__svg"></div>

        <div class="info__title">К списку</div>
      </div>

      <div class="header__search">
        <div class="header__magnifier"></div>
        <input type="text" placeholder="Найти сотрудинка">
      </div>
    </div>

    <div class="info__main main">
      <div class="main__leftSide">
        <div class="main__1">
          <div class="main__personPhoto"></div>

          <div class="main__fioAndPosition">
            <div class="main__fio">Ружников Дмитрий Олегович</div>

            <div class="main__position">Вице мэр города Иркутска</div>
          </div>

          <div class="main__links">
            <div class="link link__phone"></div>

            <div class="link link__telega"></div>

            <div class="link link__mail"></div>

            <div class="link link__camera"></div>
          </div>
        </div>

        <div class="main__2">

        </div>

        <div class="main__3"></div>

        <div class="main__4"></div>
      </div>

      <div class="main__rightSide"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'EmployeeInfo',
  methods: {
    ...mapMutations({
      back: 'closeUserInfo',
    }),
  },
};
</script>

<style scoped lang="scss">
.info {
  &__svgAndTitle {
    display: flex;
    align-items: center;
    //margin-top: 26px;
    margin-left: 26px;
    height: 20px;
    cursor: pointer;
  }
  &__svg {
    background-image: url("../../public/svg/Direction.svg");
    width: 20px;
    height: 20px;
  }
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin-left: 10px;
  }
}
.header {
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAEAEA;
  padding: 30px 0;
  box-sizing: border-box;
  &__search {
    position: relative;
    margin-right: 16px;
    & input {
      width: 269px;
      background: #F5F5F5;
      border-radius: 50px;
      padding: 12px 12px 12px 36px;
      box-sizing: border-box;
      border: none;
      outline: none;
      cursor: pointer;
      &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #ACACAC;
      }
    }
  }
  &__magnifier {
    position: absolute;
    top: 13px;
    left: 14px;
    background-image: url("../../public/svg/magn.svg");
    width: 16px;
    height: 16px;
  }
}
.main {
  &__leftSide {
    width: 345px;
    border-right: 1px solid #EAEAEA;
  }
  &__1 {
    border-bottom: 1px solid #EAEAEA;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 24px;
    box-sizing: border-box;
  }
  &__personPhoto {
    background-image: url("../../public/svg/Oleg.png");
    width: 128px;
    height: 128px;
    margin-top: 32px;
  }
  &__fio {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    margin-top: 16px;
  }
  &__position {
    margin-top: 8px;
    ont-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #808080;
  }
  &__links {
    display: flex;
    width: 208px;
    justify-content: space-between;
    margin-top: 24px;
  }
}
.link {
  width: 40px;
  height: 40px;
  &__phone {
    background-image: url("../../public/svg/phone.svg");
  }
  &__telega {
    background-image: url("../../public/svg/telega.svg");
  }
  &__mail {
    background-image: url("../../public/svg/mail.svg");
  }
  &__camera {
    background-image: url("../../public/svg/camera.svg");
  }
}
</style>
