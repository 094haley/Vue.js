<template>
  <h4>watch</h4>
  <p>금지문자 : {{ banText }}</p>
  <textarea v-model="inputText"> </textarea>
</template>
<script>
export default {
  name: "ApiComponent4",
  data() {
    return {
      banText: "stupid",
      inputText: "",
    };
  },
  // 상태값 업데이트를 감지해서 특정 로직을 수행하는 API
  watch: {
    inputText: function () {
      console.log("inputText watch!!");

      let pos = this.inputText.indexOf(this.banText);
      if (pos >= 0) {
        alert(this.banText + "는 입력 불가!");
        this.inputText = this.inputText.substring(0, pos);
      }
    },
  },
};
</script>

<style scoped></style>
