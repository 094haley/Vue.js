<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>로그인</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="mx-auto mt-16" max-width="400">
          <v-card-item>
            <v-card-title>로그인</v-card-title>
          </v-card-item>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    label="아이디"
                    prepend-icon="mdi-account"
                    variant="underlined"
                    hide-details="true"
                    v-model="user.uid"
                  ></v-text-field>

                  <v-text-field
                    type="password"
                    label="비밀번호"
                    prepend-icon="mdi-lock"
                    variant="underlined"
                    hide-details="true"
                    v-model="user.pass"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    color="primary"
                    height="80"
                    block
                    class="mt-4"
                    @click="btnLogin"
                  >
                    로그인
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions class="float-right">
            <v-btn @click="btnRegister">회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";

const router = useRouter();
const store = useStore();

const user = reactive({
  uid: null,
  pass: null,
});

const btnRegister = () => {
  router.push("/user/terms");
};

const btnLogin = () => {
  axios
    .post("http://localhost:8080/Voard/user/login", user)
    .then((response) => {
      console.log(response);
      const accessToken = response.data.accessToken;
      const user = response.data.user;

      localStorage.setItem("accessToken", accessToken);
      store.dispatch("setUser", user);

      router.push("/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
