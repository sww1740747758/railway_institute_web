<script setup>
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import silder from '../assets/image/silder.jpg';
import titleSlot from '../components/Title.vue';
import asyncCom from './asyncHome.vue';
const huiYuan = defineAsyncComponent(() => import('./huiyuan.vue'));
const huiYuan2 = defineAsyncComponent(() => import('./huiyuan2.vue'));
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

const titleList = ref(['通知公告', '工作动态', '行业要闻']);
const target = ref(null);
const targetIsVisible = ref(false);

// stop 是停止观察是否进入或移出可视区域的行为
const { stop } = useIntersectionObserver(
  // target 是观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
  target,
  // isIntersecting 是否进入可视区域，true是进入 false是移出
  // observerElement 被观察的dom
  ([{ isIntersecting }], observerElement) => {
    // 在此处可根据isIntersecting来判断，然后做业务
    if (isIntersecting) {
      targetIsVisible.value = targetIsVisible;
    }
  }
);
</script>
<template>
  <el-container>
    <el-main>
      <el-header>
        <div class="block text-center">
          <el-carousel height="450px">
            <el-carousel-item v-for="item in silderObj" :key="item.id">
              <el-image :src="item.silder" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-header>
      <el-header style="margin-top: 10%">
        <asyncCom />
      </el-header>
    </el-main>
    <el-main>
      <el-header>
        <titleSlot v-for="item of titleList">
          <template #title>
            <span>{{ item }}</span>
          </template>
          <template #default>
            <div class="pull-left quick-info">
              <ul class="com-ul-list clearfloat" id="str0Box">
                <li class="top-container">
                  <i></i
                  ><a
                    onclick="goPage(44,2181)"
                    href="javascript:;"
                    title="中国地方铁路改革发展这十年"
                    >中国地方铁路改革发展这十年</a
                  ><span class="top top-right">置顶</span>
                </li>
                <li class="top-container" style="margin-left: 45px">
                  <i></i
                  ><a
                    onclick="goPage(20,2161)"
                    href="javascript:;"
                    title="黄民会长会见国投集团钟国东副总裁一行"
                    >黄民会长会见国投集团钟国东副总裁一行</a
                  ><span class="top top-right">置顶</span>
                </li>
                <li class="top-container">
                  <i></i
                  ><a
                    onclick="goPage(15,3)"
                    href="javascript:;"
                    title="协会章程"
                    >协会章程</a
                  >
                </li>
                <li class="top-container" style="margin-left: 45px">
                  <i></i
                  ><a
                    onclick="goPage(31,2201)"
                    href="javascript:;"
                    title="《今日铁路》2022年第9期"
                    >《今日铁路》2022年第9期</a
                  >
                </li>
                <li class="top-container">
                  <i></i
                  ><a
                    onclick="goPage(15,3)"
                    href="javascript:;"
                    title="协会章程"
                    >协会章程</a
                  >
                </li>
                <li class="top-container" style="margin-left: 45px">
                  <i></i
                  ><a
                    onclick="goPage(31,2201)"
                    href="javascript:;"
                    title="《今日铁路》2022年第9期"
                    >《今日铁路》2022年第9期</a
                  >
                </li>
              </ul>
            </div>
          </template>
        </titleSlot>
      </el-header>
    </el-main>
  </el-container>

  <el-container>
    <el-main>
      <Suspense>
        <template v-slot:default>
          <div ref="target" class="common-layout">
            <el-container>
              <el-aside width="60%">
                <huiYuan v-if="targetIsVisible" />
              </el-aside>
              <el-main>
                <huiYuan2 v-if="targetIsVisible" />
              </el-main>
            </el-container>
          </div>
        </template>
        <template v-slot:fallback>
          <h3>加载中.....</h3>
        </template>
      </Suspense>
    </el-main>
  </el-container>
</template>

<style scoped>
@import '../assets/css/centerStyle.css';
@import '../assets/css/common.css';

.el-header,
.el-main,
.el-footer {
  width: 100%;
  height: auto;
}

.image {
  width: 100%;
  display: block;
}

.el-card {
  margin-bottom: 20px;
}

.el-col,
.el-row {
  padding-right: 10px;
  padding-right: 0;
  padding-left: 0;
}
</style>
