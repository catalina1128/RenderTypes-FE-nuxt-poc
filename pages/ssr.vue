<template>
    <div>
      <div class="user-list">
        <div v-for="user in data" :key="user.id" class="user-list__card">
          <NuxtLink :to="`/card/${user.id}`">
            <LazyProfileCard :user="user" />
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl

const { data } = await useFetch(`${baseUrl}/people`)

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

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>