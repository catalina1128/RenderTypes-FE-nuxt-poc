<template>
    <div>
      <!-- <pre>{{ data }}</pre> -->
      <button @click="doSomething">
        Click me
      </button>
      <div class="count">
        {{ counterStore.count }}
      </div>
      <div class="doubleCount">
        {{ counterStore.doubleCount }}
      </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/helloStore'

// const { data } = await useFetch('/api/about')
const counterStore = useCounterStore()

function doSomething(): void
{
  console.log(null ?? 'Hello')
  counterStore.increment()
  console.log(counterStore.count)
  console.log('It\'s working')
}

useHead({
  titleTemplate : 'My App',
})

</script>
