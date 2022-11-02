<template>
  <el-steps :active="active" finish-status="success" simple>
    <el-step title="用户类型" />
    <el-step title="基本信息" />
    <el-step title="补充信息" />
    <el-step title="完善信息" />
    <el-step title="注册结果" />
  </el-steps>
  <el-form label-position="left" label-width="100px" style="margin-left: 50px">
    <div style="width: 80%" v-show="active == 1">
      <el-main>
        <div style="margin: 0 auto">
          <el-radio-group v-model="radio1">
            <el-radio label="1" size="large" border>个人会员</el-radio>
            <el-radio label="2" size="large" border>单位会员</el-radio>
            <el-radio label="3" size="large" border>专家</el-radio>
          </el-radio-group>
        </div>
      </el-main>
    </div>
  </el-form>
  <div v-show="active == 2">
    <form1 ref="ruleFormRef" />
  </div>
  <div v-show="active == 3">
    <form2 ref="ruleFormRef2" :type="radio1" />
  </div>
  <div v-show="active == 4">
    <form3 ref="ruleFormRef3" :type="radio1" />
  </div>
  <div v-show="active == 5">
    <el-main>
      <el-empty :description="registerMsg" />
    </el-main>
  </div>
  <div style="margin-left: 70%">
    <el-button v-if="isShowPrve" color="blue" @click="prve">上一步</el-button>
    <el-button color="green" @click="next">{{ btn }}</el-button>
  </div>
</template>

<script setup>
import form1 from '../login/userForm.vue';
import form2 from '../login/userForm2.vue';
import form3 from '../login/userForm3.vue';
const active = ref(1);
const isShowPrve = ref(true);
const btn = ref('下一步');
const registerMsg = ref('注册完成');
const ruleFormRef = ref();
const ruleFormRef2 = ref();
const ruleFormRef3 = ref();
const next = () => {
  if (active.value < 5) {
    if (active.value == 2) {
      ruleFormRef.value.validate().then(valid => {
        if (valid) {
          active.value++;
        } else {
          ElNotification({
            title: '警告',
            message: '请填写完本页信息再点击下一步',
            type: 'warning'
          });
        }
      });
    } else if (active.value == 3) {
      ruleFormRef2.value.validate().then(valid => {
        if (valid) {
          btn.value = '完成';
          active.value++;
        } else {
          ElNotification({
            title: '警告',
            message: '请填写完本页信息在点击下一步',
            type: 'warning'
          });
        }
      });
    } else if (active.value == 4) {
      ruleFormRef3.value.validate().then(valid => {
        if (valid) {
          console.log(ruleFormRef3.value.ruleForm.applicationForm);
          isShowPrve.value = false;
          btn.value = '去登陆';
          active.value++;
        } else {
          ElNotification({
            title: '警告',
            message: '请填写完本页信息再点击完成',
            type: 'warning'
          });
        }
      });
    } else {
      active.value++;
    }
  } else {
    console.log('登陆页面');
  }
};
const prve = () => {
  btn.value = '下一步';
  if (active.value > 1) {
    active.value--;
  }
  return false;
};

const radio1 = ref('1');
</script>

<style scoped></style>
