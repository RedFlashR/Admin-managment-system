<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>


<script>
import {nameRule,passRule} from '../utils/validate'
import {setToken} from '../utils/setToken'
import {login} from '../api/api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules:{
                username: [{ validator: nameRule, trigger: "blur" }],
                password: [{ validator: passRule, trigger: "blur" }],
            }
        }
    },
    methods:{
        login(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    login(this.form).then(res=>{
                    if (res.data.status === 200) {
                    setToken('username', res.data.username)
                    setToken('token', res.data.token)
                    this.$message({message: res.data.message, type: 'success'})
                    this.$router.push('/home')
                }
                    })
                }else{
                    console.log(this.form);
                }
            })
        }
    }
}


</script>



<style lang="less">
@keyframes colorChange {
    0% {
        color: rgba(0,0,155,1);
    }

    25% {
        color: gray;
    }

    50% {
        color: rgba(251, 85, 50);
    }

    75% {
        color: rgba(252, 26, 69)
    }

    100% {
        color: purple;
    }
}

.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/登录背景.jpg')  center;
    background-size: 100% 100%;

    .box-card {
        width: 450px;
        height: 300px;
        margin: 200px auto;
        background-color:rgba(0,0,0,.2) ;
        border-radius: 5%;

        .clearfix {
            span {
                width: 100%;
                display: block;
                text-align: center;
                font-size: 25px;
                animation: colorChange 3s infinite;
            }

        }

        .el-button {
            width: 100%;
        }

        .el-form {
            position: relative;
            left: -25px;
        }
    }
}
</style>