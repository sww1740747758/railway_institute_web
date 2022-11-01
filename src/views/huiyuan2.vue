<template>
  <titleSlot>
    <template #title>
      <span>会员单位</span>
    </template>
    <template #default>
      <ul style="margin-top: -12px">
        <li style="line-height: 44px; color: #333333" v-for="item in 7" :key="item">
          <a style="color: inherit">
            <p>丁薛祥参加中央国家机关代表团讨论的撒大大</p>
          </a>
        </li>
      </ul>
    </template>
  </titleSlot>
</template>
<script setup>
import titleSlot from '../components/Title.vue';
</script>
<style scoped>
p {
  width: 100%;
  /*要显示文字的宽度*/
  text-overflow: ellipsis;
  /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
  white-space: nowrap;
  /*让文字不换行*/
  overflow: hidden;
  /*超出要隐藏*/
}
</style>
