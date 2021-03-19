<template>
    <!-- Radial progress bar -->
    <vep
        emptyColor="currentColor"
        :size="circleOptions.size"
        :color="current.modeColor"
        :legend="circleOptions.legend"
        :reverse="circleOptions.reverse"
        :progress="circleOptions.progress"
        :animation="circleOptions.animation"
        :thickness="circleOptions.thickness"
        :legendClass="circleOptions.legendClass"
        :emptyThickness="circleOptions.emptyThickness"
        class="font-medium stroke-current text-gray-200 dark:text-gray-600 text-center mx-auto"
    >        
        <template v-slot:legend-caption>
            <!-- Formatted time display: e.g. 25:00 -->
            <p class="dark:text-gray-100 text-gray-800 text-4xl font-extrabold">
                {{ current.timeLeftText }}
            </p>
            <!-- Current pomodoro mode text: Focusing/Resting -->
            <p class="dark:text-gray-500 text-gray-400 font-bold">
                {{ current.modeText }}
            </p>
        </template>
    </vep>
</template>


<script>
import { eventBus } from "@/main";
import { Timer } from "easytimer.js";
import { isDefined, formatTime } from "@/helpers/utils";

export default {
    name: "RadialProgressBar",
    props: ["sessions"],
    data() {
        return {
            // Timer utility package
            timer: null,

            // Data for the current session
            current: {
                mode: null,
                modeText: "",
                modeColor: "",
                timeLeft: 0,
                timeLeftText: "",
            },
            
            // Radial progress bar options
            restModeColor: "#2ecc71",
            focusModeColor: "#6366f1",
            circleOptions: {
                size: 300,
                progress: 0,
                legend: false,
                thickness: 20,
                emptyThickness: 20,
                reverse: false,
                animation: "default 250",
            },
        }
    },
    methods: {
        // Determine current UI properties: text & color 
        currently: function(mode) {
            switch (mode) {
                case 0: // Focusing
                    this.current.modeText = "Focusing";
                    this.current.modeColor = this.focusModeColor;
                    break;
                
                case 1: // Resting
                    this.current.modeText = "Resting";
                    this.current.modeColor = this.restModeColor;
                    break;
            
                case 2: // Paused
                    this.current.modeText = "Paused";
                    break;

                default:
                    this.current.modeText = "";
                    this.current.modeColor = this.focusModeColor;
                    break;
            }
        },
        // Initializes countdown timer
        initTimer: function(sessions) {
            let vm = this,
                currSession = sessions.shift();  // Get next session & update list

            // Update global current session values
            // Updates UI elements: display text, session time, mode color 
            vm.current.mode = currSession.mode;
            vm.current.timeLeft = currSession.duration;
            vm.current.timeLeftText = formatTime(vm.current.timeLeft);

            vm.timer.start({
                countdown: true,
                startValues: {seconds: vm.current.timeLeft},
                callback: (timer) => {
                    // Get remaining seconds for current round
                    vm.current.timeLeft = timer.getTimeValues().minutes * 60;
                    vm.current.timeLeft += timer.getTimeValues().seconds;

                    // Update the display text and progress bar
                    vm.current.timeLeftText = timer.getTimeValues().toString(['minutes', 'seconds']);
                    vm.circleOptions.progress = (currSession.duration - vm.current.timeLeft) * 100 / (currSession.duration);

                    if (vm.current.timeLeft <= 0) {
                        // Delay execution of some tasks 
                        // until some resetting tasks are over 
                        setTimeout(() => {
                            // Add a loop back animation effect
                            // and resets radial progress bar
                            if (isDefined(sessions[0])) {
                                vm.circleOptions.reverse = true;
                                vm.circleOptions.progress = 0
                            }
                        }, 500);

                        setTimeout(() => {
                            // Reset circular progress direction
                            vm.circleOptions.reverse = false;
                            
                            // If there are any sessions left, continue 
                            if (isDefined(sessions[0])) 
                                vm.initTimer(sessions);
                            else 
                                vm.current.modeText = "You're Done!"
                        }, 1000);
                    }
                }
            });
        },
        // Reset all aspects of UI and timer function
        resetTimer: function() {
            // Stop/reset timer
            if (this.timer && (this.timer.isRunning() || this.timer.isPaused())) {
                this.timer.stop();
            }

            // Reset some UI aspects
            this.current.mode = null;
            this.current.timeLeft = this.sessions[0].duration;
            this.current.timeLeftText = formatTime(this.current.timeLeft);
            this.circleOptions.progress = 0;
        },
    },
    created() {
        // Reset / Set starting values
        this.resetTimer();
        this.currently(this.current.mode);

        // Initialize timer utility
        this.timer = new Timer();
        
        let vm = this;

        // Event listener to start timer 
        eventBus.$on("start-timer", () => { 
            vm.initTimer(vm.sessions.slice());
        });
        // Event listener to resume timer and update UI
        eventBus.$on("resume-timer", () => { 
            if (vm.timer.isPaused()) {
                vm.timer.start();
                vm.currently(vm.current.mode);
            }
        });
        // Event listener to pause timer and update UI
        eventBus.$on("pause-timer", () => { 
            vm.currently(2);
            vm.timer.pause();
        });
        // Event listener to stop timer and reset UI
        eventBus.$on("stop-timer", () => { vm.resetTimer() });
    },
    watch: {
        "current.mode": function(value) {
            this.currently(value);
            eventBus.$emit("update-mode", value);
        }
    }
}
</script>


<style scoped>
* {
    outline: none;
}
</style>
