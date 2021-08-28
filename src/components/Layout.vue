<template>
  <div class="layout">
    <div class="logo"></div>

    <div class="nav">
      <div class="nav__svg nav__svg1"></div>

      <div class="nav__svg nav__svg2"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  data() {
    return {

    };
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
