<script lang="ts" setup>
import {Icon} from "@iconify/vue";

const earningCardsData = [
  {
    title: "腾讯首页",
    img: "solar:bill-line-duotone",
    url: "https://sports.qq.com/nba/index.shtml",
    number: "10",
  },
  {
    title: "哔哩哔哩",
    img: "solar:layers-minimalistic-line-duotone",
    url: "https://www.bilibili.com/",
    number: "23",
  },
  {
    title: "抖音",
    img: "solar:users-group-two-rounded-line-duotone",
    url: "https://www.douyin.com/?enter=guide",
    number: "22",
  },
  {
    title: "FreeOk",
    img: "solar:user-circle-line-duotone",
    url: "https://www.freeok.vip/",
    number: "3",
  },
  {
    title: "Youtube",
    img: "solar:users-group-two-rounded-line-duotone",
    url: "https://youtube.com",
    number: "22",
  },
  {
    title: "Vc瞄",
    img: "solar:user-circle-line-duotone",
    url: "https://www.vcmiao.com/",
    number: "3",
  },
];

const skipWebsite = async (e) => {
  window.open(e);
};


</script>
<template>
  <div>
    <v-row>
      <v-col cols="12" lg="2" sm="6" v-for="revenuecard in earningCardsData" :revenuecard="revenuecard"
             :key="revenuecard.title" class="py-0 mb-3">
        <v-card elevation="10" @click="skipWebsite(revenuecard.url)">
          <span class="lstick"></span>
          <v-card-text class="pa-5">
            <div class="d-flex align-center">
              <Icon class="text-primary mr-5" :icon="revenuecard.img" width="40"/>
              <div>
                <h4 class="card-title mb-2">
                  {{ revenuecard.title }}
                </h4>
                <h2 class="text-h5">
                  {{ revenuecard.number }}
                </h2>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
