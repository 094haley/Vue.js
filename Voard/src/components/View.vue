<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <v-btn @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card max-width="800" class="mx-auto">
          <v-card-title class="headline font-weight-bold mb-3"
            >제목입니다.</v-card-title
          >
          <span class="d-flex justify-end mr-5 mb-2"
            ><v-icon>mdi-account</v-icon>길동이</span
          >
          <v-sheet class="d-flex justify-end align-center">
            <v-card-subtitle class="grey--text text--lighten-1"
              >조회수 12</v-card-subtitle
            >
            <v-card-subtitle class="grey--text text--lighten-1"
              >23-04-24</v-card-subtitle
            >
          </v-sheet>
          <v-card-text class="grey--text">
            <v-spacer></v-spacer>
            <div>내용입니다.</div>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>

        <v-sheet max-width="800" class="mx-auto">
          <v-sheet class="text-right mt-6">
            <v-btn class="mr-2" @click="btnBack">삭제</v-btn>
            <v-btn class="mr-2" @click="btnBack">수정</v-btn>
            <v-btn color="primary" @click="btnModify">목록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup></script>
<style scoped></style>
