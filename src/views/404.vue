<template>
    <div id='NotFound' class="py-8 px-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9H8Z" fill="currentColor" />
            <path d="M15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H15Z" fill="currentColor" />
            <path d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
        </svg>

        <h2 class="text-center text-2xl w-2/3 font-bold my-4 mx-auto">
            The page you are trying to visit doesn't exist.
        </h2>

        <router-link 
            to="/"
            class="px-6 py-2 leading-normal sm:py-4 sm:px-1 text-white my-8 mx-auto w-40 bg-indigo-500 p-4 focus:outline-none block font-bold rounded-lg text-lg focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50"
        >Go Home</router-link>
    </div>
</template>


<script>

export default {
    name: 'NotFound',
    metaInfo: {
        title: 'Not Found',
        meta: [
            { vmid: 'title', name: 'title', template: '%s | EncryptedList', content: 'Page Not Found'},
			{ vmid: 'og:title', property: 'og:title', template: '%s | EncryptedList', content: 'Page Not Found'},
			{ vmid: 'twitter:title', name: 'twitter:title', template: '%s | EncryptedList', content: 'Page Not Found' },
        ],
    }
}
</script>


<style scoped>

#NotFound > svg {
    width: 8rem;
    height: 8rem;
    color: var(--text-color);
    margin: 0 auto;
    display: block;
}

@media only screen and (max-width: 480px) {
	#NotFound {
        padding: 1rem .25rem;
	}

    /* #NotFound h2 {
        width: 95%;
	} */
}
</style>
