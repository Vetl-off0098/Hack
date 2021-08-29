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

    <div class="info__main"></div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeInfo',
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
</style>
