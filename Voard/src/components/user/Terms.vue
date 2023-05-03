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
            v-model="value.terms"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
            v-model="isCheck1"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="value.privacy"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다."
            v-model="isCheck2"
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
import axios from "axios";
import { reactive, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isCheck1 = ref(false);
const isCheck2 = ref(false);

const value = reactive({
  terms: null,
  privacy: null,
});

const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  if (isCheck1.value && isCheck2.value) {
    router.push("/user/register");
  } else {
    alert("동의 체크를 하셔야 합니다.");
  }
};

onBeforeMount(() => {
  axios
    .get("/user/terms")
    .then((response) => {
      value.terms = response.data.terms;
      value.privacy = response.data.privacy;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
