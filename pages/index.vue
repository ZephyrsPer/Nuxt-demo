<template>
    <div>
        <el-row class="mb-4">
            <el-button type="primary" @click="onFunc">Primary</el-button>
        </el-row>
        <div>{{ useIsCollapsed().value }}</div>
        数据：{{ data?.hello }}
    </div>
</template>

<script setup lang="ts">

const onFunc = () => {
    useChangeIsCollapsed()
}

// 这里返回的是一个json
const { data } = await useFetch("/api/hello")

</script>

<style scoped>
body {
    background-color: #000000;
}
</style>