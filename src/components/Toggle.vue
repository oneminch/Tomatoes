<template>
    <!-- Toggle / Switch -->
    <label class="flex items-center w-14 toggle-container">
        <input
            class="sr-only"
            type="checkbox"
            v-bind="$attrs"
            :checked="checked"
            @change="$emit('update:checked', $event.target.checked)"
        />
        <span class="switch dark:border-gray-500 p-1 flex flex-shrink-0 items-center transition-colors bg-gray-300 dark:bg-gray-500 cursor-pointer"></span>
    </label>
</template>


<script>

export default {
    name: 'Toggle',
    inheritAttrs: false,
    props: {
        // Toggle value: On / Off
        checked: {
            type: Boolean,
            required: true,
        },
    }
}
</script>


<style scoped>

.switch {
    --gray: #D1D5DB;                /* gray-300 */
    --indigo: #6366f1;              /* indigo-500 */
    --dark-gray: #6B7280;           /* gray-500 */
    --light-gray: #f3f4f6;          /* gray-100 */
    --switch-size: 1.5rem;
    --switch-container-width: 3.5rem;

    border-radius: var(--switch-size);
    height: calc(var(--switch-size) + .5rem);
    flex-basis: var(--switch-container-width);
}

.switch::before {
    content: "";
    border-radius: 50%;
    width: var(--switch-size);
    height: var(--switch-size);
    background-color: var(--light-gray);
    transition: transform .1s ease-in-out;
    box-shadow: 0 0.05rem 0.25rem rgba(0, 0, 0, .2);
}

input:checked + .switch {
    background-color: var(--indigo);
}

input:checked + .switch::before {
    background-color: var(--indigo);
    background-color: var(--light-gray);
    transform: translateX(100%);
}

input:disabled + .switch {
    background-color: var(--gray);
}

input:disabled + .switch::before {
    background-color: var(--dark-gray);
    border-color: var(--dark-gray);
}

.toggle-container:focus-within .switch {
    box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.35), 0px 0px 10px rgba(0, 0, 0, .2);;
}

</style>
