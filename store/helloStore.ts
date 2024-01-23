import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)

  const doubleCount = computed(() => count.value * 2)

  function increment(amount: number = 1): void {
    count.value += amount
  }

  return { count, doubleCount, increment }
})