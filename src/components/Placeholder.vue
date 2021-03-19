// responsible for countdown and updates in the timer UI
        countdown: function(sessions) {
            let vm = this,
                currSession = sessions.shift();  // Get next session & update list

            clearInterval(vm.timerInterval);

            // Update current session values globally
            // Indirectly updates UI elements: display text, session time, mode color 
            vm.current.mode = currSession.mode;
            vm.current.timeLeft = currSession.duration;

            // Main timer stuff
            const now = Date.now();
            const later = now + (currSession.duration * 1000);
            
            vm.timerInterval = setInterval(() => {
                // Calculate the time left for session as well as 
                // the respective progress percentage for the circular UI
                vm.current.timeLeft = Math.round((later - Date.now()) / 1000);
                vm.circleOptions.progress = (currSession.duration - vm.current.timeLeft) * 100 / (currSession.duration);
                
                // If done with session
                if (vm.current.timeLeft <= 0) {
                    clearInterval(vm.timerInterval);
                    
                    // Delay execution of some tasks 
                    // until some resetting tasks are over 
                    setTimeout(() => {
                        // Adds a loop back animation effect
                        // and resets progress for circular UI
                        if (this.isDefined(sessions[0])) {
                            vm.circleOptions.reverse = true;
                            vm.circleOptions.progress = 0
                        }
                    }, 500);

                    setTimeout(() => {
                        // Reset circular progress direction
                        vm.circleOptions.reverse = false;
                        
                        // If there are any sessions left, continue 
                        if (this.isDefined(sessions[0])) 
                            vm.countdown(sessions);
                        else 
                            vm.current.modeText = "You're Done!"
                    }, 1000);
                }
            }, 1000);
        },


<!-- <div class="border-2 bg-gray-100 rounded-lg px-4 py-4 flex flex-col justify-between items-start w-full mx-auto text-gray-900 dark:text-gray-400">
    <p class="font-bold text-md text-left mb-2">
        Focus
        <span class="bg-gray-300 dark:bg-gray-500 rounded-md inline-block leading-8 h-8 mx-2 py-0.5 px-2">
            <span>25 min</span>
        </span>
    </p>
    <p class="font-bold text-md text-left mb-2">
        Short Break
        <span class="bg-gray-300 dark:bg-gray-500 rounded-md inline-block leading-8 h-8 mx-2 py-0.5 px-2">
            <span>25 min</span>
        </span>
    </p>
    <p class="font-bold text-md text-left mb-2">
        Long Break
        <span class="bg-gray-300 dark:bg-gray-500 rounded-md inline-block leading-8 h-8 mx-2 py-0.5 px-2">
            <span>25 min</span>
        </span>
    </p>
    <p class="font-bold text-md text-left">
        Rounds
        <span class="bg-gray-300 dark:bg-gray-500 rounded-md inline-block leading-8 h-8 mx-2 py-0.5 px-2">
            <span>4</span>
        </span>
    </p>
</div> -->

<!-- <app-slider-with-label 
				:min="5"			
				:max="60"
				:step="5"
				:label="'Focus'"
				:startingValue="50"
				:identifier="'focus'"
				:displayFormat="'time'"
			></app-slider-with-label>

			<app-slider-with-label 
				:min="5"			
				:max="30"
				:step="5"
				:label="'Short Break'"
				:startingValue="10"
				:displayFormat="'time'"
				:identifier="'short-break'"
			></app-slider-with-label>
			
			<app-slider-with-label 
				:min="5"			
				:max="30"
				:step="5"
				:label="'Long Break'"
				:startingValue="15"
				:displayFormat="'time'"
				:identifier="'long-break'"
			></app-slider-with-label>


			<app-slider-with-label 
				:min="1"			
				:max="10"
				:step="1"
				:label="'Rounds'"
				:startingValue="2"
				:identifier="'rounds'"
			></app-slider-with-label> -->

			<!-- <div class="w-full flex justify-between items-center text-gray-900 dark:text-gray-100 py-4">
				<label 
					id="dropdown-label"
					for="theme-dropdown" 
					class="cursor-pointer select-none inline-block tracking-wide font-bold text-xl" 
				>
					Theme
				</label>

				<app-dropdown 
					class="w-44"
					:options="options"
					:value.sync="theme"
					:identifier="'theme-dropdown'" 
				>
					Sun icon
					<svg v-show="isTheme.light" class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
					</svg>

					Moon icon
					<svg v-show="isTheme.dark" class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
					</svg>

					Device icon
					<svg v-show="isTheme.system" class="w-6 h-6 mx-auto text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
				</app-dropdown>
			</div> -->
