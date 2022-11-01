<script setup>
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import silder from '../assets/image/silder.jpg';
import titleSlot from '../components/Title.vue';
import asyncCom from './asyncHome.vue';
const huiYuan = defineAsyncComponent(() => import('./huiyuan.vue'));
const huiYuan2 = defineAsyncComponent(() => import('./huiyuan2.vue'));
const member = defineAsyncComponent(() => import('./member.vue'));
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
        <el-carousel height="450px">
          <el-carousel-item v-for="item in silderObj" :key="item.id">
            <el-image :src="item.silder" />
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-header style="margin-top: 10%">
        <asyncCom />
      </el-header>
    </el-main>
    <el-main>
      <el-header>
        <titleSlot v-for="item of titleList" :key="item">
          <template #title>
            <span>{{ item }}</span>
          </template>
          <template #default>
            <ul style="margin-top: -12px">
              <li style="line-height: 44px; color: #333333" v-for="item in 4" :key="item">
                <a style="color: inherit">
                  <p>
                    <span :class="{ top: true }">置顶</span>
                    丁薛祥参加中央国家机关代表团讨论的撒大大萨达萨达萨达萨达
                  </p>
                </a>
              </li>
            </ul>
          </template>
        </titleSlot>
      </el-header>
    </el-main>
  </el-container>

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
  <Suspense>
    <template v-slot:default>
      <member />
    </template>
    <template v-slot:fallback>
      <h3>加载中.....</h3>
    </template>
  </Suspense>
</template>

<style scoped>
.el-header,
.el-main,
.el-footer {
  width: 100%;
  height: auto;
}

.el-container {
  margin: 0 auto;
  width: 80%;
}

.top {
  margin-left: 10%;
  display: inline-block;
  width: 36px;
  height: 24px;
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: bolder;
  line-height: 24px;
  text-align: center;
  background-color: #ff0000;
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
