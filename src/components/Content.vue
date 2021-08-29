<template>
  <div class="content" v-if="!userInfoOpen">
    <div class="header">
      <div class="header__leftSide">
        <div class="header__title">Администрация</div>

        <div class="header__subtitle">Город Томск</div>
      </div>

      <div class="header__rightSide rightSide">
        <div class="rightSide__download"></div>

        <div class="rightSide__search">
          <div class="rightSide__magnifier"></div>
          <input type="text" placeholder="Найти сотрудинка">
        </div>
      </div>
    </div>

    <div class="cards">
      <Card
        :text="'Численность администрации'"
        :digit="'124'"
        :isPeople="true"
      />

      <Card
        :text="'Общая эффективность'"
        :digit="'9.3'"
      />

      <Card
        :text="'Общая эффективность'"
        :digit="'9.3'"
      />
    </div>

    <div class="employees">
      <div class="employees__title">Сотрудники</div>

      <div class="employees__headerBlock headerBlock">
        <div class="headerBlock__fio">ФИО</div>

        <div class="headerBlock__position">Должность</div>

        <div class="headerBlock__workload">Загрузка</div>

        <div class="headerBlock__diligence">Исполнительность</div>
      </div>

      <div
        class="employees__main"
        v-for="empl of employes.employees"
        :key="empl.id"
      >
        <Employee :employee="empl"/>
      </div>

      <div
        class="organizationalUnit"
        v-for="unit of employes.units"
        :key="unit.id"
      >
        <Unit :unit="unit"/>
      </div>
    </div>
  </div>
  <div class="userInfo" v-else>
    <EmployeeInfo/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Employee from '@/components/Employee.vue';
import Card from '@/components/Card.vue';
import Unit from '@/components/Unit.vue';
import EmployeeInfo from '@/components/EmployeeInfo.vue';

