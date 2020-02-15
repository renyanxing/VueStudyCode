<template>
    <div>
        <h1>hello world!</h1>
        <h2>app</h2>
        <Foo />
        <p>{{ author }}</p>
    </div>
</template>
<script>
    import Foo from "./components/Foo.vue";
    export default {
        data() {
            return {
                author: "renyanxing"
            };
        },
        components: {
            Foo
        }
    };
</script>
<style scoped>
    h1 {
        color: brown;
    }
</style>