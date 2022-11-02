<script setup>
import { storeToRefs } from 'pinia';
import useStore from '@/store';
import { Search } from '@element-plus/icons-vue';
import logo from '../assets/image/logo.jpg';
import login from "./login/index.vue"
import registerVue from './login/register.vue';
const { user, homePageStore } = useStore();
const { titleList } = storeToRefs(homePageStore);
const { username, token } = storeToRefs(user);

let fitDate = ref('fill');
let search = ref('');

const searchChange = () => {
  console.log(search.value);
};
//定义路由
const router = useRouter();
const activeIndex2 = ref('0');
const handleSelect = (key, keyPath) => {
  if (key == '0') {
    router.push('/home');
  } else {
    homePageStore.getTitleObj(keyPath[0], key);
    router.push({
      path: '/textera', //B页面的路径
      query: {
        parentName: keyPath[0],
        name: key
      }
    });
  }
};

const goAdmin = () => {
  router.push('/');
};

const dialogVisible = ref(false)
const dialogRegister = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('现在关闭数据不保存。是否关闭！')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <el-dialog v-model="dialogVisible" width="30%">
    <login />
  </el-dialog>
  <el-dialog v-model="dialogRegister" :before-close="handleClose" top="20px" width="70%">
    <registerVue />
  </el-dialog>
  <div style="width: 100%; height: 100px; font-size: 0; background: #fff">
    <el-row style="width: 1300px; margin: 1% auto" id="titlePage">
      <el-col :span="12">
        <el-image style="width: 448px; height: 100px" :src="logo" :fit="fitDate"></el-image>
      </el-col>
      <el-col :span="7">
        <el-form style="padding-top: 5%">
          <el-input placeholder="请输入关键字" v-model="search" style="width: 300px; height: 50px">
            <template v-slot:suffix>
              <el-icon class="hvr-pulse" style="cursor: pointer" @click="searchChange">
                <Search />
              </el-icon>
            </template>
          </el-input>
        </el-form>
      </el-col>
      <el-col v-if="token == ''" :span="5">
        <div style="padding-top: 8%">
          <el-button type="primary" class="hvr-float-shadow" size="large" color="blue" @click="dialogVisible = true">登录
          </el-button>
          <el-button type="primary" class="hvr-float-shadow" size="large" @click="dialogRegister = true" color="blue">注册
          </el-button>
        </div>
      </el-col>
      <el-col v-else :span="5">
        <div style="padding-top: 8%">
          <el-button type="primary" class="hvr-float-shadow" size="large" color="blue" @click="goAdmin">欢迎：{{ username
          }}，点击进入后台</el-button>
        </div>
      </el-col>
    </el-row>
  </div>

  <div>
    <el-menu style="height: 45px" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
      background-color="blue" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="0">首页</el-menu-item>
      <el-sub-menu style="height: 40px" v-for="(itme, index) of titleList" :key="index" :index="itme.id">
        <template #title>{{ itme.title }}</template>
        <el-menu-item v-for="(childrenItem, childrenIndex) of itme.children" :key="childrenIndex"
          :index="childrenItem.id">{{ childrenItem.title }}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>

  <!-- <div class="block text-center">
    <el-carousel height="250px">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image :src="headerSilder" />
      </el-carousel-item>
    </el-carousel>
  </div> -->
</template>

<style scoped>
.el-menu {
  align-items: center;
  /* 垂直居中 */
  justify-content: center;
  /* 水平居中 */
}
</style>
