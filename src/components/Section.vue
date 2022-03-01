<template>
    <div class="border">
        <router-link :style="'background:' + colour1" class="router" v-bind:to='link'>
            <p v-if="colour1 === '#d4c224'" class="black" :href='link'>{{ name }}</p>
            <p v-else :href='link'>{{ name }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Section",
    props: {
        name: String,
        link: String,
        colour1: String,
        colour: String,
    },
}
</script>
<style>
.router {
    color: white;
    text-decoration: none;
    margin-top: 0px;
    padding: 10px;
    transition: all 0.15s ease;
}
.border {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
}
.black {
    color: black;
}
</style>