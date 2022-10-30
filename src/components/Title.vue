<template>
  <div style="margin-top: 38px;">
    <div style="overflow: hidden; margin-bottom: 35px;" class="dyw_1026_title" data-spm-anchor-id="0.0.0.i8">
      <h4 data-spm-anchor-id="0.0.0.i9">
        <a style="color: blue;" href="#">
          <slot name="title"></slot>
        </a>
      </h4>
      <span class="title_line">
      </span>
    </div>
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped>
.dyw_1026_title h4 {
  float: left;
  height: 51px;
  padding-left: 15px;
  line-height: 40px;
  font-size: 38px;
  font-weight: 700;
  color: #d60b0d;
  background-image: url(../assets/image/dyw_1026_title_bg.png);
  background-repeat: no-repeat;
  background-position: bottom left;
}

.dyw_1026_title .title_line {
  position: relative;
  float: left;
  width: 141px;
  height: 51px;
  margin-left: 11px;
  background: url(../assets/image/dyw_1026_title_line.png) no-repeat left center;
}
</style>