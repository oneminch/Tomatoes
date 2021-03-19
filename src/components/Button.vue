<template>
    <!-- Button component -->
    <button
        :title="label"
        :aria-label="label"
        @click="$emit('clicked')"
        class="focus:outline-none block font-bold leading-normal rounded-lg text-lg box-border border-2 border-solid"
    >
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: "Button",
    props: {
		label: String
	},
}
</script>
