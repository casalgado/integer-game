import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answer: { value: 0, hidden: true, solved: false, active: false },
    integers: [
      { id: "o1", value: 3, x: 460, y: 260, active: true },
      { id: "o2", value: -1, x: 460, y: 460, active: true },
      { id: "o4", value: 1, x: 85, y: 360, active: true },
      { id: "o5", value: 2, x: 335, y: 360, active: true },
      { id: "o6", value: -2, x: 585, y: 360, active: true },
      { id: "o7", value: -3, x: 835, y: 360, active: true },
    ],
    dropZones: [
      {
        id: "add",
        operation: "addition",
        name: "addition",
        x1: 50,
        y1: 50,
        x2: 450,
        y2: 350,
      },
      {
        id: "sub",
        operation: "subtraction",
        name: "subtraction",
        x1: 550,
        y1: 50,
        x2: 950,
        y2: 350,
      },
      {
        id: "mul",
        operation: "multiplication",
        name: "multiplication",
        x1: 50,
        y1: 450,
        x2: 450,
        y2: 750,
      },
      {
        id: "div",
        operation: "division",
        name: "division",
        x1: 550,
        y1: 450,
        x2: 950,
        y2: 750,
      },
    ],
    history: [],
    historyPosition: 0,
    loaded: 0,
  },
  getters: {
    getIntegerById: (state) => (id) => {
      return state.integers.find((i) => i.id === id);
    },
    integers: (state) => {
      return state.integers.filter((i) => i.active);
    },
    dropZones: (state) => {
      return state.dropZones;
    },
  },
  mutations: {
    loadState(state, payload) {
      state.integers = [];
      state.dropZones = [];
      state.answer = {};
      state.integers = payload.integers;
      state.dropZones = payload.dropZones;
      state.answer = payload.answer;
      state.loaded++;
    },
    modifyInteger(state, payload) {
      // this mutation requires payload to have property of id.
      let keys = Object.keys(payload);
      state.integers.forEach((i) => {
        if (i.id === payload.id) {
          keys.forEach((k) => {
            i[k] = payload[k];
          });
        }
      });
    },
    removeInteger(state, payload) {
      // this mutation requires payload to have property of id.
      state.integers.find((i) => i.id === payload.id).active = false;
    },
    saveHistory(state) {
      let snapshot = [];
      state.integers.forEach((e) => {
        snapshot.push(JSON.parse(JSON.stringify(e)));
      });
      state.history.unshift(snapshot);
      state.historyPosition = 0;
    },
    undo(state) {
      if (state.history[state.historyPosition]) {
        state.integers = [...state.history[state.historyPosition]];
        state.historyPosition++;
      }
    },
    activeAnswer(state, payload) {
      Object.assign(state.answer, { active: payload });
    },
    solvedAnswer(state, payload) {
      Object.assign(state.answer, { solved: payload });
    },
  },
  actions: {},
  modules: {},
});
