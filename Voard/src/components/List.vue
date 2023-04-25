<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글목록</v-app-bar-title>

      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-center" width="80">번호</th>
                <th class="text-center" width="auto">제목</th>
                <th class="text-center" width="100">글쓴이</th>
                <th class="text-center" width="100">조회수</th>
                <th class="text-center" width="100">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-left">제목입니다.</td>
                <td class="text-center">길동이</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-24</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-left">제목입니다.</td>
                <td class="text-center">길동이</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-24</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-left">제목입니다.</td>
                <td class="text-center">길동이</td>
                <td class="text-center">12</td>
                <td class="text-center">23-04-24</td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="success" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <div class="text-center">
            <v-pagination
              :length="100"
              :total-visible="7"
              rounded="circle"
            ></v-pagination>
          </div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter();
const store = useStore();

const user = computed(() => store.getters.user);

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};

const btnWrite = () => {
  router.push("/write");
};
</script>
<style scoped></style>
