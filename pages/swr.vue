<template>
    <div>
      <div class="user-list">
        <div v-for="user in data" :key="user.id" class="user-list__card">
          <LazyProfileCard :user="user" />
        </div>
      </div>
      <button @click="doSomething">
        Click me
      </button>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl

const { data } = await useFetch(`${baseUrl}/people`)

function doSomething(): void
{
    console.log('It\'s working')
}

</script>

<style scoped lang="scss">
.container {
  border: solid
}
.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__card {
    display: inline-block;
    margin: 10px;
  }
}
</style>