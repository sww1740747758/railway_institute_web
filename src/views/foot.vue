<script setup>
import { storeToRefs } from 'pinia';
import useStore from '@/store';
const { homePageStore } = useStore();
const { titile } = storeToRefs(homePageStore);
</script>

<template>
  <div class="r" data-spm-anchor-id="0.0.0.i23">
    <span>{{ titile }}版权所有</span>
    <span>
      <a href="#" target="_blank">粤ICP备xxxxx号-1</a>
    </span>
  </div>
</template>
<style scoped>
.r {
  background-color: #eee8e8;
  height: 104px;
  line-height: 104px;
  padding: 0 175px;
  overflow: hidden;
  clear: both;
  text-align: center;
}

.r span {
  margin: 0 12px;
  vertical-align: middle;
  font-size: 16px;
  color: #333333;
}
</style>
