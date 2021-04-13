import { initLocalStorage } from "@/helpers/utils";

const defaultValues = [
	{
		name: "Classic",
		rounds: 4,
		longBreakDuration: 600,
		shortBreakDuration: 300,
		focusDuration: 1500,
	},
	{
		name: "50-10-15",
		rounds: 2,
		longBreakDuration: 900,
		shortBreakDuration: 600,
		focusDuration: 3000,
	},
];

const ls = initLocalStorage("presets", defaultValues);

const getDefaultState = () => {
	return !ls ? defaultValues.slice() : JSON.parse(ls);
};

// initial state
const state = getDefaultState();

export default {
	state,
	// mutations,
	defaultValues,
};
