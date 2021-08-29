import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employes: {},
    userInfoOpen: false,
    isMainPage: true,
    isListPage: false,
    currentTask: {},
    currentTaskLoaded: false,
    manually: false,
    tasks: [],
    tasks1: [
      {
        id: 1,
        degree: 'Легкая',
        title: 'Убрать мусор в подъезде',
        shortText: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
        text: 'Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что...',
        date: '27.08.21',
        days: '3 дня',
        source: 'Приемная',
        komuNaznachitUnits: [
          {
            name: 'Казначейский отдел',
            unit: 'Комитет городского обустройства',
            workload: 30,
          },
        ],
        komuNaznachit: [
          {
            id: 1,
            url: '../../static/Ruslan.png',
            fio: 'Руслан Николаевич Болотов',
            veroyatnostVipolneniya: 99,
            diligence: '7.8',
            workload: 30,
          },
          {
            id: 2,
            url: '../../public/svg/Ruslan.png',
            fio: 'Южаков Андрей Владимирович',
            position: 'Первый заместитель мэра',
            veroyatnostVipolneniya: 85,
            workload: 30,
          },
          {
            id: 3,
            url: '../../public/svg/Ruslan.png',
            fio: 'Ружников Дмитрий Олегович',
            position: 'Вице-мэр',
            veroyatnostVipolneniya: 99,
            workload: 30,
          },
        ],
      },
      {
        id: 2,
        degree: 'Средняя',
        title: 'Убрать мусор в подъезде',
        shortText: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
        text: 'Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что...',
        date: '27.08.21',
        days: '3 дня',
        source: 'Приемная',
      },
      {
        id: 3,
        degree: 'Сложная',
        title: 'Убрать мусор в подъезде',
        shortText: 'Короче, Меченый, я тебя спас и в благородство играть не выполнишь...',
        text: 'Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что...',
        date: '27.08.21',
        days: '3 дня',
        source: 'Приемная',
      },
      {
        id: 4,
        degree: 'Легкая',
        title: 'Убрать мусор в подъезде',
        text: 'Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что...',
        date: '27.08.21',
        days: '3 дня',
        source: 'Приемная',
      },
    ],
  },
  mutations: {
    setEmployes(state, response) {
      state.employes = response;
    },
    goToMainPage(state) {
      state.isListPage = false;
      state.isMainPage = true;
    },
    goToListPage(state) {
      state.isMainPage = false;
      state.isListPage = true;
    },
    setTasks(state, response) {
      state.tasks = response;
    },
    openCurrentTask(state, id) {
      state.currentTask = state.tasks.find((el) => el.id === id);
      state.currentTaskLoaded = true;
    },
    openManually(state) {
      state.manually = true;
    },
    back(state) {
      state.manually = false;
    },
    openUserInfo(state) {
      state.userInfoOpen = true;
    },
    closeUserInfo(state) {
      state.userInfoOpen = false;
    },
  },
  actions: {
    async fetchEmployes({ commit }) {
      try {
        let response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/organization`);
        response = await response.json();
        if (!response) return;

        commit('setEmployes', response);
      } catch (err) {
        console.error(err);
      }
    },
    async fetchTasks({ commit }) {
      try {
        let response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/tasks`);
        response = await response.json();
        if (!response) return;

        commit('setTasks', response.tasks);
        // commit('openCurrentTask');
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {
  },
  getters: {
    employes: (s) => s.employes,
    tasks: (s) => s.tasks,
    userInfoOpen: (s) => s.userInfoOpen,
    isMainPage: (s) => s.isMainPage,
    isListPage: (s) => s.isListPage,
    currentTask: (s) => s.currentTask,
    currentTaskLoaded: (s) => s.currentTaskLoaded,
    manually: (s) => s.manually,
  },
});
