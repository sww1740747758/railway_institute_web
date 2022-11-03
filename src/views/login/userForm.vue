<template>
  <el-main>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
      :size="formSize" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="姓名" prop="nickname">
        <el-input v-model="ruleForm.nickname" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio v-for="item in  dataOption.genderOptions" :label="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="ruleForm.passWord" />
      </el-form-item>
      <el-form-item label="重复密码" prop="nextPassWord">
        <el-input type="password" v-model="ruleForm.nextPassWord" />
      </el-form-item>
      <el-form-item label="单位" prop="deptId">
        <el-tree-select v-model="ruleForm.deptId" placeholder="请选择所属部门" :data="dataOption.deptOptions" filterable
          check-strictly :render-after-expand="false" />
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
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { listDeptOptions } from '@/api/dept';
import { Option } from '@/types/common';
const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  username: 'asd',
  nickname: 'sww',
  deptId: '',
  gender: '',
  passWord: 'sww1740747758',
  nextPassWord: 'sww1740747758',
  mobile: '15571161621',
  email: '1740747758@qq.com'
});

const dataOption = reactive({
  // 部门下拉项
  deptOptions: [] as Option[],
  // 性别下拉项
  genderOptions: [] as Option[],
})

const { proxy }: any = getCurrentInstance();
onMounted(() => {
  // 初始化性别字典
  getGenderOptions();
  // 初始化部门
  getDeptOptions();
});
/**
 * 获取部门下拉项
 */
async function getDeptOptions() {
  listDeptOptions().then(response => {
    dataOption.deptOptions = response.data;
  });
}

/**
 * 获取性别下拉项
 */
function getGenderOptions() {
  proxy.$listDictItemsByTypeCode('gender').then((response: any) => {
    dataOption.genderOptions = response?.data;
  });
}
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
  callback(new Error('请输入合法手机号码'));
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

const validate = () => {
  return new Promise(resolve => {
    if (!ruleFormRef.value) return;
    ruleFormRef.value.validate((valid: any) => {
      resolve(valid);
    });
  });
}

defineExpose({
  validate, ruleForm
});
</script>

<style scoped>

</style>
