<template>
  <div class="employee" @click="openUserInfo">
<!--    <div class="employee__icon" :style="{backgroundImage: `url(${employee.url})`}"></div>-->
    <div class="employee__icon"></div>

    <div class="employee__fio">
      {{ employee.fio }}
    </div>

    <div class="employee__position">
      {{ employee.position }}
    </div>

    <div class="employee__workload">
      <v-progress-linear
        v-model="employee.workload"
        :buffer-value="100"
        color="#1DA442"
      ></v-progress-linear>
    </div>

    <div class="employee__diligence">
      <div class="employee__diligenceWrap">
        {{ employee.diligence }}
      </div>
    </div>

    <div class="employee__arrow">
      <div class="arrowLeft"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Employee',
  props: {
    employee: Object,
  },
  data() {
    return {
      bufferValue: 100,
      currentValue: 30,
    };
  },
  methods: {
    ...mapMutations({
      openUserInfo: 'openUserInfo',
    }),
  },
};
</script>

<style scoped lang="scss">
.employee {
  width: 100%;
  display: flex;
  padding: 14px 0;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #F8F8F8;
  }
  &:hover .arrowLeft {
    display: block;
  }
  &__icon {
    background-image: url("../../public/static/Ruslan.png");
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 16px;
  }
  &__fio {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    display: flex;
    align-items: center;
    margin-left: 16px;
    width: 44.82%;
  }
  &__position {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #7F7F7F;
    width: 23.22%;
    display: flex;
    align-items: center;
  }
  &__workload {
    width: 64px;
    display: flex;
    align-items: center;
    & .v-progress-linear {
      border-radius: 20px;
    }
  }
  &__diligence {
    display: flex;
    align-items: center;
  }
  &__diligenceWrap {
    width: 32px;
    height: 24px;
    background: #D2DFF3;
    border-radius: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #5A57E3;
    margin-left: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__arrow {
    display: flex;
    align-items: center;
    margin-left: 9.27%;
  }
}
.arrowLeft {
  display: none;
  background-image: url("../../public/svg/arrowLeft.svg");
  width: 24px;
  height: 24px;
  position: absolute;
  right: 26px;
}
</style>
