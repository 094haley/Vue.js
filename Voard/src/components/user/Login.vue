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
                    hide-details="ture"
                  ></v-text-field>

                  <v-text-field
                    label="비밀번호"
                    prepend-icon="mdi-lock"
                    variant="underlined"
                    hide-details="ture"
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
import { useRouter } from "vue-router";

const router = useRouter();

const btnRegister = () => {
  router.push("/user/terms");
};

const btnLogin = () => {
  router.push("/list");
};
</script>
<style scoped></style>
