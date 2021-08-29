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
            <Task
              :task="task"
              @openCurrentTask="openTask(task.id)"
            />
          </div>
        </div>

        <div class="tasksList__shadow"></div>
      </div>

      <div
        v-if="currentTaskLoaded"
        class="main__aboutTasks aboutTasks"
      >
        <TaskDescription :task="currentTask"/>
      </div>
      <div
        v-else
        class="noAboutTasks"
      >
        <div class="noAboutTasks__value">
          выберите задачу
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Task from '@/components/Task.vue';
import TaskDescription from '@/components/TaskDescription.vue';

export default {
  name: 'List',
  components: {
    Task,
    TaskDescription,
  },
  data() {
    return {
      automatic: true,
      taskList: [
        {
          id: 1,
          degree: 'Легкая',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          id: 2,
          degree: 'Средняя',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          id: 3,
          degree: 'Сложная',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
        {
          id: 4,
          degree: 'Легкая',
          title: 'Убрать мусор в подъезде',
          text: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
          date: '27.08.21',
          days: '3 дня',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      currentTask: 'currentTask',
      currentTaskLoaded: 'currentTaskLoaded',
    }),
  },
  methods: {
    ...mapMutations({
      openCurrentTask: 'openCurrentTask',
    }),
    openTask(id) {
      this.$store.commit('openCurrentTask', id);
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 20px 0 0 20px;
  &__main {
    display: flex;
  }
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
    position: sticky;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 78.12%);
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
.aboutTasks {
  width: 65%;
  margin-top: 32px;
  margin-left: 32px;
}
.noAboutTasks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &__value {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: #808080;
  }
}
</style>
