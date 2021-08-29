<template>
  <div class="candidate">
    <div class="candidate__fioAndPosition">
      <div class="candidate__fio">{{ info.name }}</div>

      <div class="candidate__position">{{ info.unit }}</div>
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
  </div>
</template>

<script>
export default {
  name: 'CandidateUnit',
  props: {
    info: Object,
  },
};
</script>

<style scoped lang="scss">
.candidate {
  display: flex;
  align-items: center;
  padding: 19px 16px;
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 12px;
  height: 72px;
  &__fioAndPosition {
    flex: 0.585;
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
  &:hover {
    background: #F5F5F5;
  }
}
</style>
