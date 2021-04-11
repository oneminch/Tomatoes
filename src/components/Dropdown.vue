<template>
    <!-- Stylized dropdown/select component -->
    <div class="cursor-pointer relative rounded-lg text-center">
        <!-- Custom Left Icon -->
        <div class="icon left-0">
            <slot></slot>
        </div>

        <!-- Select dropdown -->
        <select 
            :id="identifier" 
            @change="$emit('update:value', $event.target.value)" 
            class="h-12 border-2 border-solid border-gray-300 dark:border-gray-500 cursor-pointer text-lg text-center block appearance-none w-full font-semibold bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 py-3 px-10 rounded-lg leading-tight focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        >
            <option 
                :key="index" 
                v-for="(option, index) in options" 
                :selected="option.toLowerCase() === value.toLowerCase()
            ">{{ option }}</option>
        </select>

        <!-- Right Icon: Select Arrow -->
        <div class="icon right-0">
            <svg class="mx-auto h-6 w-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
            </svg>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dropdown',
    props: {
        // Current/selected value
        value: {
            type: String,
            required: true,
        },
        // List of dropdown options
        options: {
            type: Array,
            required: true,
        },
        // Identifier used for labelling
        identifier: {
            type: String,
            required: true,
        }
    }
}
</script>


<style scoped>
.icon {
    @apply w-12 cursor-pointer pointer-events-none absolute inset-y-0 flex items-center border-none;
}
</style>
