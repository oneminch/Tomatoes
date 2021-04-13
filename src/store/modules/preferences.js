import {
	deepClone,
	initLocalStorage,
	updateLocalStorage,
} from "@/helpers/utils";

const defaultValues = {
	currentPomoName: "Classic",
	focusChime: {
		interval: 0,
		toggle: false,
	},
	darkMode: false,
	autoStart: true,
};

const ls = initLocalStorage("preferences", defaultValues);

const getDefaultState = () => {
	return !ls ? deepClone(defaultValues) : JSON.parse(ls);
};

// initial state
const state = getDefaultState();

const mutations = {
	updateDarkMode(state, newValue) {
		state.darkMode = newValue;
		updateLocalStorage("preferences", "darkMode", newValue);
	},
	updateCurrentPomoName(state, newValue) {
		state.currentPomoName = newValue;
		updateLocalStorage("preferences", "currentPomoName", newValue);
	},
	updateAutoStart(state, newValue) {
		state.autoStart = newValue;
		updateLocalStorage("preferences", "autoStart", newValue);
	},
	updateFocusChimeToggle(state, newValue) {
		state.focusChime.toggle = newValue;
		const ls = JSON.parse(localStorage.getItem("preferences"));
		ls["focusChime"].toggle = newValue;
		localStorage.setItem("preferences", JSON.stringify(ls));
	},
	updateFocusChimeInterval(state, newValue) {
		state.focusChime.interval = newValue;
		const ls = JSON.parse(localStorage.getItem("preferences"));
		ls["focusChime"].interval = newValue;
		localStorage.setItem("preferences", JSON.stringify(ls));
	},
};

export default {
	state,
	mutations,
	defaultValues,
};
