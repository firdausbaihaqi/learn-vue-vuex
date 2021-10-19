<template>
    <div class="relative flex items-center w-full gap-5 mt-5 mb-2 md:w-32 ">
        <div>Show</div>
        <Listbox v-model="selectedAmounts">
            <ListboxButton class="ListboxButton">
                <span class="block truncate">
                    {{ selectedAmounts }}
                </span>
                <span
                    class="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500 pointer-events-none "
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </span>
            </ListboxButton>
            <transition
                enter-active-class="transition duration-100 ease-in"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
            >
                <ListboxOptions class="ListboxOptions">
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="amount in amounts"
                        :key="amount"
                        :value="amount"
                        @click="handleFilter(amount)"
                        as="template"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-green-900 bg-green-100'
                                    : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-10 pr-4 text-gray-800',
                            ]"
                        >
                            <span
                                :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                ]"
                            >
                                {{ amount }}
                            </span>
                            <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 "
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </Listbox>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

export default {
    components: { Listbox, ListboxButton, ListboxOptions, ListboxOption },
    setup() {
        const store = useStore()
        const handleFilter = (value) => {
            store.dispatch('filterTodosAction', value)
        }

        const amounts = [10, 20, 50, 100, 200]
        const selectedAmounts = ref(amounts[2])

        return {
            amounts,
            selectedAmounts,
            handleFilter,
        }
    },
}
</script>

<style lang="postcss" scoped>
.ListboxButton {
    @apply relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm text-gray-800;
}

.ListboxOptions {
    @apply absolute top-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}
</style>
