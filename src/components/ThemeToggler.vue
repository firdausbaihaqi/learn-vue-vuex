<template>
    <div>
        <Switch
            @click="toggleTheme"
            v-model="enabled"
            :class="enabled ? 'bg-green-700' : 'bg-green-200'"
            class="
                relative
                inline-flex
                flex-shrink-0
                h-8
                w-[74px]
                border-2 border-transparent
                rounded-full
                cursor-pointer
                transition-colors
                ease-in-out
                duration-200
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-opacity-75
            "
        >
            <span class="sr-only">Use setting</span>
            <div
                aria-hidden="true"
                :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                class="grid w-1/2 h-full transition duration-200 ease-in-out transform bg-white rounded-full shadow-lg pointer-events-none  ring-0 place-content-center"
            >
                <span v-if="!enabled">
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                    </svg>
                </span>
                <span v-if="enabled">
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
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                    </svg>
                </span>
            </div>
        </Switch>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { toggleTheme, initTheme, isDarkTheme } from '../composables/theme.js'

const enabled = ref(null)

onMounted(() => {
    initTheme()
    isDarkTheme() ? (enabled.value = true) : (enabled.value = false)
})
</script>
