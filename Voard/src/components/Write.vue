<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <v-btn @click="btnLotout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>

          <v-textarea
            label="내용입력"
            variant="outlined"
            rows="12"
            v-model="article.content"
          >
          </v-textarea>

          <v-file-input label="파일첨부" variant="outlined"></v-file-input>

          <v-sheet class="text-right">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnWrite" class="ml-2">글등록</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="400">
          <v-card>
            <v-card-text> 등록 완료 </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const article = reactive({
  title: null,
  content: null,
  uid: null,
});

const btnCancel = () => {
  router.push("/list");
};

const dialog = ref(false);

const btnWrite = () => {
  const user = store.getters.user;
  article.uid = user.uid;

  console.log(article);

  axios
    .post("/write", article)
    .then((response) => {
      console.log(response);
      dialog.value = true;
      //router.push("/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
