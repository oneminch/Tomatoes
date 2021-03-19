<template>
    <!-- Stylized input range/slider -->
    <input 
        :min="min" 
        :max="max"
        :step="step"
        type="range"
        v-model="currentValue"
        class="w-full bg-transparent mt-2.5" 
        @change="$emit('update:startingValue', parseInt($event.target.value))"
    >
    
    <!--
    Might have future use for this. 
    It adds custom set positions/tickmarks between each step
    <div class="flex justify-between">
        <span 
            v-for="(tick, index) in ticks" 
            :key="index"
            class="inline-block w-5 text-xs"
        >{{ tick }}</span>
    </div> 
    -->
</template>


<script>

export default {
    name: 'Slider',
    props: {
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
            default: 1
        },
        // Initial value
        startingValue: {
            type: Number,
            required: true,
        },
    },
    components: {
        
    },
    data() {
        return {
            // ticks: []    // For use with tickmarks 
            currentValue: 1
        }
    },
    created() {
        this.currentValue = this.startingValue;

        // Complementary code for adding tickmarks
        // this.ticks = [];
        // for (let i = this.min; i <= this.max; i+=this.step) {
        //     this.ticks.push(i);
        // }
    },
}
</script>


<style scoped>

html.dark input[type=range]::-webkit-slider-runnable-track {
    background: #6b7280;
}

html.dark input[type=range]:focus::-webkit-slider-runnable-track {
    background: #6b7280;
}

html.dark input[type=range]::-moz-range-track {
    background: #6b7280;
}

input[type=range]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.35), 0px 0px 10px rgba(0, 0, 0, .2);;
}

input[type=range]:focus::-moz-range-thumb {
    box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.35), 0px 0px 10px rgba(0, 0, 0, .2);;
}

input[type=range] {
    -webkit-appearance: none;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: .5rem;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #D1D5DB;
    border-radius: 0.375rem;
    border: none;
}

input[type=range]::-webkit-slider-thumb {
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: .75rem;
    background: #6366f1;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4rem;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #D1D5DB;
}

input[type=range]::-moz-range-track {
    width: 100%;
    height: .5rem;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #D1D5DB;
    border-radius: 0.375rem;
    border: none;
}

input[type="range"]::-moz-range-progress {
    height: .5rem;
    background-color: #6366f1;
    border-radius: 0.375rem;
    border: none;
}

input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    border: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: .75rem;
    background: #6366f1;
    cursor: pointer;
}

/* IE specific code below this point */

input[type=range]::-ms-track {
    width: 100%;
    height: .75rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 1.25rem 0;
    color: transparent;
}

input[type=range]::-ms-fill-lower {
    background: #6366f1;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-fill-upper {
    background: #D1D5DB;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-thumb {
    border: 0px solid #000000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: .75rem;
    background: #6366f1;
    cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
    background: #6366f1;
}

input[type=range]:focus::-ms-fill-upper {
    background: #D1D5DB;
}

input[type=range]:focus::-ms-thumb {
    box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.35), 0px 0px 10px rgba(0, 0, 0, .2);;
}

html.dark input[type=range]::-ms-fill-upper {
    background: #6b7280;
}

html.dark input[type=range]:focus::-ms-fill-upper {
    background: #6b7280;
}

</style>
