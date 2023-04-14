<template>
  <h4>Vuetify Grids 실습</h4>

  <h4>그리드 기본</h4>
  <v-container>
    <v-row>
      <v-col cols="12" class="border text-center">12</v-col>
    </v-row>
    <v-row>
      <v-col cols="6" class="border text-center">6</v-col>
      <v-col cols="6" class="border text-center">6</v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
    </v-row>
    <v-row>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
    </v-row>
    <v-row>
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
    </v-row>
  </v-container>

  <h4>반응형 레이아웃</h4>
  <v-container fluid>
    <v-row>
      <v-col lg="3" md="6" cols="12" class="border text-center">col1</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col2</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col3</v-col>
      <v-col lg="3" md="6" cols="12" class="border text-center">col4</v-col>
    </v-row>
  </v-container>
</template>
<script setup></script>
<style scoped></style>
