import request from '@/utils/request'
//获取所有文章分类
export const ArticlegetcategoryService = () => {
   return request.get('/my/cate/list')
}
//添加文章分类
export const artAddChannelService = (data) => {
    return request.post('/my/cate/add', data)
}
//编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
