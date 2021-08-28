<template>
  <div class="task">
    <div class="task__degreeBlock">{{ task.degree }}</div>

    <div class="task__title">{{ task.title }}</div>

    <div class="task__text">{{ task.text }}</div>

    <div class="task__dateAndDays">
      <div class="task__date">
        <div class="task__dateIcon"></div>

        {{ task.date }}
      </div>

      <div class="task__days">
        <div class="task__daysIcon"></div>

        {{ task.days }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Task',
  props: {
    task: Object,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
.task {
  padding: 16px;
  border-bottom: 1px solid #EAEAEA;
  position: relative;
  &__degreeBlock {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #2D9B25;
    padding: 5px 8px;
    background: #C8F3C5;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 58px;
    max-width: 68px;
  }
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #4D4D4D;
    margin-top: 6px;
  }
  &__text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #808080;
    margin-top: 4px;
  }
  &__dateAndDays, &__date, &__days {
    display: flex;
  }
  &__dateAndDays {
    margin-top: 12px;
  }
  &__date {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #808080;
  }
  &__dateIcon {
    background-image: url("../../public/svg/calendar.svg");
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  &__days {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #808080;
    margin-left: 26px;
  }
  &__daysIcon {
    background-image: url("../../public/svg/time.svg");
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
}
</style>
