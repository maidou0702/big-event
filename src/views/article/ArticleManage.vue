<script setup>
import PageContainer from './components/PageContainer.vue';
</script>
<template>
   <PageContainer title="文章管理">
    <template #extra>
        <el-button type="primary">发布文章</el-button>
    </template>
   </PageContainer>
</template>
<style scoped></style>