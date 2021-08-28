<template>
  <div class="layout">
    <div class="logo"></div>

    <div class="nav">
      <div
        class="nav__svgWrap"
        :class="{ nav__svgWrap_active: isMainPage }"
        @click="goToMain"
      >
        <div class="nav__svg nav__svg1"></div>

        <div v-if="isMainPage" class="nav__svgBorder"></div>
      </div>

      <div
        class="nav__svgWrap"
        :class="{ nav__svgWrap_active: isListPage }"
        @click="goToList"
      >
        <div class="nav__svg nav__svg2"></div>

        <div v-if="isListPage" class="nav__svgBorder"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Layout',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      isMainPage: 'isMainPage',
      isListPage: 'isListPage',
    }),
  },
  methods: {
    ...mapMutations({
      goToMain: 'goToMainPage',
      goToList: 'goToListPage',
    }),
  },
};

</script>

<style scoped lang="scss">
.layout, .nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.layout {
  min-width: 80px;
  min-height: 100vh;
  background-color: #ECECF6;
  padding-top: 33px;
  box-sizing: border-box;
}
.logo {
  background-image: url("../../public/svg/Union.svg");
  width: 32px;
  height: 46px;
}
.nav {
  margin-top: 143px;
  &__svgWrap {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &_active {
      & .nav__svg1 {
        background-image: url("../../public/svg/usersHover.svg");
      }
      & .nav__svg2 {
        background-image: url("../../public/svg/listHover.svg");
      }
    }
  }
  &__svgBorder {
    background-color: #14121F;
    width: 4px;
    height: 80px;
    border-radius: 50px;
    position: absolute;
    right: 0;
  }
  &__svg {
    width: 28px;
    height: 28px;
    cursor: pointer;
    &:not(:first-child) {
      margin-top: 59px;
    }
    &1 {
      background-image: url("../../public/svg/users.svg");
      &:hover {
        background-image: url("../../public/svg/usersHover.svg");
      }
    }
    &2 {
      background-image: url("../../public/svg/list.svg");
      &:hover {
        background-image: url("../../public/svg/listHover.svg");
      }
    }
  }
}
</style>
