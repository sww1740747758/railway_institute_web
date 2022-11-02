<script setup lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
import {
  listExpertPages,
  updateExpert,
  getExpertFormDetail,
  addExpert,
  deleteExperts
} from '@/api/expert';

import { ElForm, ElMessage, ElMessageBox, ElTree } from 'element-plus';
import { Search, Plus, Edit, Refresh, Delete } from '@element-plus/icons-vue';
import {
  ExpertFormData,
  ExpertItem,
  ExpertQueryParam
} from '@/types/api/expert';
import { Option, Dialog } from '@/types/common';

const emit = defineEmits(['roleClick']);
const queryFormRef = ref(ElForm);
const dataFormRef = ref(ElForm);

const state = reactive({
  loading: true,
  // 选中ID
  ids: [] as number[],
  queryParams: {
    pageNum: 1,
    pageSize: 10
  } as ExpertQueryParam,
  roleList: [] as ExpertItem[],
  total: 0,
  dialog: {
    title: '',
    visible: false
  } as Dialog,
  formData: {} as ExpertFormData,
  rules: {
    name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
    code: [{ required: true, message: '请输入角色编码', trigger: 'blur' }]
  },
  menuDialogVisible: false,
  resourceOptions: [] as Option[],
  btnPerms: {} as any,
  // 勾选的菜单ID
  checkedMenuIds: new Set([]),
  allPermIds: [] as string[],
  // 选中的角色
  checkedRole: {
    id: '',
    name: ''
  }
});

const { ids, loading, queryParams, roleList, total, dialog, formData, rules } =
  toRefs(state);

/**
 * 查询
 */
function handleQuery() {
  emit('roleClick', {});
  state.loading = true;
  listExpertPages(state.queryParams).then(({ data }) => {
    state.roleList = data.list;
    state.total = data.total;
    state.loading = false;
  });
}
/**
 * 重置查询
 */
function resetQuery() {
  queryFormRef.value.resetFields();
  handleQuery();
}

function handleSelectionChange(selection: any) {
  state.ids = selection.map((item: any) => item.id);
}

function handleRowClick(row: any) {
  emit('roleClick', row);
}

function handleAdd() {
  dialog.value = {
    title: '添加角色',
    visible: true
  };
}

function handleUpdate(row: any) {
  dialog.value = {
    title: '修改角色',
    visible: true
  };
  const roleId = row.id || state.ids;
  getExpertFormDetail(roleId).then(({ data }) => {
    state.formData = data;
  });
}

function submitFormData() {
  loading.value = true;
  dataFormRef.value.validate((valid: any) => {
    if (valid) {
      if (state.formData.id) {
        updateExpert(state.formData.id as any, state.formData).then(() => {
          ElMessage.success('修改角色成功');
          closeDialog();
          handleQuery();
          loading.value = false;
        });
      } else {
        addExpert(state.formData).then(() => {
          closeDialog();
          ElMessage.success('新增角色成功');
          handleQuery();
          loading.value = false;
        });
      }
    }
  });
}

/**
 * 取消
 */
function closeDialog() {
  dialog.value.visible = false;
  dataFormRef.value.resetFields();
  dataFormRef.value.clearValidate();
}

/**
 *  删除
 */
function handleDelete(row: any) {
  const ids = [row.id || state.ids].join(',');
  ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      deleteExperts(ids).then(() => {
        ElMessage.success('删除成功');
        handleQuery();
      });
    })
    .catch(() => ElMessage.info('已取消删除'));
}

onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div class="app-container">
    <div class="search">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item prop="keywords" label="关键字">
          <el-input
            v-model="queryParams.keywords"
            placeholder="角色名称"
            clearable
            @keyup.enter="handleQuery"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleQuery"
            >搜索</el-button
          >
          <el-button :icon="Refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-card>
      <template #header>
        <el-button type="success" :icon="Plus" @click="handleAdd"
          >新增</el-button
        >
        <el-button
          type="danger"
          :icon="Delete"
          :disabled="ids.length === 0"
          @click="handleDelete"
          >删除</el-button
        >
      </template>
      <!--table-->
      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="roleList"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
        highlight-current-row
        border
      >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="角色名称" prop="name" min-width="300" />
        <el-table-column label="角色编码" prop="code" width="200" />

        <el-table-column label="状态" align="center" width="150">
          <template #default="scope">
            <el-tag v-if="scope.row.status === 1" type="success">正常</el-tag>
            <el-tag v-else type="info">禁用</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="排序" align="center" width="100" prop="sort" />
        <el-table-column prop="createTime" label="创建时间" width="250" />
        <el-table-column prop="updateTime" label="修改时间" width="250" />

        <el-table-column label="操作" align="center" width="200">
          <template #default="scope">
            <el-button
              type="primary"
              :icon="Edit"
              circle
              plain
              @click.stop="handleUpdate(scope.row)"
            />
            <el-button
              type="danger"
              :icon="Delete"
              circle
              plain
              @click.stop="handleDelete(scope.row)"
            />
          </template>
        </el-table-column>
      </el-table>

      <!-- pagination -->
      <pagination
        v-if="total > 0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>

    <!-- dialog -->
    <el-dialog
      :title="dialog.title"
      v-model="dialog.visible"
      width="500px"
      destroy-on-close
    >
      <el-form
        ref="dataFormRef"
        :model="formData"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入角色名称" />
        </el-form-item>

        <el-form-item label="角色编码" prop="code">
          <el-input v-model="formData.code" placeholder="请输入角色编码" />
        </el-form-item>

        <el-form-item label="排序" prop="sort">
          <el-input-number
            v-model="formData.sort"
            controls-position="right"
            :min="0"
            style="width: 100px"
          />
        </el-form-item>

        <el-form-item label="状态">
          <el-radio-group v-model="formData.status">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitFormData">确 定</el-button>
          <el-button @click="closeDialog">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
