<template>
    <div id='Settings' class="w-full mx-auto  ml-36">
		<div class="w-full max-w-3xl mx-auto shadow-lg bg-gray-50 dark:bg-gray-700 rounded-xl py-6 px-12">
			<div class="flex flex-col justify-between items-center w-full mx-auto mb-4 text-gray-900 dark:text-gray-100">
				<div class="flex justify-between items-center w-full mx-auto mb-4 text-gray-900 dark:text-gray-100">
					<label 
						id="dropdown-label"
						for="theme-dropdown" 
						class="cursor-pointer leading-7 select-none inline-block tracking-wide font-bold text-xl" 
						>
						Timer Option 
					</label>
					<div class="ml-auto mb-2 flex items-center">
						<app-dropdown 
							class="w-44"
							:options="presetNames"
							:value.sync="currentPomoName"
							:identifier="'theme-dropdown'" 
						>
							<!-- Time icon -->
							<svg class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</app-dropdown>

						<!-- <app-button
							@clicked="alerty('Not Implemented Function')"
							:label="'Add New Pomo Preset'"
							class="w-10 h-10 rounded-full p-0 flex justify-center items-center m-0 ml-4 text-white bg-indigo-500 border-indigo-500 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
						>
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
							</svg>
						</app-button> -->
					</div>

				</div>

				<!-- Current Pomo Display Table -->
				<div class="w-full border-2 border-gray-300 dark:border-gray-500 rounded-lg overflow-hidden text-gray-900 dark:text-gray-100">
					<table class="table-auto w-full border-collapse bg-gray-50 dark:bg-gray-800">
						<thead class="bg-gray-100 dark:bg-gray-600 border-b border-gray-300 dark:border-gray-500">
							<tr>
								<th scope="col" class="py-2 text-center text-xs font-extrabold uppercase tracking-wider">
									Focus
								</th>
								<th scope="col" class="py-2 text-center text-xs font-extrabold uppercase tracking-wider">
									Short Break
								</th>
								<th scope="col" class="py-2 text-center text-xs font-extrabold uppercase tracking-wider">
									Long Break
								</th>
								<th scope="col" class="py-2 text-center text-xs font-extrabold uppercase tracking-wider">
									Rounds
								</th>
							</tr>
						</thead>
						<tbody class="border-t">
							<tr>
								<td class="px-6 py-4 whitespace-nowrap text-center">
									<span class="bg-gray-300 dark:bg-gray-600 rounded-full inline-block text-sm font-semibold leading-8 h-8 mx-2 py-0.5 px-3">
										{{ timeDisplay(currentPomo.focusDuration) }}
									</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-center">
									<span class="bg-gray-300 dark:bg-gray-600 rounded-full inline-block text-sm font-semibold leading-8 h-8 mx-2 py-0.5 px-3">
										{{ timeDisplay(currentPomo.shortBreakDuration) }}
									</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-center">
									<span class="bg-gray-300 dark:bg-gray-600 rounded-full inline-block text-sm font-semibold leading-8 h-8 mx-2 py-0.5 px-3">
										{{ timeDisplay(currentPomo.longBreakDuration) }}
									</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-center">
									<span class="bg-gray-300 dark:bg-gray-600 rounded-full inline-block text-sm font-semibold leading-8 h-8 mx-2 py-0.5 px-3">
										{{ currentPomo.rounds }}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			
			<hr class="w-full border-1.5 rounded-md border-solid border-gray-200 dark:border-gray-600">

			<div class="w-full my-4 flex justify-between items-center text-gray-900 dark:text-gray-100">
				<label for="theme" class="font-bold text-xl select-none cursor-pointer">
					Dark Mode
				</label>
				
				<app-toggle id="theme" :checked.sync="darkMode"></app-toggle>
			</div>
			
			<hr class="w-full border rounded-md border-solid border-gray-200 dark:border-gray-600">

			<div class="w-full my-4 flex justify-between items-center text-gray-900 dark:text-gray-100">
				<label for="auto-start" class="font-bold text-xl select-none cursor-pointer text-gray-400">
					Auto Start Next Round
				</label>
				
				<app-toggle id="auto-start" :label="'Auto Start Next Round'" :checked.sync="autoStart" :disabled="true"></app-toggle>
			</div>


			<!-- <hr class="w-full border rounded-md border-solid border-gray-200 dark:border-gray-600">

			<div class="w-full my-4 flex justify-between items-center text-gray-900 dark:text-gray-100">
				<label for="chime" class="font-bold text-xl select-none cursor-pointer">
					Chime
				</label>
				
				<app-toggle id="chime" :checked.sync="focusChimeToggle"></app-toggle>
			</div> -->

			<!-- <hr class="w-full border rounded-md border-solid border-gray-200 dark:border-gray-600"> -->

			<div class="w-full mb-4 mt-8 p-4 flex justify-between items-center border-2 border-red-500 rounded-lg overflow-hidden text-gray-900 dark:text-gray-100">
				<p class="font-bold text-xl select-none">
					Reset Local Data
				</p>
				
				<app-button
					@clicked="resetLocalData"
					:label="'Reset Local Data'"
					class="w-36 px-6 py-2 text-white bg-red-500 focus:ring-4 focus:ring-red-400 focus:ring-opacity-50 border-none"
				>{{ resetBtnText }}</app-button>
			</div>
			
		</div>
	</div>
