<script setup>
import silder from '../assets/image/fendou.jpeg';
import titleSlot from '../components/Title.vue';
const fitData = ref('fill');
const silderObj = reactive([
  {
    silder: silder,
    id: 1
  },
  {
    silder: silder,
    id: 2
  },
  {
    silder: silder,
    id: 3
  },
  {
    silder: silder,
    id: 4
  },
  {
    silder: silder,
    id: 5
  },
  {
    silder: silder,
    id: 6
  },
  {
    silder: silder,
    id: 7
  },
  {
    silder: silder,
    id: 8
  }
]);
</script>

<template>
  <titleSlot>
    <template #title>
      <span>会议列表</span>
    </template>
    <template #default>
      <el-row>
        <el-col
          v-for="(item, index) of silderObj"
          :key="index"
          :span="5"
          :offset="index % 4 > 0 ? 1 : 0"
        >
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <el-image
              :src="item.silder"
              class="image hvr-grow"
              :fit="fitData"
            />
          </el-card>
          <div style="padding: 5px; text-align: center">
            <a class="hvr-grow">会议{{ index }}</a>
          </div>
        </el-col>
      </el-row>
    </template>
  </titleSlot>
</template>
<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>
