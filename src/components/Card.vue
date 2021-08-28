<template>
  <div class="cardWrap">
    <div class="card">
      <div class="card__content">
        <div class="card__icon" :class="isPeople ? 'people' : 'arrow'">

        </div>

        <div class="card__text">{{ text }}</div>

        <div class="card__digit">{{ digit }}</div>
      </div>
    </div>
    <div class="card__shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    isPeople: Boolean,
    text: String,
    digit: String,
  },
};
</script>

<style scoped lang="scss">
.cardWrap {
  position: relative;
  width: 130px;
  height: 124px;
  margin-right: 24px;
}
.card {
  width: 130px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 20px;
  position: absolute;
  z-index: 10;
  &__shadow {
    width: 100px;
    height: 123px;
    background: #000B33;
    opacity: 0.2;
    filter: blur(15px);
    position: absolute;
    top: 10px;
    left: 12px;
    z-index: 1;
  }
  &__icon {
    width: 42px;
    height: 24px;
  }
  &__text {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #B3B3B3;
  }
  &__digit {
    margin-top: 7px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #14121F;
  }
}
.people {
  background-image: url("../../public/svg/peoples.svg");
}
.arrow {
  background-image: url("../../public/svg/arrow.svg");
}
</style>
