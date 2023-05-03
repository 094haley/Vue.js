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
                <v-col cols="5">
                  <v-text-field
                    label="아이디 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.uid"
                  ></v-text-field>
                </v-col>
                <v-col cols="7">
                  <v-btn
                    :loading="loading"
                    color="warning"
                    class="ma-2"
                    @click="btnCheckUid"
                  >
                    중복확인
                  </v-btn>
                  <v-chip
                    v-if="rsChip1"
                    class="ma-2"
                    color="red"
                    text-color="white"
                  >
                    이미 사용중인 아이디 입니다.
                  </v-chip>

                  <v-chip
                    v-if="rsChip2"
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >
                    사용 가능한 아이디 입니다.
                  </v-chip>
                </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    type="password"
                    label="비밀번호 입력"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.pass1"
                  ></v-text-field>
                </v-col>
                <v-col cols="5"> </v-col>
              </v-row>
              <v-row no-gutters="true" class="mb-2">
                <v-col cols="7">
                  <v-text-field
                    type="password"
                    label="비밀번호 확인"
                    variant="outlined"
                    hide-details="true"
                    density="compact"
                    v-model="user.pass2"
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
                    v-model="user.name"
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
                    v-model="user.nick"
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
                    v-model="user.email"
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
                    v-model="user.hp"
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
                    v-model="user.zip"
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
                    v-model="user.addr1"
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
                    v-model="user.addr2"
                  ></v-text-field>
                </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-sheet class="text-center py-4">
            <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
            <v-btn color="primary" @click="btnRegister">등록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = reactive({
  uid: null,
  pass1: null,
  pass2: null,
  name: null,
  nick: null,
  email: null,
  hp: null,
  zip: null,
  addr1: null,
  addr2: null,
});

const rsChip1 = ref(false);
const rsChip2 = ref(false);
const loading = ref(false);

const btnCheckUid = () => {
  loading.value = true;

  axios
    .get("/user/checkUid", {
      params: { uid: user.uid },
    })
    .then((response) => {
      console.log(response);

      setTimeout(() => {
        loading.value = false;

        const count = response.data;
        if (count > 0) {
          rsChip1.value = true;
          rsChip2.value = false;
        } else {
          rsChip1.value = false;
          rsChip2.value = true;
        }
      }, 600);
    })
    .catch((error) => {
      console.log(error);
    });
};
const btnRegister = () => {
  //console.log(user);
  axios
    .post("/user/register", user)
    .then((response) => {
      console.log(response);
      alert("회원가입 완료!");
      router.push("/user/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

const btnCancel = () => {
  router.push("/user/login");
};
</script>
<style scoped></style>
