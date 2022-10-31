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
      <li v-for="(item, index) of titleObj.children" key="index" @click="secondMenuFn(titleObj.id, item.id)"
        :class="{ current: item.id == childrenObj.id }">
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
            <a :class="{ red: fontStyle[0] }" href="javascript:;" @click="setSizeFn(0, '23px')">大</a>
          </li>
          <li>
            <a :class="{ red: fontStyle[1] }" href="javascript:;" @click="setSizeFn(1, '18px')">中</a>
          </li>
          <li>
            <a :class="{ red: fontStyle[2] }" href="javascript:;" @click="setSizeFn(2, '14px')">小</a>
          </li>
          <li>】</li>
        </ul>
        <p class="author-set" id="updateTime">
          发表时间：2019-11-26&nbsp;&nbsp;&nbsp;来源：中国地方铁路协会会长 黄民
        </p>
        <div class="text-box mt30 mb30" id="textBox" style="text-indent:2em;" :style="{ fontSize: fontSizeType }">
          <p>广东省铁道学会成立时间于1981年，一直挂靠中国铁路广州局集团有限公司（
            设秘书处），登记机构为广东省民政厅，业务主管单位为广东省科协、受中国铁道学会业务指导
            。理事长由广州局集团公司一名副总经理兼任，第六届理事会现有理事108人。学会最高权力机构为理事会，
            理事长为法定代表人。下设3个分会（广州地铁分会、中铁二十五局分会、广州铁路职业学院分会）、
            4个工作委员会、18个专业委员会。</p>
          <p>广东省铁道学会由广东省铁道科学技术工作者自愿组成，依法登记的非营利性学术性社会团体，
            是党和政府联系铁道科学技术工作者的桥梁和纽带，是推动广东省铁道科学技术事业发展的重要社会力量。</p>
          <p>主要业务范围：积极开展学术交流活动、普及科学技术知识；开展在职
            员工培训教育；接受委托开展铁道科技决策、运输生产、区域铁道发展规划及建设等方面
            进行科技咨询，提供技术咨询、技术服务、技术转让和技术中介；按规定表彰奖励铁道学会先进科技
            工作者和集体，发现和推荐优先科技人才；编印铁道科学技术期刊、书籍、科普资料、培训教材。</p>
          <p>《广东铁道》是由广东省铁道学会主办，经广东省新闻出版局审核同意发行的内部资料性出版物，准印
            证编号为粤（O）L0150069号、季刊（一年4期）、大16K50页。改革前，《广东铁道》是16K52页刊物，可全刊发表论文大概14
            -16篇（视篇幅长短）。受机构改革影响，2019-2020年停刊一年，2020年底复刊后，按照省新闻出版局要求，刊发内容
            分为铁道论文和铁道信息2个版块。铁道论文每期不超过5篇，篇幅不超过25页。内容范围包括铁路运输生产、设备设
            施运维、科技创新交流等。《广东铁道》自1987年发行第1期以来，目前已发行139期，为广大会员和科技工作者在职
            称评审和学术交流方面提供了良好平台。</p>

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
