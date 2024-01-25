<script setup lang="ts">
import { weiboHotYear } from "../../api/hotspotApi";
import CopyLabel from "@/components/common/CopyLabel.vue";
const loading = ref(true);

const headers = [
  { text: "热度量", align: "start", value: "rawHot" },
  {
    text: "热点关键词",
    sortable: false,
    value: "word",
  },
  { text: "标识", value: "iconDesc" },
  { text: "事件类型", value: "category" },
  { text: "热度日期", value: "onboardTime" },
  { text: "链接", sortable: false, align: "right", value: "action" },
];

const open = (item) => { };

const items = [];
const initweiboHotYear = (item) => {
  weiboHotYear().then((res) => {
    if (res) {
      items.values = res.data;
    }
  });
};

onMounted(() => {

  initweiboHotYear();

  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <!-- loading spinner -->
  <div v-if="loading" class="h-full d-flex flex-grow-1 align-center justify-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <v-table class="pa-3">
      <thead>
        <tr>
          <th class="text-left" v-for="header in headers" :key="header.text">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items.values" :key="item.mid">
          <td class="font-weight-bold">
            {{ item.rawHot }}
          </td>
          <td>
            <copy-label :text="item.word" />
          </td>
          <td>
            <v-chip size="small" :color="item.iconDesc === '爆' ? 'pink' : 'primary'" class="font-weight-bold">
              {{ item.iconDesc }}</v-chip>
          </td>

          <td class="font-weight-bold">
            {{ item.category }}
          </td>
          
          <td>{{ item.onboardTime }}</td>
          <td>
            <v-btn elevation="4" variant="elevated" size="small" @click="open(item)">
              Open Text
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style lang="scss" scoped>
.v-table {
  table {
    padding: 4px;
    padding-bottom: 8px;

    th {
      text-transform: uppercase;
      white-space: nowrap;
    }

    td {
      border-bottom: 0 !important;
    }

    tbody {
      tr {
        transition: box-shadow 0.2s, transform 0.2s;

        &:not(.v-data-table__selected):hover {
          box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }
      }
    }
  }
}
</style>
