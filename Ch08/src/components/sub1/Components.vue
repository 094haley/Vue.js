<template>
  <h4>Vuetify Components 실습</h4>

  <div>
    <h4>Icons</h4>
    <v-icon icon="mdi-vuetify"></v-icon>
    <v-icon color="success" icon="mdi-wifi" size="large"></v-icon>
    <v-icon icon="mdi-dog" color="info"></v-icon>
    <hr />

    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <hr />

    <h4>Buttons</h4>
    <v-btn> Button1 </v-btn>
    <v-btn prepend-icon="mdi-cat"> Button2 </v-btn>
    <v-btn block>Block Button</v-btn>
    <v-btn color="primary">Button3</v-btn>
    <v-btn color="secondary">Button4</v-btn>
    <v-btn color="success">Button5</v-btn>
    <v-btn color="warning">Button6</v-btn>
    <hr />

    <h4>Cards</h4>
    <v-card title="제목입니다." subtitle="부제목입니다." text="내용입니다.">
      <v-card-actions>
        <v-btn>확인</v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="400" class="my-10">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>
      </v-img>
      <v-card-text> This is content </v-card-text>
    </v-card>

    <hr />
  </div>
</template>
<script setup></script>
<style scoped></style>
