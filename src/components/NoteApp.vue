<template>
  <div class="app">
    <div class="header"><h1 class="app-title">Notepad</h1></div>

    <Editor />
    <!-- <input type="text" placeholder="Title" />
        <textarea
          rows="8"
          placeholder="Description"
          class=""
          spellcheck="false"
        ></textarea>
        <div class="controls">
          <div class="colors">
            <span class="c1" data-note-color="#D8E2DC"></span>
            <span class="c2" data-note-color="#FFE5D9"></span>
            <span class="c3" data-note-color="#FBFAF0"></span>
            <span class="c4" data-note-color="#FFE9EE"></span>
            <span class="c5" data-note-color="#FFDDE4"></span>
          </div>
          <button>Add</button>
        </div> -->

    <div class="filter">
      <Filter />
      <!-- <button>All (2)</button>
        <button style="background-color: rgb(216, 226, 220)">1</button>
        <button style="background-color: rgb(255, 229, 217)">0</button>
        <button style="background-color: rgb(251, 250, 240)">0</button>
        <button style="background-color: rgb(255, 233, 238)">0</button>
        <button style="background-color: rgb(255, 221, 228)">1</button>
        <button style="background-color: rgb(255, 255, 255)">0</button> -->
    </div>
    <div class="notes">
      <Note v-for="note in filteredNotes" :key="note.id" :note="note" />
      <!-- <div class="note" style="background-color: rgb(216, 226, 220)">
          <div>
            <h3 class="title">very important note</h3>
            <p>heyyy</p>
          </div>
          <p class="time">a few seconds ago</p>
          <div class="buttons"><button class="delete">X</button></div>
        </div>
        <div class="note" style="background-color: rgb(255, 221, 228)">
          <div>
            <h3 class="title">Learn Vue</h3>
            <p>Vue is a easy going library</p>
          </div>
          <p class="time">a few seconds ago</p>
          <div class="buttons"><button class="delete">X</button></div>
        </div> -->
    </div>
    <div v-if="!filteredNotes.length">
        <p>Note not available</p>
    </div>
    <div >
        <p class="app-footer">developed by <span><a href="https://github.com/Sampad-Sarker" >SampadSarker</a></span>  with <span class="animate-pulse">❤️</span></p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Editor from "../components/Editor.vue";
import Filter from "../components/Filter.vue";
import Note from "../components/Note.vue";
export default {
  name: "NoteApp",
  components: { Editor, Filter, Note },
  mounted() {
    this.unsubscribe = this.$store.subscribe((_, state) => {
      localStorage.setItem("notes", JSON.stringify(state.notes));
    });
  },
  computed: {
    ...mapState(["notes"]),
    ...mapGetters(["filteredNotes"]),
  },
};
</script>

<style>
</style>