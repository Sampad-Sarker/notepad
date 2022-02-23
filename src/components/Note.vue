<template>
  <div class="note" 
      :style="{ 'background-color': note.color ,
                transform:`rotate(${rotateAngle}deg)`
      }"
    
    
  >
    <div>
      <div class="icon"><button class="pin">📌</button></div>
      <h3 class="title">{{ note.title }}</h3>
      <p>{{ note.desc }}</p>
    </div>
    <p class="time">{{ time }}</p>

   
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
    rotateAngle() {
      let randomAngle = Math.random()
      if(randomAngle<0.5){ //50% chance
        return (Math.random() *(8 - 0)+(0)); //0 to 8
      }else if(randomAngle>0.5){
        return (Math.random() *(-1 - (-8))+(-8)); //-1 to -8
      }
       
      
    },
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