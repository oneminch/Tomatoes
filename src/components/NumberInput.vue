<template>
    <div class="flex w-36">
        <button class="w-10 h-10 flex items-center justify-center focus:outline-none dark:border-gray-600 dark:bg-gray-600 font-bold text-gray-600 dark:text-gray-300 box-border border-2 border-solid border-gray-600 border-r-0 select-none py-2 px-2 cursor-pointer bg-gray-600 hover:bg-gray-200 rounded-l-lg rounded-r-none" @click="decrease">
            <svg class="w-4 h-4 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        
        <!-- maybe add labels -->
        <input 
            readonly 
            type="text" 
            :name="name"
            :value="number"
            class="w-16 font-bold bg-transparent border-2 border-solid border-gray-600 dark:border-gray-600 p-1 text-center outline-none rounded-none"
        >

        <button class="w-10 h-10 flex items-center justify-center focus:outline-none dark:border-gray-600 dark:bg-gray-600 font-bold text-gray-600 dark:text-gray-300 box-border border-2 border-solid border-gray-600 border-l-0 select-none py-2 px-2 cursor-pointer bg-gray-600 hover:bg-gray-200 rounded-r-lg rounded-l-none" @click="increase">
            <svg class="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
        </button>
    </div>
</template>


<script>
export default {
    name: "NumberInput",
    props: {
		prefType: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        step: {
            type: Number,
            required: true,
        },
        startingValue: {
            type: Number,
            required: true,
        },
	},
    data() {
        return {
            number: this.startingValue,
        };
    },
    methods: {
        increase() {
            if (this.number < this.max) {
                this.number += this.step;
                this.$emit("update-value", this.number, this.prefType);
            }
        },
        decrease() {
            if (this.number > this.min) {
                this.number -= this.step;
                this.$emit("update-value", this.number, this.prefType);
            }
        },
    },
}
</script>


<style scoped>
* {
    outline: none;
}
</style>
