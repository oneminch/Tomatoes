<template>
    <div id='test' class="w-full mx-auto ml-36">
        <app-slider-with-label 
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
        ></app-slider-with-label>
    </div>
</template>


<script>
import SliderWithLabel from "@/components/SliderWithLabel.vue"

export default {
    name: 'SWL',
    components: {
        appSliderWithLabel: SliderWithLabel
    },
    data() {
        return {
            value: ''
        }
    },
    methods: {
        someFunc: function() {

        
        }
    }
}
</script>


<style scoped>
* {
    outline: none;
}
</style>
