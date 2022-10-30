<script setup>
import { storeToRefs } from 'pinia';
import useStore from '@/store';
const { homePageStore } = useStore();
const { titleObj, childrenObj } = storeToRefs(homePageStore);

let fontSizeType = ref('18px;');
let fontStyle = ref([false, true, false]);

const secondMenuFn = (parent, children) => {
  homePageStore.getTitleObj(parent, children);
};
const setSizeFn = (type, size) => {
  for (let i = 0; i < fontStyle.value.length; i++) {
    if (type != i) {
      fontStyle.value[i] = false;
    } else {
      fontStyle.value[i] = true;
    }
  }
  fontSizeType.value = size;
};
</script>
<template>
  <div class="wrapper center-box">
    <div class="second-nav">
      <span id="mainNavTxt">{{ titleObj.title }}</span>
      <img src="../assets/image/icon1.png" alt="" />
    </div>
    <ul class="crumb-right">
      <li>首页</li>
      <li id="menuOne">{{ titleObj.title }}</li>
      <li id="menuTwo">{{ childrenObj.title }}</li>
    </ul>
  </div>
  <div class="wrapper">
    <ul class="menu-left" id="menuLeft">
      <li
        v-for="(item, index) of titleObj.children"
        key="index"
        @click="secondMenuFn(titleObj.id, item.id)"
        :class="{ current: item.id == childrenObj.id }"
      >
        <a href="javascript:;">{{ item.title }}</a>
      </li>
    </ul>

    <div class="content-right">
      <div class="border-style">
        <h2 class="article-title">办好协会网站 服务铁路事业和会员发展！</h2>
        <div class="line-style"></div>
        <ul class="size-set">
          <li>【字体：</li>
          <li>
            <a
              :class="{ red: fontStyle[0] }"
              href="javascript:;"
              @click="setSizeFn(0, '23px')"
              >大</a
            >
          </li>
          <li>
            <a
              :class="{ red: fontStyle[1] }"
              href="javascript:;"
              @click="setSizeFn(1, '18px')"
              >中</a
            >
          </li>
          <li>
            <a
              :class="{ red: fontStyle[2] }"
              href="javascript:;"
              @click="setSizeFn(2, '14px')"
              >小</a
            >
          </li>
          <li>】</li>
        </ul>
        <p class="author-set" id="updateTime">
          发表时间：2019-11-26&nbsp;&nbsp;&nbsp;来源：中国地方铁路协会会长 黄民
        </p>
        <div
          class="text-box mt30 mb30"
          id="textBox"
          :style="{ fontSize: fontSizeType }"
        >
          2131
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/css/centerStyle.css';
@import '../assets/css/common.css';
@import '../assets/css/articleStyle.css';
</style>
