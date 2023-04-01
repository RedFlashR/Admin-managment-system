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
export default {
    data() {
        const validateName=(rule,value,callback)=>{
            let reg=/(^[a-zA-Z]{4,10}$)/
            if(value===''){
                callback(new Error('请输入用户名'))
            }else if(!reg.test(value)){
                callback(new Error('请输入4-10位字母的用户名'))
            }else{
                callback()
            }
        }
        const validatePass=(rule,value,callback)=>{
            let pass=/^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
            if(value===''){
                callback(new Error('请输入密码'))
            }else if(!pass.test(value)){
                callback(new Error('请输入6-12包括大小写字母数字及特殊符号的密码'))
            }else{
                callback()
            }
        }
        return {
            form: {
                username: '',
                password: ''
            },
            rules:{
                username: [{ validator: validateName, trigger: "blur" }],
                password: [{ validator: validatePass, trigger: "blur" }],
            }
        }
    },
    methods:{
        login(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    console.log(this.form);
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
        color: rgba(0, 161, 193);
    }

    25% {
        color: rgba(67, 148, 255);
    }

    50% {
        color: rgba(251, 85, 50);
    }

    75% {
        color: rgba(252, 26, 69)
    }

    100% {
        color: rgba(47, 154, 245);
    }
}

.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: skyblue;

    .box-card {
        width: 450px;
        height: 300px;
        margin: 200px auto;

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