export default {
  name: 'Content',
  components: {
    Employee,
    Card,
    Unit,
    EmployeeInfo,
  },
  mounted() {
    this.fetchEmployes();
  },
  data() {
    return {
      // employes: [
      //   {
      //     id: 1,
      //     url: '../../static/Ruslan.png',
      //     fio: 'Руслан Николаевич Болотов',
      //     position: 'Мэр города',
      //     diligence: '7.8',
      //     workload: 30,
      //   },
      //   {
      //     id: 2,
      //     url: '../../public/svg/Ruslan.png',
      //     fio: 'Южаков Андрей Владимирович',
      //     position: 'Первый заместитель мэра',
      //     diligence: '7.8',
      //     workload: 30,
      //   },
      //   {
      //     id: 3,
      //     url: '../../public/svg/Ruslan.png',
      //     fio: 'Ружников Дмитрий Олегович',
      //     position: 'Вице-мэр',
      //     diligence: '7.8',
      //     workload: 30,
      //   },
      // ],
      // units: [
      //   {
      //     id: 4,
      //     title: 'Комитет по управлению Правобережным округом',
      //     peopleCount: 12,
      //     workload: 30,
      //     employees: [
      //       {
      //         id: 11,
      //         url: '../../static/Ruslan.png',
      //         fio: 'Эдельман Татьяна Николаевна',
      //         position: 'Председатель комитета',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 22,
      //         url: '../../public/svg/Ruslan.png',
      //         fio: 'Перевалова Надежда Анатольевна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 33,
      //         url: '../../public/static/svg/Ruslan.png',
      //         fio: 'Уколова Мария Романовна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //     ],
      //     otherUnits: [
      //       {
      //         id: 555,
      //         title: 'Комитет по управлению Правобережным округом',
      //         peopleCount: 12,
      //         workload: 30,
      //         employees: [
      //           {
      //             id: 11,
      //             url: '../../static/Ruslan.png',
      //             fio: 'Эдельман Татьяна Николаевна',
      //             position: 'Председатель комитета',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 22,
      //             url: '../../public/svg/Ruslan.png',
      //             fio: 'Перевалова Надежда Анатольевна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 33,
      //             url: '../../public/static/svg/Ruslan.png',
      //             fio: 'Уколова Мария Романовна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     id: 5,
      //     title: 'Комитет по управлению Правобережным округом',
      //     peopleCount: 12,
      //     workload: 30,
      //     employees: [
      //       {
      //         id: 11,
      //         url: '../../static/Ruslan.png',
      //         fio: 'Эдельман Татьяна Николаевна',
      //         position: 'Председатель комитета',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 22,
      //         url: '../../public/svg/Ruslan.png',
      //         fio: 'Перевалова Надежда Анатольевна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 33,
      //         url: '../../public/static/svg/Ruslan.png',
      //         fio: 'Уколова Мария Романовна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //     ],
      //     otherUnits: [
      //       {
      //         id: 666,
      //         title: 'Комитет по управлению Свердловским округом',
      //         peopleCount: 12,
      //         workload: 30,
      //         employees: [
      //           {
      //             id: 11,
      //             url: '../../static/Ruslan.png',
      //             fio: 'Эдельман Татьяна Николаевна',
      //             position: 'Председатель комитета',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 22,
      //             url: '../../public/svg/Ruslan.png',
      //             fio: 'Перевалова Надежда Анатольевна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 33,
      //             url: '../../public/static/svg/Ruslan.png',
      //             fio: 'Уколова Мария Романовна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     id: 6,
      //     title: 'Комитет по управлению Октябрьским округом',
      //     peopleCount: 12,
      //     workload: 30,
      //     employees: [
      //       {
      //         id: 11,
      //         url: '../../static/Ruslan.png',
      //         fio: 'Эдельман Татьяна Николаевна',
      //         position: 'Председатель комитета',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 22,
      //         url: '../../public/svg/Ruslan.png',
      //         fio: 'Перевалова Надежда Анатольевна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //       {
      //         id: 33,
      //         url: '../../public/static/svg/Ruslan.png',
      //         fio: 'Уколова Мария Романовна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //         workload: 30,
      //       },
      //     ],
      //     otherUnits: [
      //       {
      //         id: 777,
      //         title: 'Комитет по социальной политике и культуре',
      //         peopleCount: 12,
      //         workload: 30,
      //         employees: [
      //           {
      //             id: 11,
      //             url: '../../static/Ruslan.png',
      //             fio: 'Эдельман Татьяна Николаевна',
      //             position: 'Председатель комитета',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 22,
      //             url: '../../public/svg/Ruslan.png',
      //             fio: 'Перевалова Надежда Анатольевна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //           {
      //             id: 33,
      //             url: '../../public/static/svg/Ruslan.png',
      //             fio: 'Уколова Мария Романовна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //             workload: 30,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     id: 7,
      //     title: 'Комитет по управлению Свердловским округом',
      //     peopleCount: 12,
      //     workload: 30,
      //     employees: [
      //       {
      //         id: 11,
      //         url: '../../static/Ruslan.png',
      //         fio: 'Эдельман Татьяна Николаевна',
      //         position: 'Председатель комитета',
      //         diligence: '7.8',
      //       },
      //       {
      //         id: 22,
      //         url: '../../public/svg/Ruslan.png',
      //         fio: 'Перевалова Надежда Анатольевна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //       },
      //       {
      //         id: 33,
      //         url: '../../public/static/svg/Ruslan.png',
      //         fio: 'Уколова Мария Романовна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //       },
      //     ],
      //     otherUnits: [
      //       {
      //         id: 888,
      //         title: 'Комитет городского обустройства ',
      //         peopleCount: 12,
      //         workload: 30,
      //         employees: [
      //           {
      //             id: 11,
      //             url: '../../static/Ruslan.png',
      //             fio: 'Эдельман Татьяна Николаевна',
      //             position: 'Председатель комитета',
      //             diligence: '7.8',
      //           },
      //           {
      //             id: 22,
      //             url: '../../public/svg/Ruslan.png',
      //             fio: 'Перевалова Надежда Анатольевна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //           },
      //           {
      //             id: 33,
      //             url: '../../public/static/svg/Ruslan.png',
      //             fio: 'Уколова Мария Романовна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     id: 8,
      //     title: 'Комитет по управлению Ленинским округом',
      //     peopleCount: 12,
      //     workload: 30,
      //     employees: [
      //       {
      //         id: 11,
      //         url: '../../static/Ruslan.png',
      //         fio: 'Эдельман Татьяна Николаевна',
      //         position: 'Председатель комитета',
      //         diligence: '7.8',
      //       },
      //       {
      //         id: 22,
      //         url: '../../public/svg/Ruslan.png',
      //         fio: 'Перевалова Надежда Анатольевна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //       },
      //       {
      //         id: 33,
      //         url: '../../public/static/svg/Ruslan.png',
      //         fio: 'Уколова Мария Романовна',
      //         position: 'Консультат по правовым вопросам',
      //         diligence: '7.8',
      //       },
      //     ],
      //     otherUnits: [
      //       {
      //         id: 999,
      //         title: 'Комитет по управлению Правобережным округом',
      //         peopleCount: 12,
      //         workload: 30,
      //         employees: [
      //           {
      //             id: 11,
      //             url: '../../static/Ruslan.png',
      //             fio: 'Эдельман Татьяна Николаевна',
      //             position: 'Председатель комитета',
      //             diligence: '7.8',
      //           },
      //           {
      //             id: 22,
      //             url: '../../public/svg/Ruslan.png',
      //             fio: 'Перевалова Надежда Анатольевна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //           },
      //           {
      //             id: 33,
      //             url: '../../public/static/svg/Ruslan.png',
      //             fio: 'Уколова Мария Романовна',
      //             position: 'Консультат по правовым вопросам',
      //             diligence: '7.8',
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
    };
  },
  computed: {
    ...mapGetters({
      employes: 'employes',
      userInfoOpen: 'userInfoOpen',
    }),
  },
  methods: {
    ...mapActions({
      fetchEmployes: 'fetchEmployes',
    }),
  },
};

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background-color: #FFFFFF;
  padding: 24px 24px 24px 40px;
  border-radius: 20px 0 0 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #14121F;
  }
  &__subtitle {
    margin-top: 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #B3B3B3;
  }
}
.rightSide {
  display: flex;
  &__download {
    background-image: url("../../public/svg/download.svg");
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  &__search {
    position: relative;
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
.cards {
  display: flex;
  margin-top: 25px;
}
.employees {
  margin-top: 38px;
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #14121F;
  }
  &__headerBlock {
    margin-top: 20px;
    display: flex;
    padding: 9px 0;
    box-sizing: border-box;
    background: #F5F5F5;
    border-radius: 12px;
  }
}
.headerBlock {
  width: 100%;
  margin-bottom: 4px;
  &__fio, &__position, &__workload, &__diligence {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7B7B7B;
  }
  &__fio {
    width: 45.02%;
    margin-left: 5.18%;
  }
  &__position {
    width: 23.02%;
  }
  &__workload {
    width: 64px;
  }
  &__diligence {
    margin-left: 36px;
  }
}
.userInfo {
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 20px 0 0 20px;
}
</style>
