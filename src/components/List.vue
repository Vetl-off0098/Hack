<template>
  <div class="list">
    <div class="list__header header">
      <div class="header__title">Центр распределения задач</div>

      <div class="header__search">
        <div class="header__magnifier"></div>
        <input type="text" placeholder="Найти сотрудинка">
      </div>
    </div>

    <div class="list__main main">
      <div class="main__tasksList tasksList">
        <div class="tasksList__titleWrap">
          <div class="tasksList__title">
            Список задач
          </div>
        </div>

        <div class="tasksList__toggle">
          <div class="tasksList__toggleTitle">Автоматическое распределение</div>

          <v-switch
            v-model="automatic"
            color="black"
            inset
            flat
            dense
          ></v-switch>
        </div>

        <div class="taskWrap">
          <div
            v-for="task of taskList"
            :key="task.id"
          >
            <Task :task="task"/>
          </div>
        </div>

        <div class="tasksList__shadow"></div>
      </div>

      <div class="main__aboutTasks aboutTasks">

      </div>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
  name: 'List',
  components: {
    Task,
  },
  data() {
    return {
      automatic: true,
      taskList: [
        {
          degree: 'Легкая',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          degree: 'Средняя',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          degree: 'Сложная',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          degree: 'Легкая',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.list {
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 20px 0 0 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAEAEA;
  padding: 30px 0;
  box-sizing: border-box;
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #14121F;
    margin-left: 32px;
  }
  &__search {
    position: relative;
    margin-right: 16px;
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
.tasksList {
  background: #FFFFFF;
  box-shadow: 0 4px 12px rgb(0 0 0 / 12%);
  border-radius: 20px;
  width: 302px;
  margin-top: 24px;
  margin-left: 24px;
  max-height: 618px;
  overflow-y: scroll;
  position: relative;
  overflow-x: hidden;
  &__titleWrap {
    border-bottom: 1px solid #EAEAEA;
    padding-bottom: 16px;
    box-sizing: border-box;
    padding-top: 16px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #14121F;
    margin-left: 16px;
  }
  &__toggle {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EAEAEA;
    position: sticky;
    top: 51px;
    z-index: 100;
    background-color: #fff;
    margin-top: -1px;
  }
  &__toggleTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    margin-top: 24px;
    margin-left: 16px;
  }
  &__shadow {
    width: 302px;
    height: 39px;
    position: static;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 78.12%);
  }
}
</style>
