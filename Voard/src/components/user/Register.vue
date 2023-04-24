<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>회원가입</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto border">
          <v-card>
            <v-card-item>
              <v-card-title>사이트 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="아이디 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-btn color="warning" class="ml-2">중복확인</v-btn>
                </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="비밀번호 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="비밀번호 확인"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mt-4">
            <v-card-item>
              <v-card-title>개인정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="이름 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="별명 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="이메일 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="휴대폰 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    label="우편번호 검색"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-btn color="success" class="ml-2">검색</v-btn>
                </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="8">
                  <v-text-field
                    label="기본주소 검색"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="8">
                  <v-text-field
                    label="상세주소 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-sheet class="text-center py-4">
            <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="">회원가입</v-btn>
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
</script>
<style scoped></style>
