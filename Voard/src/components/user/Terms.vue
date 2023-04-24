<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>약관</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-textarea
            label="이용약관"
            variant="outlined"
            rows="10"
            hide-details="true"
            model-value="내용입니다."
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
            model-value="내용입니다."
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
          ></v-checkbox>
          <v-sheet class="text-center">
            <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnNext">다음</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  router.push("/user/register");
};
</script>
<style scoped></style>
