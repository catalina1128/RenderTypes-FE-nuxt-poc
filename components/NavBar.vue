<template>
  <nav>
    <div class="nav-bar">
      <div  v-for="link of navigation" :key="link.path">
        <NuxtLink :to="link.path" class="nav-bar__item">
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
type NavigationRoutes = {
  path: string;
  title: string;
}[];

const navigation: NavigationRoutes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/csr",
    title: "CSR",
  },
  {
    path: "/ssr",
    title: "SSR",
  },
  {
    path: "/ssg",
    title: "SSG",
  },
  {
    path: "/isr",
    title: "ISR",
  },
  {
    path: "/swr",
    title: "SWR",
  },
  {
    path: "/ssr2",
    title: "SSR2",
  },
];
</script>

<style scoped lang="scss">
.nav-bar{
  z-index: -2;
  display: flex;
  height: 50px; 
  background-color: #333;
  overflow: hidden;
  
  &__item {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    
    a {
      color: white;
      text-decoration: none;
    }
  }

  &__item:hover {
    background-color: #ddd;
    color: black;
  }

  &__item.active {
    background-color: #04AA6D;
    color: white;
  }
}
</style>
