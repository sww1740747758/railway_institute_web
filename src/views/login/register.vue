<template>
    <el-steps :active="active" finish-status="success" simple>
        <el-step title="用户类型" />
        <el-step title="基本信息" />
        <el-step title="补充信息" />
        <el-step title="完善信息" />
    </el-steps>
    <el-form label-position="left" label-width="100px" style="width: 400px; 
    margin-left: 50px">
        <div v-show="active == 1">
            <el-form-item label="设备名称" prop="name">
                <el-input placeholder="请输入" />
            </el-form-item>
        </div>
        <div v-show="active == 2"></div>
        <div v-show="active == 3"></div>
        <div v-show="active == 4"></div>
    </el-form>
    <el-button style="margin-left: 80%" @click="next">下一步</el-button>
</template>

<script setup>
const active = ref(1)
const next = () => {
    if (active.value++ > 3) active.value = 1
}
</script>

<style  scoped>

</style>