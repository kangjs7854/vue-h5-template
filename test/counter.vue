<!--
 * @Date: 2020-08-18 13:42:53
 * @LastEditors: kjs
 * @LastEditTime: 2020-08-18 16:17:39
 * @FilePath: \vue-h5-template\test\counter.vue
-->
<template>
    <div>
        <span class="count">{{ count }}</span>
        <button @click="increment">Increment</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
    },
};
</script>
