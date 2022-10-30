<template>
  <titleSlot>
    <template #title>
      <span>会员单位</span>
    </template>
    <template #default>
      <ul style="margin-top: -12px;">
        <li style="
              line-height: 44px;
              color: #333333;" v-for="item in 7" :key="item">
          <a style="color: inherit;">丁薛祥参加中央国家机关代表团讨论</a>
        </li>
      </ul>
    </template>
  </titleSlot>
</template>
<script setup>
import titleSlot from "../components/Title.vue"
</script>
<style scoped>
@import '../assets/css/centerStyle.css';
@import '../assets/css/common.css';
</style>