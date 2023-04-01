//获取表格数据
export function getData(url,params){
    this.service.get(url,{param:params||{}})
    .then(res=>{
        if(res.data.status===200){
            this.tableData=res.data.data
            this.total=res.data.total
        }
    })
    .catch(err=>{
        throw err
    })
}


//新增修改方法封装
import qs from 'qs'
export function changeInfo(root,method,url,form,callback){
    let data=qs.stringify(form)
    root.service[method](url,data)
    .then(res=>{
        if(res.data.status===200){
            this.$refs.form.resetFields()
            callback(root,url)
            this.dialogFormVisible = false
            this.$message({ type: 'success', message: res.data.message })
        }
    })
    .catch(err=>{
        throw err
    })
}



//删除方法封装
export function delData(root,url,id,callback){
    if(confirm('确定删除吗')){
        root.service.delete(`${url}/${id}`).then(res=>{
            if(res.data.status===200){
                callback(root,url)
                root.$message({message:res.data.message,type:'success'})
            }
        })
        .catch(err=>{
            throw err
        })
    }
}



//作业列表获取表格数据方法封装
export function getTableData(root, url, params, arr) {
    root.service.get(url, { params: params || {} })
    .then(res => {
        if(res.data.status === 200) {
            root.tableData = res.data.data
            root.total = res.data.total
            root.tableData.map(item => {
                arr.map(aItem => [
                    item[aItem] ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
                ])
            })
            root.loading = false
        }
    })
    .catch(err => {
        throw err
    })
}