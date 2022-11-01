<template>
  <el-steps :active="active" finish-status="success" simple>
    <el-step title="用户类型" />
    <el-step title="基本信息" />
    <el-step title="补充信息" />
    <el-step title="完善信息" />
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
  <div v-show="active == 2"><form1 ref="ruleFormRef" /></div>
  <div v-show="active == 3"><form2 :type="radio1" /></div>
  <div v-show="active == 4"><form3 :type="radio1" /></div>
  <div style="margin-left: 80%">
    <el-button color="blue" @click="prve">上一步</el-button>
    <el-button color="green" @click="next">下一步</el-button>
  </div>
</template>

<script setup>
import form1 from '../login/userForm.vue';
import form2 from '../login/userForm2.vue';
import form3 from '../login/userForm3.vue';
const active = ref(1);
const ruleFormRef = ref();
const next = () => {
  if (active.value < 4) {
    if (active.value == 2) {
      ruleFormRef.value.validate().then(valid => {
        if (valid) {
          active.value++;
        } else {
          ElNotification({
            title: '警告',
            message: '请填写完本页信息在点击下一步',
            type: 'warning'
          });
        }
      });
    } else {
      active.value++;
    }
  }
};
const prve = () => {
  if (active.value > 1) {
    active.value--;
  }
  return false;
};

const radio1 = ref('1');
</script>

<style scoped></style>
