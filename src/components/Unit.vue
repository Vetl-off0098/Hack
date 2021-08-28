<template>
  <div class="unit">
    <div
      class="unit__title"
      @click="wasClicked = !wasClicked"
    >
      <div class="unit__arrow">
        <div
          class="unit__svgArrow"
          :class="{ unit__svgArrow_rotate: wasClicked }"
        ></div>
      </div>

      <div class="unit__name">{{ unit.title }}</div>

      <div class="unit__info">
        <div class="unit__countPeople countPeople">
          <div class="countPeople__icon"></div>

          <div class="countPeople__value">{{ unit.peopleCount }}</div>
        </div>

        <div class="unit__workloadWrap">
          <v-progress-linear
            class="unit__workload"
            v-model="unit.workload"
            :buffer-value="100"
            color="#1DA442"
          ></v-progress-linear>
        </div>
      </div>
    </div>

    <div
      v-show="wasClicked"
      class="unit__drop"
    >
      <div
        class="unit__emloyees"
        v-for="empl of unit.employees"
        :key="empl.id"
      >
        <Employee :employee="empl"/>
      </div>

      <div
        v-if="unit.otherUnits"
        class="unit__otherUnitsWrap"
      >
        <div
          class="unit__otherUnits"
          v-for="unit of unit.otherUnits"
          :key="unit.id"
        >
          <Unit :unit="unit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from '@/components/Employee.vue';

export default {
  name: 'Unit',
  props: {
    unit: Object,
  },
  components: {
    Employee,
  },
  data() {
    return {
      wasClicked: false,
    };
  },
  computed: {
    employees() {
      return this.unit.employees;
    },
  },
};
</script>

<style scoped lang="scss">
.unit {
  &__title {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  &__arrow {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__svgArrow {
    background-image: url("../../public/svg/Vector.svg");
    height: 7px;
    width: 9.5px;
    transform: rotate(-90deg);
    &_rotate {
      transform: rotate(0deg);
    }
  }
  &__name {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #584F8A;
  }
  &__info {
    display: flex;
    margin-left: 16.7px;
  }
  &__workloadWrap {
    display: flex;
    align-items: center;
  }
  &__workload {
    margin-left: 12px;
    width: 32px;
  }
  &__drop {
    padding-left: 26px;
    box-sizing: border-box;
    border-left: 1px dashed #808080;
    margin-left: 7px;
    margin-top: 10px;
  }
}
.countPeople {
  display: flex;
  &__icon {
    background-image: url("../../public/svg/empl.svg");
    width: 16px;
    height: 16px;
  }
  &__value {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #808080;
    margin-left: 3px;
  }
}
.v-progress-linear {
  border-radius: 20px;
}
</style>
