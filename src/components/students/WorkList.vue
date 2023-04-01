<template>
    <div>
        <el-table :data="compData" border style="width: 100%" v-loading="loading" >
            <el-table-column prop="id" label="用户ID" align='center'>
            </el-table-column>
            <el-table-column prop="userId" label="所属班级" align='center'>
            </el-table-column>
            <el-table-column prop="title" label="作业名称" align='center'>
            </el-table-column>
            <el-table-column prop="completed" label="完成情况" align='center'>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
            :page-sizes="[5, 10, 20, 50,100]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script lang="js">
import { getTableData } from '@/utils/table'
export default {
    data() {
        return {
            tableData: [],
            total:0,
            page:1,
            size:10,
            loading:true
        }
    },
    created() {
        getTableData(this, '/students', {page:this.page,size:this.size}, ["completed"])
    },
    computed: {
    compData() {
      return this.tableData.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
    },
  },
    methods: {
        handleSizeChange(val) {
            this.size = val;
            this.page = 1;
            getTableData(this, '/students', {page:this.page,size:this.size}, ["completed"])

        },
        handleCurrentChange(val) {
            this.page = val;
            getTableData(this, '/students', {page:this.page,size:this.size}, ["completed"])
        },
    }
}
</script>

<style></style>