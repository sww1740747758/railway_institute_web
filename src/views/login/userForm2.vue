<template>
  <el-main>
    <el-form v-if="type == '1'" ref="ruleFormRef2" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="请选择生日" />
      </el-form-item>
      <el-form-item label="民族" prop="nation">
        <el-input v-model="ruleForm.nation" />
      </el-form-item>
      <el-form-item label="固话" prop="phone">
        <el-input placeholder="区号-固话" v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="现职专业" prop="presentProfessional">
        <el-input v-model="ruleForm.presentProfessional" />
      </el-form-item>
      <el-form-item label="学会任职职务" prop="officeJob">
        <el-input v-model="ruleForm.officeJob" />
      </el-form-item>
      <el-form-item label="政治面貌" prop="politicsStatus">
        <el-input v-model="ruleForm.politicsStatus" />
      </el-form-item>
      <el-form-item label="身份证号码" prop="idCard">
        <el-input placeholder="请填写身份证号码" v-model="ruleForm.idCard" />
      </el-form-item>

    </el-form>
    <el-form v-if="type == '2'" ref="ruleFormRef2" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="单位会员类型" prop="unitMembershipType">
        <el-input v-model="ruleForm.unitMembershipType" />
      </el-form-item>
      <el-form-item label="机构代码证号" prop="institutionCode">
        <el-input v-model="ruleForm.institutionCode" />
      </el-form-item>
      <el-form-item label="公司网址" prop="websiteAddress">
        <el-input v-model="ruleForm.websiteAddress" />
      </el-form-item>
      <el-form-item label="单位性质" prop="natureOfUnit">
        <el-input v-model="ruleForm.natureOfUnit" />
      </el-form-item>
      <el-form-item label="主管部门" prop="competentDepartment">
        <el-input v-model="ruleForm.competentDepartment" />
      </el-form-item>
      <el-form-item label="成立时间" prop="establishedTime">
        <el-date-picker v-model="ruleForm.establishedTime" type="date" placeholder="成立时间" />
      </el-form-item>
      <el-form-item label="注册资金" prop="registeredCapital">
        <el-input-number v-model="ruleForm.registeredCapital" />万
      </el-form-item>
      <el-form-item label="单位代表" prop="representative">
        <el-input v-model="ruleForm.representative" />
      </el-form-item>
      <el-form-item label="单位代表电话" prop="representativePhone">
        <el-input v-model="ruleForm.representativePhone" />
      </el-form-item>
      <el-form-item label="联系人" prop="linkman">
        <el-input v-model="ruleForm.linkman" />
      </el-form-item>
      <el-form-item label="联系人职称" prop="linkmanRank">
        <el-input v-model="ruleForm.linkmanRank" />
      </el-form-item>
      <el-form-item label="联系人电话" prop="linkmanPhone">
        <el-input v-model="ruleForm.linkmanPhone" />
      </el-form-item>
    </el-form>
    <el-form v-if="type == '3'" ref="ruleFormRef2" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="学历" prop="education">
        <el-input v-model="ruleForm.education" />
      </el-form-item>
      <el-form-item label="学位" prop="degree">
        <el-input v-model="ruleForm.degree" />
      </el-form-item>
      <el-form-item label="毕业院校" prop="graduateSchool">
        <el-input v-model="ruleForm.graduateSchool" />
      </el-form-item>
      <el-form-item label="所学专业" prop="collageGraduate">
        <el-input v-model="ruleForm.collageGraduate" />
      </el-form-item>
      <el-form-item label="主要业绩" prop="mainAchievement">
        <el-input v-model="ruleForm.mainAchievement" />
      </el-form-item>
      <el-form-item label="专业领域1" prop="areaOne">
        <el-input v-model="ruleForm.areaOne" />
      </el-form-item>
      <el-form-item label="专业领域1" prop="areaTwo">
        <el-input v-model="ruleForm.areaTwo" />
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
const props = defineProps({
  //子组件接收父组件传递过来的值
  type: String
});
const { type } = toRefs(props);
const formSize = ref('default');
const ruleFormRef2 = ref<FormInstance>();
const ruleForm = reactive({

  //个人会员
  birthday: '',
  nation: '',
  phone: '',
  presentProfessional: '',
  officeJob: '',
  politicsStatus: '',
  idCard: '',


  //单位会员
  unitMembershipType: "",
  institutionCode: "",
  websiteAddress: "",
  natureOfUnit: "",
  competentDepartment: "",
  establishedTime: "",
  registeredCapital: 0,
  representative: "",
  representativePhone: "",
  linkman: "",
  linkmanRank: "",
  linkmanPhone: "",

  //专家
  education: "",
  degree: "",
  graduateSchool: "",
  collageGraduate: "",
  mainAchievement: "",
  areaOne: "",
  areaTwo: ""
});


// 固话正则校验
const tel = (rule: any, value: any, callback: any) => {
  const tel = /^(0[0-9]{2,3}\-)([2-9][0-9]{4,7})+(\-[0-9]{1,4})?$/
  if (value == "" || tel.test(value)) {
    // 合法邮箱
    return callback();
  }
  callback(new Error('请输入合法固定电话'));
};
// 身份证正则校验
const idCard = (rule: any, value: any, callback: any) => {
  var idCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (idCard.test(value)) {
    return callback();
  }
  callback(new Error('请输入合法身份证号码'));
};


const rules = reactive<FormRules>({
  phone: [
    {
      validator: tel,
      trigger: 'blur'
    }
  ],
  idCard: [
    {
      required: true,
      validator: idCard,
      trigger: 'blur'
    }
  ]
});

const validate = () => {
  return new Promise(resolve => {
    if (!ruleFormRef2.value) return;
    ruleFormRef2.value.validate((valid: any) => {
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
