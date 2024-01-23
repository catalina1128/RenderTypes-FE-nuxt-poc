<template>
    <div class="card">
        <img :src="`https://picsum.photos/id/${props.user.id}/200/300`" alt="John" style="width:100%">
        <h1>{{ userName }}</h1>
        <div class="card__email">
            {{ props.user.email }}
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    user: {
        first_name: string
        last_name: string
        email: string
    }
}>()

const userName = computed(() => {
    return `${props.user.first_name} ${props.user.last_name}`
})

</script>

<style scoped lang="scss">
.card {
    width: 250px;
    height: 550px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 2px 0 0 0;
    text-align: center;
    font-family: arial; 
    overflow-wrap: break-word;
    
    &__email {
        color: grey;
        font-size: 22px;
    }
}
</style>