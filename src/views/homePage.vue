<script setup >
import headder from './head.vue';
import foot from './foot.vue';
let disabled = ref(false);

</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <headder></headder>
      </el-header>
      <el-main style="background-color: #eef2f5">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <foot></foot>
      </el-footer>
    </el-container>
  </div>
  <el-tooltip class="box-item" effect="dark" :disabled="disabled" content="点击可以回到顶部哦！！" placement="top-start">
    <el-backtop @mouseleave="disabled = true" />
  </el-tooltip>
</template>

<style scoped>
.el-header,
.el-mian,
.el-footer {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
</style>
