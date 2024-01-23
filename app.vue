<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#348feb" :height="5" />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const layout = "default";
</script>