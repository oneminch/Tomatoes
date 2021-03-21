<template>
	<div id="app" class="w-full min-w-92 h-screen dark:bg-gray-800 duration-200 text-center antialiased">
		<div  class="w-full h-full max-w-6xl mx-auto"> 
			<div class="flex h-full relative">
				<nav class="flex sm:flex-col justify-between absolute sm:top-0 left-0 min-w-92 sm:min-w-0 bottom-0 h-20 w-full items-center sm:w-24 sm:h-auto sm:min-h-112 sm:max-h-1/2 font-bold sm:rounded-xl sm:m-6 sm:py-4 text-gray-100 bg-indigo-500">
					<router-link to="/" class="p-1 sm:flex hidden focus:ring-4 focus:ring-indigo-600 focus:outline-none w-12 h-12 rounded-md my-4 justify-center items-center bg-transparent">
						<img class="w-full h-full" src="./assets/logo.svg" alt="App Logo">
					</router-link>

					<router-link to="/" class="p-4 w-full sm:h-auto h-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
						<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
						Home
					</router-link>

					<router-link to="/chat" class="p-4 w-full sm:h-auto h-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
						<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
						Chat
					</router-link>

					<router-link to="/stats" class="p-4 w-full sm:h-auto h-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
						<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
						Stats
					</router-link>

					<router-link to="/settings" class="p-4 w-full sm:h-auto h-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
						<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
						Options
					</router-link>

				</nav>
				<router-view class="w-full m-6"></router-view>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'App',
	components: {},
	data() {
		return {}
	},
	methods: {
		toggleDarkMode: function() {
			let rootElt = document.querySelector('html');

			if (this.darkMode) {
				rootElt.setAttribute('class','dark');
			} else {
				rootElt.removeAttribute('class');
			}
		},
	},
	computed: {
		darkMode: {
			get: function() {
				return this.$store.state.preferences.darkMode;
			},
			set: function(value) {
				this.$store.commit('updateDarkMode', value);
			}
		},
	},
	watch: {
		darkMode() {
			this.toggleDarkMode();
		}
	},
	created() {
		this.toggleDarkMode();
	},
}
</script>

<style>
@import url('https://overpass-30e2.kxcdn.com/overpass.css');

#app {
	/* font-family:  "JetBrains Mono", "overpass-mono", "Cascadia Mono", "Lucida Console", monospace; */
	font-family:  "overpass", "Cascadia Mono", "Lucida Console", monospace;
}

.router-link-exact-active {
	@apply bg-indigo-600

}
</style>
