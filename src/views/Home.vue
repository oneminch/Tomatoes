<template>
	<div id="Home">
		<!-- Title -->
		<div class="font-extrabold dark:text-gray-100">
			<div class="w-72 mx-auto my-4 p-2 rounded-lg border-2 border-gray-300 dark:border-gray-600">
				Current Task - Work In Progress
			</div>
		</div>

		<!-- Radial progress bar -->
		<app-radial-progress-bar 
			:sessions="sessions"
		></app-radial-progress-bar>

		<!-- Pause should only work while focusing not resting -->
		
		<!-- Start Button: Visible When Timer is Stopped -->
		<app-button
			@clicked="startTimer"
			:label="'Start Session'"
			v-show="currentSession.stopped"
			class="w-28 px-6 py-2 text-white bg-indigo-500 mx-auto my-4 border-indigo-500 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
		>Start</app-button>

		<!-- Pause Button: Visible When Timer is Started and When on Focus Mode -->
		<app-button
			@clicked="pauseTimer"
			:label="'Pause Session'"
			v-show="currentSession.started && currentSession.mode === 0"
			class="w-28 px-6 py-2 text-white bg-indigo-500 mx-auto my-4 border-indigo-500 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
		>Pause</app-button>

		<!-- Resume Button: Visible When Timer is Paused -->
		<app-button
			@clicked="resumeTimer"
			:label="'Resume Session'"
			v-show="currentSession.paused"
			class="w-28 px-6 py-2 text-white bg-indigo-500 mx-auto my-4 border-indigo-500 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
		>Resume</app-button>

		<!-- Stop Button: Visible When Timer is Started, or Paused -->
		<app-button 
			@clicked="stopTimer"
			:label="'Stop Session'" 
			v-show="!currentSession.stopped"
			class="w-28 px-6 py-2 text-indigo-500 bg-white dark:bg-gray-800 mx-auto my-4 border-indigo-500 focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50" 
		>Stop</app-button>
	</div>
</template>

<script>
import { eventBus } from "@/main";
import { deepClone } from "@/helpers/utils";
import { SingleSession } from "@/helpers/Sessions";

import RadialProgressBar from '@/components/RadialProgressBar.vue';
import Button from '@/components/Button.vue';

export default {
	name: 'App',
	components: {
		appButton: Button,
		appRadialProgressBar: RadialProgressBar,
	},
	data() {
		return {
			sessions: [],
			currentSession: {
				mode: null,
				started: false, // also resumed
				paused: false,
				stopped: true,
			}
		}
	},
	methods: {
		// Emits a start timer event, duhhh
		startTimer() {
			this.currentSession.started = true;
			this.currentSession.paused = false;
			this.currentSession.stopped = false;

			eventBus.$emit('start-timer', this.sessions);
		},
		// Emits a pause timer event, obviously
		pauseTimer() {
			this.currentSession.paused = true;
			this.currentSession.started = false;
			this.currentSession.stopped = false;

			eventBus.$emit('pause-timer');
		},
		// Emits a resume timer event
		resumeTimer() {
			this.currentSession.started = true;
			this.currentSession.paused = false;
			this.currentSession.stopped = false;

			eventBus.$emit('resume-timer');
		},
		// Emits a stop timer event
		stopTimer() {
			this.currentSession.stopped = true;
			this.currentSession.paused = false;
			this.currentSession.started = false;

			eventBus.$emit('stop-timer');
		},
		// Creates all rounds based on user pomo preference
		createSessions: function() {
			this.sessions.length = 0;

			const focus = new SingleSession(0, this.currentPomo.focusDuration);
			const shortBreak = new SingleSession(1, this.currentPomo.shortBreakDuration);
			// const longBreak = new SingleSession(1, this.currentPomo.longBreakDuration);

			for (let i = 0; i < this.currentPomo.rounds; i++) {
				this.sessions.push(focus);
				this.sessions.push(shortBreak);
			}
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
	},
	created: function() {
		// this maybe costly
		// instead fetch from store and display and pass all sessions when needed.
		this.createSessions();

		// Update mode; Used for Pause button display
		eventBus.$on("update-mode", (mode) => { 
			this.currentSession.mode = mode;
		});
	},
}
</script>
