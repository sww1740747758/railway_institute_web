<template>
  <el-main>
    <el-form v-if="type == '1'" ref="ruleFormRef3" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="职称" prop="rank">
        <el-input v-model="ruleForm.rank" />
      </el-form-item>
      <el-form-item label="职务" prop="duty">
        <el-input v-model="ruleForm.duty" />
      </el-form-item>
      <el-form-item label="最后毕业学校" prop="graduateSchool">
        <el-input v-model="ruleForm.graduateSchool" />
      </el-form-item>
      <el-form-item label="最后毕业时间" prop="lastGraduationTime">
        <el-date-picker v-model="ruleForm.lastGraduationTime" type="date" />
      </el-form-item>
      <el-form-item label="毕业专业" prop="collageGraduate">
        <el-input v-model="ruleForm.collageGraduate" />
      </el-form-item>
      <el-form-item label="学位" prop="degree">
        <el-input v-model="ruleForm.degree" />
      </el-form-item>
      <el-form-item label="持何等资质证书" prop="qualificationCertificate">
        <el-input v-model="ruleForm.qualificationCertificate" />
      </el-form-item>
      <el-form-item label="通讯地址" prop="mailingAddress">
        <el-input v-model="ruleForm.mailingAddress" />
      </el-form-item>
      <el-form-item label="邮编" prop="postcode">
        <el-input v-model="ruleForm.postcode" />
      </el-form-item>
    </el-form>
    <el-form v-if="type == '2'" ref="ruleFormRef3" :model="ruleForm" :rules="rules" label-width="220px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="企业职工总人数" prop="headcount">
        <el-input-number v-model="ruleForm.headcount" />
      </el-form-item>
      <el-form-item label="管理和技术人员数" prop="managementAndTechnicalStaff">
        <el-input-number v-model="ruleForm.managementAndTechnicalStaff" />
      </el-form-item>
      <el-form-item label="高级职称数" prop="advancedLevelAccountant">
        <el-input-number v-model="ruleForm.advancedLevelAccountant" />
      </el-form-item>
      <el-form-item label="中级职称数" prop="intermediateCertificate">
        <el-input-number v-model="ruleForm.intermediateCertificate" />
      </el-form-item>
      <el-form-item label="主要铁道技术成果和产品（科技工作简况）" prop="scienceAndTechnology_work">
        <el-input v-model="ruleForm.scienceAndTechnology_work" type="textarea" />
      </el-form-item>
      <el-form-item label="技术专利及产品获奖认证情况" prop="patentsAndCertification">
        <el-input v-model="ruleForm.patentsAndCertification" />
      </el-form-item>
      <el-form-item label="工作建议" prop="suggestion">
        <el-input v-model="ruleForm.suggestion" type="textarea" />
      </el-form-item>
      <el-form-item label="通讯地址" prop="mailingAddress">
        <el-input v-model="ruleForm.mailingAddress" />
      </el-form-item>
      <el-form-item label="邮编" prop="postcode">
        <el-input v-model="ruleForm.postcode" />
      </el-form-item>
      <el-form-item label="职务" prop="duty">
        <el-input v-model="ruleForm.duty" />
      </el-form-item>
      <el-form-item label="职称" prop="rank">
        <el-input v-model="ruleForm.rank" />
      </el-form-item>
    </el-form>
    <el-form v-if="type == '3'" ref="ruleFormRef3" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="入库申请表" prop="applicationForm">
        <el-upload ref="upload" class="upload-demo" action="" drag :auto-upload="false" :on-exceed="handleExceed"
          :file-list="ruleForm.excelFilelist" :limit="1" :on-change="handleExcelChange">
          <el-icon class="el-icon--upload">
            <upload-filled />
          </el-icon>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">word/excel/pdf files</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="政治面貌" prop="politicsStatus">
        <el-input v-model="ruleForm.politicsStatus" />
      </el-form-item>
      <el-form-item label="出生年月" prop="birthday">
        <el-date-picker v-model="ruleForm.birthday" type="date" />
      </el-form-item>
      <el-form-item label="职务" prop="duty">
        <el-input v-model="ruleForm.duty" />
      </el-form-item>
      <el-form-item label="职称" prop="rank">
        <el-input v-model="ruleForm.rank" />
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue';
import {
  ElForm,
  UploadFile,
  UploadInstance,
  genFileId,
  UploadProps,
  UploadRawFile
} from 'element-plus';
import { reactive, ref, toRefs } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
const props = defineProps({
  //子组件接收父组件传递过来的值
  type: String
});
const { type } = toRefs(props);
const formSize = ref('default');
const ruleFormRef3 = ref<FormInstance>();
const ruleForm = reactive({
  //个人会员
  graduateSchool: '',
  lastGraduationTime: '',
  collageGraduate: '',
  degree: '',
  qualificationCertificate: '',
  mailingAddress: '',
  postcode: '',
  rank: '',
  duty: '',

  //单位会员
  headcount: 0,
  managementAndTechnicalStaff: 0,
  advancedLevelAccountant: 0,
  intermediateCertificate: 0,
  scienceAndTechnology_work: '',
  patentsAndCertification: '',
  suggestion: '',

  //文件集合
  excelFilelist: [] as File[],
  //专家
  applicationForm: undefined as any,
  politicsStatus: '',
  birthday: ''
});

const rules = reactive<FormRules>({
  applicationForm: [
    {
      message: '请上传入库申请表',
      trigger: 'change',
      required: true
    }
  ]
});

const upload = ref<UploadInstance>();

const handleExceed: UploadProps['onExceed'] = files => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

/**
 * Excel文件change事件
 *
 * @param file
 */
function handleExcelChange(file: UploadFile) {
  ruleForm.applicationForm = file.raw;
}

const validate = () => {
  return new Promise(resolve => {
    if (!ruleFormRef3.value) return;
    ruleFormRef3.value.validate((valid: any) => {
      resolve(valid);
    });
  });
};

defineExpose({
  validate,
  ruleForm
});
</script>

<style scoped>

</style>
