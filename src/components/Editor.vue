<template>
  <form class="contextbox" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Title" v-model="note.title" />
    <textarea
      rows="8"
      placeholder="Description"
      class=""
      spellcheck="false"
      v-model="note.desc"
    ></textarea>

    <div class="controls">
      <div class="colors">
        <span
          v-for="color in colors"
          :key="color"
          :style="{
            'background-color': color,
            border: note.color == color ? '1px solid #333' : '',
          }"
          @click="note.color = color"
          
        >
        </span>
        <!-- <span class="c2" data-note-color="#FFE5D9"></span>
            <span class="c3" data-note-color="#FBFAF0"></span>
            <span class="c4" data-note-color="#FFE9EE"></span>
            <span class="c5" data-note-color="#FFDDE4"></span> -->
      </div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "Editor",
  data() {
    return {
      note: {
        id:null,
        title: "",
        desc: "",
        color: null,
        time:null
      },
    };
  },
  computed: {
    ...mapState(["colors"]),
  },
  methods:{
    handleSubmit(){
      this.note.id = uuidv4()
      this.note.time = new Date()

      if(this.note.title===''||this.note.desc===''){
        alert("PLZ Add Note's Title/Description")
      }else{
        this.$store.commit("addNote",this.note)
      }
      

      this.note ={
        id:null,
        title: "",
        desc: "",
        color: null,
        time:null
      }
    }
  }
};
</script>

<style></style>
