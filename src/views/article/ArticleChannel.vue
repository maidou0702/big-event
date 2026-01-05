<script setup>
import PageContainer from './components/PageContainer.vue'
import ChannelEdit from './components/ChannelEdit.vue'
import { ArticlegetcategoryService } from '@/utils/articlerequest'
import { Edit, Delete } from '@element-plus/icons-vue'

import { ref, onMounted } from 'vue'
const channelList=ref([])
const loading = ref(false)
const dialog = ref()

const getChannel=async ()=>{
    loading.value = true
    const res=await ArticlegetcategoryService()
    channelList.value = res.data.data
    loading.value = false
}
const onSuccess = () => {
  getChannel()
}
const addCategory = () => {
    dialog.value.open({})
}
const onEditChannel = (row) => {
    console.log(row)
  dialog.value.open(row)
}


// 组件挂载时获取频道数据
onMounted(() => {
    getChannel()
})
</script>
<template>
    <PageContainer title="文章分类">
        <template #extra>
            <el-button type="primary" @click="addCategory">添加分类</el-button>
        </template>
     <el-table :data="channelList" style="width: 100%" v-loading="loading">
  <el-table-column label="序号" width="100" type="index"> </el-table-column>
  <el-table-column label="分类名称" prop="cate_name"></el-table-column>
  <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
  <el-table-column label="操作" width="100">
    <template #default="{ row }">
      <el-button
        :icon="Edit"
        circle
        plain
        type="primary"
        @click="onEditChannel(row)"
       
      ></el-button>
      <el-button
        :icon="Delete"
        circle
        plain
        type="danger"
        
      ></el-button>
    </template>
  </el-table-column>
  <template #empty>
    <el-empty description="没有数据" />
  </template>
</el-table>
    </PageContainer>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>

</template>
<style></style>