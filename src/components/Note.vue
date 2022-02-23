<template>
  <div class="note" :style="{ 'background-color': note.color }">
    <div>
      <h3 class="title">📌 {{ note.title }}</h3>
      <p>{{ note.desc }}</p>
    </div>
    <p class="time">{{ time }}</p>

    <!-- <div class="buttons"><button class="delete" @click="remove">🎈</button></div> -->
    <div class="buttons"><button class="delete" @click="remove">X</button></div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export default {
  name: "Note",
  props: ["note"],
  computed: {
    time() {
      // return dayjs(this.note.time).format('D MMM YYYY,hh:mm:ss')
      return dayjs(this.note.time).fromNow();
    },
  },
  methods: {
    remove() {
      this.$store.commit("deleteNote", this.note.id);
    },
  },
};
</script>

<style>
</style>