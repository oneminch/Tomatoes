<template>
    <div id='Chat' class="w-full mx-auto ml-36">
        <app-toggle :checked.sync="showModal"></app-toggle>
        <app-modal :show="showModal"></app-modal>
    </div>
</template>


<script>
import Modal from '@/components/Modal.vue';
import Toggle from "@/components/Toggle.vue";

export default {
    name: 'Chat',
    components: {
        appToggle: Toggle,
        appModal: Modal
    },
    data() {
        return {
            showModal: false
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
