<script setup lang="ts">
import SalesCard from "@/components/dashboard/SalesCard.vue";
import TicketsCard from "@/components/dashboard/TicketsCard.vue";
import TodoCard from "@/components/dashboard/TodoCard.vue";
</script>
<template>
  <div class="pa-5">
    <!-- ---------------------------------------------- -->
    <!---First Row -->
    <!-- ---------------------------------------------- -->
    <v-row class="flex-0" dense>
      <v-col cols="12" xl="12">
        <!-- Sales Card -->
        <sales-card></sales-card>
      </v-col>
    </v-row>
    <!-- ---------------------------------------------- -->
    <!---Second Row -->
    <!-- ---------------------------------------------- -->
    <v-row class="card-shadow flex-grow-0" dense>
      <v-col cols="6" xl="6">
        <!-- Target Card-->
        <v-card class="card-shadow" height="550"><todo-card></todo-card></v-card>
      </v-col>
      <v-col cols="6" xl="6">
        <v-card class="card-shadow" height="550"><tickets-card></tickets-card>
        </v-card>
      </v-col>
    </v-row>
    <!-- ---------------------------------------------- -->
    <!---Third Row -->
    <!-- ---------------------------------------------- -->
  </div>
</template>
<style lang="scss" scoped></style>
