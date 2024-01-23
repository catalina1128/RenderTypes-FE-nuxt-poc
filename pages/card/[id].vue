<template>
    <div>
      <div class="user">
        <ProfileCard :user="userInfo"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()

const users = ref([])
users.value = await useFetch('/api/hello')

const userInfo = ref({})
userInfo.value = users.value.data.find(user => user.id == route.params.id)

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