</template>


<script>
import { deepClone } from "@/helpers/utils";
import Button from "@/components/Button.vue";
import Toggle from "@/components/Toggle.vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
    name: 'Settings',
    components: {
        appButton: Button,
		appToggle: Toggle,
        appDropdown: Dropdown,
    },
    metaInfo: {
        title: 'Settings',
        meta: [
            { vmid: 'title', name: 'title', template: '%s | EncryptedList', content: 'Page Not Found'},
			{ vmid: 'og:title', property: 'og:title', template: '%s | EncryptedList', content: 'Page Not Found'},
			{ vmid: 'twitter:title', name: 'twitter:title', template: '%s | EncryptedList', content: 'Page Not Found' },
        ],
    },
    data() {
		return {
			resetBtnText: "Reset Data",
		}
	},
	created() {
		// console.log(this.$store);
	},
	methods: {
		alerty: function() {
			// alert(msg); 
			this.$router.push("settings/add")
			// this.$router.push({ path: 'add' })
		},
		timeDisplay: function(time) {
			return time < 60 ? `${time} sec` : `${time/60} min`; 
		},
		resetLocalData: function() {
			let vm = this;

			localStorage.clear();

			this.$store.commit('resetState');
			
			vm.resetBtnText = "Done!"
			setTimeout(() => {
				vm.resetBtnText = "Reset Data"
			}, 2000);
		}
	},
	computed: {
		currentPomo: function() {
			let currPomo,
				pomoName = this.$store.state.preferences.currentPomoName;

			this.$store.state.presets.forEach(el => {
				if (el.name.toLowerCase() === pomoName.toLowerCase()) {
					currPomo = deepClone(el);
				}
			});
			return currPomo;
		},
		presets() {
			return this.$store.state.presets;
		},
		presetNames() {
			return this.presets.map(el => el.name);
		},
		currentPomoName: {
			get: function() {
				return this.$store.state.preferences.currentPomoName;
			},
			set: function(value) {
				this.$store.commit('updateCurrentPomoName', value);
			}
		},
		darkMode: {
			get: function() {
				return this.$store.state.preferences.darkMode;
			},
			set: function(value) {
				this.$store.commit('updateDarkMode', value);
			}
		},
		autoStart: {
			get: function() {
				return this.$store.state.preferences.autoStart;
			},
			set: function(value) {
				this.$store.commit('updateAutoStart', value);
			}
		},
		focusChimeToggle: {
			get: function() {
				return this.$store.state.preferences.focusChime.toggle;
			},
			set: function(value) {
				this.$store.commit('updateFocusChimeToggle', value);
			}
		},
		focusChimeInterval: {
			get: function() {
				return this.$store.state.preferences.focusChime.interval;
			},
			set: function(value) {
				this.$store.commit('updateFocusChimeInterval', value);
			}
		}
	},
}
</script>


<style scoped>

</style>
