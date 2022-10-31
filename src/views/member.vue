<!-- eslint-disable no-redeclare -->
<template>
  <div class="column_wrapper_1400_bg01" data-spm-anchor-id="0.0.0.i2">
    <div class="column_wrapper_1400">
      <div id="SUBD1665539856661604">
        <div class="dyw_1026_ind04">
          <div id="SUBD1665552673299388">
            <div class="time">
              <div class="month">
                <div class="img">
                  <img
                    src="//p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1665454845457745/dyw_1026_monthBg.png"
                  />
                </div>
                {{ year }}<span>年</span>{{ month }}<span>月</span>
              </div>
              <div class="day">
                <div class="tab tab-prev" @click="switchDate(98)"></div>
                <div class="tab-con mySwiper_ind04">
                  <ul class="swiper-wrapper">
                    <li
                      v-for="item of days"
                      :key="item"
                      class="swiper-slide"
                      :class="{ cur: item.isClass }"
                      @click="switchDate(item.day)"
                      style="cursor: pointer"
                    >
                      {{ item.day }}<span>日</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab tab-next"
                  @click="switchDate(99)"
                  data-spm-anchor-id="0.0.0.i0"
                ></div>
              </div>
            </div>
            <div class="clear"></div>
            <div class="box">
              <div id="SUBD1665558802956663">
                <div class="con">
                  <div class="left">
                    <ul>
                      <li>
                        <a
                          href="https://www.12371.cn/2022/10/15/ARTI1665820365723761.shtml"
                          target="_blank"
                        >
                          <h3>党的二十大预备会议</h3>
                          <p>
                            会议通过代表资格审查委员会名单，通过大会主席团名单，通过大会秘书长；通过大会秘书处机构设置和工作任务；通过二十大的议程。
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="right">
                    <ul>
                      <li>
                        <a
                          href="https://www.12371.cn/2022/10/15/VIDE1665837121296118.shtml"
                          target="_blank"
                        >
                          <h3>二十大新闻发布会</h3>
                          <p>
                            中国共产党第二十次全国代表大会新闻发布会在人民大会堂举行，新闻发言人孙业礼介绍二十大准备工作情况和大会议程。
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const year = ref();
const month = ref();
const teDay = ref();

const days = ref([]);

function getArrayIndex(arr, obj) {
  var i = arr.length;

  while (i--) {
    if (arr[i].day === obj) {
      return i;
    }
  }

  return -1;
}

const switchDate = toDay => {
  let index = 0;
  //下一天
  if (toDay == 99) {
    index = getArrayIndex(days.value, teDay.value) + 1;
    if (index >= days.value.length) {
      return false;
    }
    toDay = days.value[getArrayIndex(days.value, teDay.value) + 1].day;
  } else if (toDay == 98) {
    //上一天
    index = getArrayIndex(days.value, teDay.value) - 1;
    if (index < 0) {
      return false;
    }
    toDay = days.value[getArrayIndex(days.value, teDay.value) - 1].day;
  }
  for (let i = 0; i < days.value.length; i++) {
    if (toDay == days.value[i].day) {
      days.value[i].isClass = true;
    } else {
      days.value[i].isClass = false;
    }
  }
  teDay.value = toDay;
};

const getWeekDataList = () => {
  //根据日期获取本周周一~周日的年-月-日
  let date = new Date();
  //判断本日期是否为周日，获取本周一日期
  if (date.getDay() == '0') {
    date.setDate(date.getDate() - 6);
  } else {
    date.setDate(date.getDate() - date.getDay() + 1);
  }
  let myDate = date.getDate();
  let myMonth = date.getMonth() + 1;
  if (date.getDate() < 10) {
    myDate = '0' + myDate;
  }
  if (date.getMonth() + 1 < 10) {
    myMonth = '0' + myMonth;
  }

  year.value == date.getFullYear();
  month.value = myMonth;
  teDay.value = myDate;
  let dataFromt = {
    year: date.getFullYear(),
    month: myMonth,
    day: myDate,
    isClass: true
  };
  days.value.push(dataFromt);
  // 获取周二以后日期
  for (var i = 0; i < 8; i++) {
    date.setDate(date.getDate() + 1);
    myDate = date.getDate();
    myMonth = date.getMonth() + 1;
    if (date.getDate() < 10) {
      myDate = myDate;
    }
    if (date.getMonth() + 1 < 10) {
      myMonth = myMonth;
    }
    let dataFromt2 = {
      year: date.getFullYear(),
      month: myMonth,
      day: myDate,
      isClass: false
    };
    days.value.push(dataFromt2);
  }
};
onMounted(() => {
  getWeekDataList();
});
</script>

<style scoped>
@import '../assets/css/meber.css';
</style>
