<template>
  <el-main>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" />
      </el-form-item>
      <el-form-item label="姓名" prop="nickName">
        <el-input v-model="ruleForm.nickName" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="ruleForm.passWord" />
      </el-form-item>
      <el-form-item label="重复密码" prop="nextPassWord">
        <el-input type="password" v-model="ruleForm.nextPassWord" />
      </el-form-item>
      <el-form-item label="单位" prop="deptId">
        <el-select v-model="ruleForm.deptId">
          <el-option label="北羊" value="1" />
          <el-option label="总公室" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="ruleForm.mobile" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
defineExpose({
  validate() {
    return new Promise(resolve => {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validate((valid: any) => {
        resolve(valid);
      });
    });
  }
});

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  userName: 'asd',
  nickName: 'sww',
  gender: '男',
  passWord: 'sww1740747758',
  nextPassWord: 'sww1740747758',
  deptId: '1',
  mobile: '15571161621',
  email: '1740747758@qq.com'
});

const validatePass = (rule: any, value: any, callback: any) => {
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,18}$/;
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (!reg.test(value)) {
    callback(new Error('用户名必须是由8-18位英文(含大小写)+数字组成'));
  } else {
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== ruleForm.passWord) {
    callback(new Error('两次密码不一样!'));
  } else {
    callback();
  }
};

// 手机号正则校验
const Mobile = (rule: any, value: any, callback: any) => {
  const regMobile = /^((\(\d{2,3}\))|(\d{3}\-))?1[3|5|8]\d{9}$/;
  if (regMobile.test(value)) {
    // 合法邮箱
    return callback();
  }
  callback(new Error('请输入合法邮箱'));
};

// 自定义邮箱规则
var checkEmail = (rule: any, value: any, callback: any) => {
  const regEmail = /^\w+@\w+(\.\w+)+$/;
  if (regEmail.test(value)) {
    // 合法邮箱
    return callback();
  }
  callback(new Error('请输入合法邮箱'));
};

const rules = reactive<FormRules>({
  userName: [
    { required: true, message: '用户名必须填写', trigger: 'blur' },
    { min: 3, max: 64, message: '字数不能必须为3-60之间', trigger: 'blur' }
  ],
  nickName: [
    { required: true, message: '姓名必须填写', trigger: 'blur' },
    { min: 3, max: 64, message: '字数不能必须为3-60之间', trigger: 'blur' }
  ],
  gender: [
    {
      required: true,
      message: '选一个性别吧',
      trigger: 'change'
    }
  ],
  passWord: [
    {
      required: true,
      validator: validatePass,
      trigger: 'blur'
    }
  ],
  nextPassWord: [
    {
      required: true,
      validator: validatePass2,
      trigger: 'blur'
    }
  ],
  deptId: [
    {
      required: true,
      message: '选一个单位吧',
      trigger: 'change'
    }
  ],
  mobile: [
    {
      required: true,
      validator: Mobile,
      trigger: 'blur'
    }
  ],
  email: [
    {
      required: true,
      validator: checkEmail,
      trigger: 'blur'
    }
  ]
});
</script>

<style scoped></style>
