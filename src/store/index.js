import presets from "./modules/presets";
import preferences from "./modules/preferences";
import { deepClone, initLocalStorage } from "@/helpers/utils";

const vueStore = {
	mutations: {
		resetState(state) {
			// Reset state with default values
			Object.assign(state, {
				presets: deepClone(presets.defaultValues),
				preferences: deepClone(preferences.defaultValues),
			});

			// Reinitialize localStorage with default presets and preferences
			initLocalStorage("presets", deepClone(presets.defaultValues));
			initLocalStorage(
				"preferences",
				deepClone(preferences.defaultValues)
			);
		},
	},
	modules: {
		presets,
		preferences,
	},
};

export { vueStore };
