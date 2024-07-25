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
import { useCounterStore } from '../store/countStore'

const counterStore = useCounterStore()

function doSomething(): void
{
  counterStore.increment()
}

useHead({
  titleTemplate : 'My App',
})

</script>
