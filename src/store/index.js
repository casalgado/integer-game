import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    integers: [
      { id: "o0", value: 2, x: 460, y: 150, active: true },
      { id: "o1", value: 1, x: 460, y: 250, active: true },
      { id: "o2", value: 0, x: 460, y: 350, active: true },
      { id: "o3", value: -1, x: 460, y: 450, active: true },
      { id: "o4", value: -2, x: 460, y: 550, active: true },
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
      state.integers = payload.integers;
      state.dropZones = payload.dropZones;
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
  },
  actions: {},
  modules: {},
});
