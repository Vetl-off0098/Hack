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

    <div
      v-if="!manually"
      class="taskDescription__taskAssignment taskAssignment"
    >
      <div class="taskAssignment__title">
        Кому назначить задачу
      </div>

      <div v-if="task.komuNaznachit.length > 0">
        <div
          v-for="person of task.komuNaznachit"
          :key="person.id"
          class="candidateWrap"
        >
          <Candidate :info="person"/>
        </div>
      </div>

      <div v-if="task.komuNaznachitUnits.length > 0">
        <div
          v-for="unit of task.komuNaznachitUnits"
          :key="unit.id"
          class="candidateWrap"
        >
          <CandidateUnit :info="unit"/>
        </div>
      </div>

      <div
        class="manually"
        @click="openManually"
      >Назначить вручную</div>
    </div>

    <div
      class="manuallyBlock"
      v-else
    >
      <div class="manuallyBlock__mainTitle">
        Назначить задачу
      </div>

      <div class="manuallyBlock__main">
        <div class="manuallyBlock__header">
          <div
            class="manuallyBlock__svgAndTitle"
            @click="back"
          >
            <div class="manuallyBlock__svg"></div>

            <div class="manuallyBlock__title">Назначить вручную</div>
          </div>
        </div>

        <div class="manuallyBlock__body">
          <div class="manuallyBlock__search">
            <div class="manuallyBlock__magnifier"></div>
            <input type="text" placeholder="Найти сотрудинка">
          </div>

          <div
            class="manually__list"
            v-for="item of manualList"
            :key="item.id"
          >
            <Unit :unit="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Candidate from '@/components/Candidate.vue';
import CandidateUnit from '@/components/CandidateUnit.vue';
import Unit from '@/components/Unit.vue';

