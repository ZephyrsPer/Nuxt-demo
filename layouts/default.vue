<template>
    <div class="layout" :class="useIsCollapsed().value ? '' : 'hideSidebar'">
        <LoSideBar class="sidebar-container" />
        <div class="main-container">
            <LoMain>
                <slot></slot>
            </LoMain>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoMain from "./components/LoMain.vue";
import LoSideBar from "./components/LoSideBar.vue";
</script>

<style scoped lang="less">
.layout {
    display: flex;
    height: 100vh;

    .sidebar-container {
        width: 200px;
        background: #304156;
        color: #fff;
        transition: width 0.3s;
    }

    .main-container {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    &.hideSidebar .sidebar-container {
        width: 64px;
    }
}
</style>