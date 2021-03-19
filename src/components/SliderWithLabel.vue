<template>
    <!-- Labelled slider component -->
    <div class="py-4">
        <label :for="identifier" class="w-full font-bold text-xl">
            <!-- Label + Slider Output Value -->
            <p class="text-left text-gray-900 dark:text-gray-100">
                {{ label }}
                <span class="text-lg bg-gray-200 dark:bg-gray-500 text-gray-900 dark:text-gray-100 rounded-md inline-block leading-8 h-8 mx-2 py-0.5 px-2">
                    <span v-if="displayFormat === 'time'">{{ `${currentValue} min` }}</span>
                    <span v-else>{{ currentValue }}</span>
                </span>
            </p>
            
            <!-- Slider -->
            <app-slider
                :min="min"			
				:max="max"
				:step="step" 
                :id="identifier"
				:startingValue.sync="currentValue"
            ></app-slider>
        </label>
    </div>
</template>


<script>
import Slider from './Slider';

export default {
    name: 'SliderWithLabel',
    props: {
        // Identifier for labelling
        identifier: {
            type: String,
            required: true,
        },
        // Display format for output
        displayFormat: {
            type: String,
            required: false,
        },
        // Labels each slider
		label: {
            type: String,
            required: true,
        },
        // Minimum value
        min: {
            type: Number,
            required: true,
        },
        // Maximum value
        max: {
            type: Number,
            required: true,
        },
        // Each step
        step: {
            type: Number,
            default: 1,
        },
        // Initial value
        startingValue: {
            type: Number,
            required: true,
        },
    },
    components: {
        appSlider: Slider
    },
    data() {
        return {
            currentValue: 0
        }
    },
    created() {
        this.currentValue = this.startingValue;
    },
}
</script>
