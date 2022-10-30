<template>
  <el-main>
    <titleSlot>
      <template #title>
        <span>会员风采</span>
      </template>
      <template #default>
        <div class="block text-center" m="t-4">
          <el-carousel trigger="click" height="350px">
            <el-carousel-item v-for="item in 2" :key="item">
              <el-row :gutter="20">
                <el-col v-for="item in 4" :span="6">
                  <div class="grid-content ep-bg-purple">
                    <el-image style="height: 300px;margin-bottom: 13px;" :src="silder" class="image hvr-grow"
                      :fit="fitData" />
                    <div class="text" style=" padding: 5px; text-align: center">
                      <a style="color: inherit;" class="hvr-grow">会员风采</a>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </titleSlot>
  </el-main>
</template>
<script setup>
import titleSlot from "../components/Title.vue"
import silder from '../assets/image/1665729744782_931.jpg'
const fitData = ref('fill')
const silderObj = reactive([
  {
    silder: silder,
    id: 1,
  },
  {
    silder: silder,
    id: 2,
  },
  {
    silder: silder,
    id: 3,
  },
  {
    silder: silder,
    id: 4,
  },
])
</script>
<style scoped>
.text {
  width: 100%;
  color: #333333;
  line-height: 33px;
  height: 66px;
  overflow: hidden;
  text-align: left;
}
</style>