<template>
  <div class="candidate">
    <img class="candidate__photo" :src="info.url"/>

    <div class="candidate__fioAndPosition">
      <div class="candidate__fio">{{ info.fio }}</div>

      <div class="candidate__position">{{ info.position }}</div>
    </div>

    <div class="candidate__workload">
      <div class="candidate__workloadTitle">Загруженность</div>

      <div class="candidate__workloadValueWrap">
        <v-progress-linear
          class="candidate__workloadValue"
          v-model="info.workload"
          :buffer-value="100"
          color="#1DA442"
        ></v-progress-linear>
      </div>
    </div>

    <div class="candidate__probability">
      <div class="candidate__probabilityTitle">Вероятность выполнения</div>

      <div class="candidate__probabilityValue">{{ info.probability }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Candidate',
  props: {
    info: Object,
  },
};
</script>

<style scoped lang="scss">
.candidate {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 12px;
  height: 72px;
  &__photo {
    border-radius: 50%;
  }
  &__fioAndPosition {
    margin-left: 12px;
    flex: 0.8;
  }
  &__fio {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__position {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7B7B7B;
    margin-top: 4px;
  }
  &__workload {
    //margin-left: 18%;
    flex: 0.4;
  }
  &__workloadTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7B7B7B;
  }
  &__workloadValueWrap {
    margin-top: 8px;
    width: 64px;
    & .v-progress-linear {
      border-radius: 20px;
    }
  }
  &__probability {
    margin-left: 7%;
  }
  &__probabilityTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7B7B7B;
  }
  &__probabilityValue {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
  }
  &:hover {
    background: #F5F5F5;
  }
}
</style>