export default {
  name: 'TaskDescription',
  components: {
    Candidate,
    CandidateUnit,
    Unit,
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
      manualList: [
        {
          id: 4,
          title: 'Комитет по управлению Правобережным округом',
          peopleCount: 12,
          workload: 30,
          employees: [
            {
              id: 11,
              url: '../../static/Ruslan.png',
              fio: 'Эдельман Татьяна Николаевна',
              position: 'Председатель комитета',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 22,
              url: '../../public/svg/Ruslan.png',
              fio: 'Перевалова Надежда Анатольевна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 33,
              url: '../../public/static/svg/Ruslan.png',
              fio: 'Уколова Мария Романовна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
          ],
          otherUnits: [
            {
              id: 555,
              title: 'Комитет по управлению Правобережным округом',
              peopleCount: 12,
              workload: 30,
              employees: [
                {
                  id: 11,
                  url: '../../static/Ruslan.png',
                  fio: 'Эдельман Татьяна Николаевна',
                  position: 'Председатель комитета',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 22,
                  url: '../../public/svg/Ruslan.png',
                  fio: 'Перевалова Надежда Анатольевна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 33,
                  url: '../../public/static/svg/Ruslan.png',
                  fio: 'Уколова Мария Романовна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title: 'Комитет по управлению Правобережным округом',
          peopleCount: 12,
          workload: 30,
          employees: [
            {
              id: 11,
              url: '../../static/Ruslan.png',
              fio: 'Эдельман Татьяна Николаевна',
              position: 'Председатель комитета',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 22,
              url: '../../public/svg/Ruslan.png',
              fio: 'Перевалова Надежда Анатольевна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 33,
              url: '../../public/static/svg/Ruslan.png',
              fio: 'Уколова Мария Романовна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
          ],
          otherUnits: [
            {
              id: 666,
              title: 'Комитет по управлению Свердловским округом',
              peopleCount: 12,
              workload: 30,
              employees: [
                {
                  id: 11,
                  url: '../../static/Ruslan.png',
                  fio: 'Эдельман Татьяна Николаевна',
                  position: 'Председатель комитета',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 22,
                  url: '../../public/svg/Ruslan.png',
                  fio: 'Перевалова Надежда Анатольевна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 33,
                  url: '../../public/static/svg/Ruslan.png',
                  fio: 'Уколова Мария Романовна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
              ],
            },
          ],
        },
        {
          id: 6,
          title: 'Комитет по управлению Октябрьским округом',
          peopleCount: 12,
          workload: 30,
          employees: [
            {
              id: 11,
              url: '../../static/Ruslan.png',
              fio: 'Эдельман Татьяна Николаевна',
              position: 'Председатель комитета',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 22,
              url: '../../public/svg/Ruslan.png',
              fio: 'Перевалова Надежда Анатольевна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
            {
              id: 33,
              url: '../../public/static/svg/Ruslan.png',
              fio: 'Уколова Мария Романовна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
              workload: 30,
            },
          ],
          otherUnits: [
            {
              id: 777,
              title: 'Комитет по социальной политике и культуре',
              peopleCount: 12,
              workload: 30,
              employees: [
                {
                  id: 11,
                  url: '../../static/Ruslan.png',
                  fio: 'Эдельман Татьяна Николаевна',
                  position: 'Председатель комитета',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 22,
                  url: '../../public/svg/Ruslan.png',
                  fio: 'Перевалова Надежда Анатольевна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
                {
                  id: 33,
                  url: '../../public/static/svg/Ruslan.png',
                  fio: 'Уколова Мария Романовна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                  workload: 30,
                },
              ],
            },
          ],
        },
        {
          id: 7,
          title: 'Комитет по управлению Свердловским округом',
          peopleCount: 12,
          workload: 30,
          employees: [
            {
              id: 11,
              url: '../../static/Ruslan.png',
              fio: 'Эдельман Татьяна Николаевна',
              position: 'Председатель комитета',
              diligence: '7.8',
            },
            {
              id: 22,
              url: '../../public/svg/Ruslan.png',
              fio: 'Перевалова Надежда Анатольевна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
            },
            {
              id: 33,
              url: '../../public/static/svg/Ruslan.png',
              fio: 'Уколова Мария Романовна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
            },
          ],
          otherUnits: [
            {
              id: 888,
              title: 'Комитет городского обустройства ',
              peopleCount: 12,
              workload: 30,
              employees: [
                {
                  id: 11,
                  url: '../../static/Ruslan.png',
                  fio: 'Эдельман Татьяна Николаевна',
                  position: 'Председатель комитета',
                  diligence: '7.8',
                },
                {
                  id: 22,
                  url: '../../public/svg/Ruslan.png',
                  fio: 'Перевалова Надежда Анатольевна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                },
                {
                  id: 33,
                  url: '../../public/static/svg/Ruslan.png',
                  fio: 'Уколова Мария Романовна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                },
              ],
            },
          ],
        },
        {
          id: 8,
          title: 'Комитет по управлению Ленинским округом',
          peopleCount: 12,
          workload: 30,
          employees: [
            {
              id: 11,
              url: '../../static/Ruslan.png',
              fio: 'Эдельман Татьяна Николаевна',
              position: 'Председатель комитета',
              diligence: '7.8',
            },
            {
              id: 22,
              url: '../../public/svg/Ruslan.png',
              fio: 'Перевалова Надежда Анатольевна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
            },
            {
              id: 33,
              url: '../../public/static/svg/Ruslan.png',
              fio: 'Уколова Мария Романовна',
              position: 'Консультат по правовым вопросам',
              diligence: '7.8',
            },
          ],
          otherUnits: [
            {
              id: 999,
              title: 'Комитет по управлению Правобережным округом',
              peopleCount: 12,
              workload: 30,
              employees: [
                {
                  id: 11,
                  url: '../../static/Ruslan.png',
                  fio: 'Эдельман Татьяна Николаевна',
                  position: 'Председатель комитета',
                  diligence: '7.8',
                },
                {
                  id: 22,
                  url: '../../public/svg/Ruslan.png',
                  fio: 'Перевалова Надежда Анатольевна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                },
                {
                  id: 33,
                  url: '../../public/static/svg/Ruslan.png',
                  fio: 'Уколова Мария Романовна',
                  position: 'Консультат по правовым вопросам',
                  diligence: '7.8',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      manually: 'manually',
    }),
  },
  methods: {
    ...mapMutations({
      openManually: 'openManually',
      back: 'back',
    }),
  },
};
</script>

<style scoped lang="scss">
.taskDescription {
  padding-bottom: 12px;
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
.manuallyBlock {
  margin-top: 24px;
  &__main {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 23px;
  }
  &__mainTitle {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  &__header {
    display: flex;
    height: 68px;
    border-bottom: 1px solid #EAEAEA;
  }
  &__svgAndTitle {
    display: flex;
    align-items: center;
    margin-top: 26px;
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
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-left: 10px;
  }
  &__body {
    padding: 16px;
    box-sizing: border-box;
  }
  &__search {
    position: relative;
    width: 100%;
    & input {
      width: 100%;
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
