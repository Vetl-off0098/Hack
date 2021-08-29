<template>
  <div class="taskDescription">
    <div class="taskDescription__title">
      {{ task.title }}
    </div>

    <div class="taskDescription__degree">
      {{ task.degree }}
    </div>

    <div class="taskDescription__otherInfo otherInfo">
      <div class="otherInfo__source">
        <div class="otherInfo__sourceTitle otherInfo__title">Источник</div>

        <div class="otherInfo__sourceValue">{{ task.source }}</div>
      </div>

      <div class="otherInfo__createDate">
        <div class="otherInfo__createDateTitle otherInfo__title">Дата создания</div>

        <div class="otherInfo__createDateValue">
          <div class="otherInfo__dateIcon"></div>

          {{ task.date }}
        </div>
      </div>

      <div class="otherInfo__deadline">
        <div class="otherInfo__deadlineTitle otherInfo__title">Срок выполнения</div>

        <div class="otherInfo__deadlineValue">
          <div class="otherInfo__daysIcon"></div>

          {{ task.days }}
        </div>
      </div>
    </div>

    <div class="taskDescription__text text">
      <div class="text__title">Текст обращения</div>

      <div class="text__value">
        {{ task.text }}
      </div>
    </div>

    <div class="taskDescription__taskAssignment taskAssignment">
      <div class="taskAssignment__title">
        Кому назначить задачу
      </div>

      <div v-if="candidates.length > 0">
        <div
          v-for="person of candidates"
          :key="person.id"
          class="candidateWrap"
        >
          <Candidate :info="person"/>
        </div>
      </div>

      <div v-if="units.length > 0">
        <div
          v-for="unit of units"
          :key="unit.id"
          class="candidateWrap"
        >
          <CandidateUnit :info="unit"/>
        </div>
      </div>

      <div class="manually">Назначить вручную</div>
    </div>
  </div>
</template>

<script>
import Candidate from '@/components/Candidate.vue';
import CandidateUnit from '@/components/CandidateUnit.vue';

export default {
  name: 'TaskDescription',
  components: {
    Candidate,
    CandidateUnit,
  },
  props: {
    task: Object,
  },
  data() {
    return {
      candidates: [
        {
          id: 1,
          url: '../../static/Ruslan.png',
          fio: 'Руслан Николаевич Болотов',
          position: 'Мэр города',
          probability: '99%',
          workload: 30,
        },
        {
          id: 2,
          url: '../../static/Ruslan.png',
          fio: 'Южаков Андрей Владимирович',
          position: 'Первый заместитель мэра',
          probability: '85%',
          workload: 30,
        },
      ],
      units: [
        {
          id: 1,
          name: 'Казначейский отдел',
          unit: 'Комитет городского обустройства',
          workload: 30,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.taskDescription {
  &__title {
    font-weight: 600;
    font-size: 20px;
    font-style: normal;
    line-height: 23px;
    color: #000000;
  }
  &__degree {
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
    margin-top: 8px;
  }
}
.otherInfo {
  margin-top: 20px;
  display: flex;
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__sourceValue {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #808080;
    margin-top: 4px;
  }
  &__createDate {
    margin-left: 23%;
  }
  &__dateIcon {
    background-image: url("../../public/svg/calendar.svg");
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  &__createDateValue {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #808080;
    margin-top: 4px;
    display: flex;
    margin-left: -3px;
  }
  &__deadline {
    margin-left: 16%;
  }
  &__deadlineValue {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #808080;
    margin-top: 4px;
    display: flex;
    margin-left: -3px;
  }
  &__daysIcon {
    background-image: url("../../public/svg/time.svg");
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
}
.text {
  margin-top: 24px;
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__value {
    margin-top: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #808080;
  }
}
.taskAssignment {
  margin-top: 24px;
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
}
.manually {
  padding: 28px 16px;
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  height: 72px;
  &:hover {
    background: #F5F5F5;
  }
}
</style>
